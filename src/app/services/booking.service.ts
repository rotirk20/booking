import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class BookingService {
  bookings:any[];
  constructor(private db: AngularFireDatabase) {
}

  getBookings() {
    this.db.list('/bookings/routes')
    .valueChanges().subscribe(bookings => {
      this.bookings = bookings;
    })
  }

  getBookingById(id:number) {
    return this.bookings.filter(booking => booking.id === id)[0];
  }

  createRoute(booking: {id, fromLocation, toLocation, departure, seats}){
    this.bookings.push({
      id:booking.id,
      fromLocation:booking.fromLocation,
      toLocation:booking.toLocation,
      departure:booking.departure,
      seats:booking.seats
    });
  }
}
