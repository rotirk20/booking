import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BookingService } from 'src/app/services/booking.service';
import { ActivatedRoute } from '@angular/router';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';
import { OrdersService } from 'src/app/services/orders.service';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent {
  booking: any;
  bookings;
  name: string;
  phone;
  freeSeats: number;
  modalRef: BsModalRef;
  alerts: any[] = [{}];
  orders: { name, phone, seats, location, departure } = { name: "", phone: "", seats: null, location: "", departure: "" };

  constructor(private db:AngularFireDatabase,private modalService: BsModalService, private bookingService: BookingService, private activatedRoute: ActivatedRoute, private ordersService: OrdersService) { }

  ngOnInit() {
    this.bookings = this.bookingService.getBookings();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  createOrder() {
    this.activatedRoute.params.subscribe((params) => {
      this.booking = this.bookingService.getBookingById(+params['id']);
      this.orders.location = this.booking.fromLocation + '-' + this.booking.toLocation;
      this.orders.departure = this.booking.departure;
    });
    if (this.orders.seats > 4) {
      this.alerts.push({
        type: 'danger',
        msg: `You can book maximum of 4 seats.`,
        timeout: 1300
      });
      this.orders.seats = null;
    } else if (this.orders.seats > this.booking.seats) {
      this.alerts.push({
        type: 'danger',
        msg: `That number of seats is not available!`,
        timeout: 1300
      });
      this.orders.seats = null;
    }
    else if (this.orders.name == '') {
      this.alerts.push({
        type: 'danger',
        msg: `Fill all fields!!`,
        timeout: 1300
      });
      this.orders.seats = null;
    }
    else {
      this.freeSeats = this.booking.seats - this.orders.seats;
      this.booking.seats = this.freeSeats;
      const baza = this.db.list('bookings/orders');
      baza.push({
        name: this.orders.name,
        phone: this.orders.phone,
        location: this.orders.location,
        departure: this.orders.departure.toString(),
        seats: this.orders.seats
      });
      this.orders = { name: "", phone: "", seats: null, location: "", departure: "" };
      setTimeout(() => {
        this.modalRef.hide();
      }, 1500);
      this.alerts.push({
        type: 'success',
        msg: `You successfully booked your route!`,
        timeout: 1300
      });
    }
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

}