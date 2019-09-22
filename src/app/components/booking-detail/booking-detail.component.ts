import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {
  booking: any;
  bookings;

  constructor(private activatedRoute: ActivatedRoute, private bookingService: BookingService) { }

  ngOnInit() {
    this.bookings = this.bookingService.getBookings();
    this.activatedRoute.params.subscribe((params) => {
      this.booking = this.bookingService.getBookingById(+params['id']);
    })
  }



}
