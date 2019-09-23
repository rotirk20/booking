import { Component, OnInit,TemplateRef } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit {

  bookings : {id, fromLocation, toLocation, departure, seats} = {id: null, fromLocation: "", toLocation: "", departure: "",seats: null};
  booking:any;
  modalRef: BsModalRef;
  alerts: any[] = [{}];
  constructor(public dataService: BookingService,private modalService: BsModalService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  createRoute(){
    this.activatedRoute.params.subscribe((params) => {
      this.booking = this.dataService.getBookingById(+params['id']); 
      this.bookings.id = Math.floor(Math.random() * 16) + 5;
      if (this.bookings.id === this.booking) {
        this.bookings.id = this.bookings.id + 1;
      }
    }); 
    console.log(this.bookings);
    this.dataService.createRoute(this.bookings);
    console.log(this.bookings);

    this.bookings = {id: null, fromLocation: "", toLocation: "", departure: "", seats: null};
    this.alerts.push({
      type: 'success',
      msg: `Route is successfully created!`,
      timeout:1500
  });
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }
}
