import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit {

  bookings : {id, fromLocation, toLocation, departure, seats} = {id: null, fromLocation: "", toLocation: "", departure: "",seats: null};

  constructor(public dataService: BookingService) { }

  ngOnInit() {
  }

  createRoute(){
    console.log(this.bookings);
    this.dataService.createRoute(this.bookings);
    this.bookings = {id: null, fromLocation: "", toLocation: "", departure: "", seats: null};
  }
}
