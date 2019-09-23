import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private _bookings = [
    {
      id:1,
      fromLocation: 'Zenica',
      toLocation: 'Sarajevo',
      departure: new Date('2019-09-23'),
      seats: 35,
    },
    {
      id:2,
      fromLocation: 'Tuzla',
      toLocation: 'Sarajevo',
      departure: new Date('2019-09-25'),
      seats: 45
    },
    {
      id:3,
      fromLocation: 'Mostar',
      toLocation: 'Jablanica',
      departure: new Date('2019-09-24'),
      seats: 30
    }
  ]

  constructor() { }

  getBookings() {
    return this._bookings;
  }

  getBookingById(id:number) {
    return this._bookings.filter(booking => booking.id === id)[0];
  }

  createRoute(booking: {id, fromLocation, toLocation, departure, seats}){
    this._bookings.push(booking);
  }
}
