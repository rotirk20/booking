import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  fromDate = new Date();
  toDate: Date;
  filterBooking:any;
  minDate: Date;
  bookings;

  constructor(private bookingService: BookingService) {
    this.minDate = new Date();
  }

  ngOnInit() {
    this.bookings = this.bookingService.getBookings();
  }

  filterBookings() {
    this.filterBooking = this.bookings.filter(m => m.departure.getTime() >= new Date(this.fromDate).getTime() && m.departure.getTime() <= new Date(this.toDate).getTime())    
  }
}
