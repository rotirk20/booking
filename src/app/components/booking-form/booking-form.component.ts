import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BookingService } from 'src/app/services/booking.service';
import { ActivatedRoute } from '@angular/router';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';
import { OrdersService } from 'src/app/services/orders.service';

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
  bookSeats = 1;
  freeSeats: number;
  modalRef: BsModalRef;
  alerts: any[] = [{}];
  order: any[] = [];
  orders: { name, phone, seats, location,departure } = { name: "", phone: "", seats: null, location: "",departure:"" };

  constructor(private modalService: BsModalService, private bookingService: BookingService, private activatedRoute: ActivatedRoute, private ordersService: OrdersService) { }

  ngOnInit() {
    this.bookings = this.bookingService.getBookings();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  bookForm() {
    this.activatedRoute.params.subscribe((params) => {
      this.booking = this.bookingService.getBookingById(+params['id']);
      if (this.bookSeats > 4) {
        this.alerts.push({
          type: 'danger',
          msg: `You can book maximum of 4 seats.`,
        });
        this.bookSeats = null;
      } else if (this.bookSeats > this.booking.seats) {
        this.alerts.push({
          type: 'danger',
          msg: `That number of seats is not available!`,
        });
        this.bookSeats = null;
      }
      else {
        this.freeSeats = this.booking.seats - this.bookSeats;
        this.booking.seats = this.freeSeats;
        this.alerts.push({
          type: 'success',
          msg: `You successfully booked your route!`,
          timeout: 1300
        });
      }
    })
    setTimeout(() => {
      this.modalRef.hide();
    }, 1500);
  }

  createOrder() {
    this.activatedRoute.params.subscribe((params) => {
      this.booking = this.bookingService.getBookingById(+params['id']); 
      this.orders.location = this.booking.fromLocation + '-' + this.booking.toLocation;
      this.orders.departure = this.booking.departure;
    });
      console.log(this.orders);
      this.ordersService.createOrder(this.orders);
      this.orders = { name: "", phone: "", seats: null, location: "",departure:"" };
    }


  onClosed(dismissedAlert: AlertComponent): void {
      this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
    }

}