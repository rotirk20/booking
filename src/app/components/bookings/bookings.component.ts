import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { AngularFireDatabase } from '@angular/fire/database';


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

  constructor(private bookingService: BookingService,private db: AngularFireDatabase) {
    this.minDate = new Date();
  }

  ngOnInit() {
    this.bookings = this.bookingService.getBookings();
  }

  filterBookings() {
    this.db.list('/bookings/routes')
    .valueChanges().subscribe(bookings => {
    this.bookings = bookings;    
    this.filterBooking = this.bookings.filter(m => new Date(m.departure).getTime() >= new Date(this.fromDate).getTime() && new Date(m.departure).getTime() <= new Date(this.toDate).getTime())    
  });
  }
}
