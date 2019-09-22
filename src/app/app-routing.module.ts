import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { HomeComponent } from './components/home/home.component';
import { BookingDetailComponent } from './components/booking-detail/booking-detail.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { CreateBookingComponent } from './components/create-booking/create-booking.component';
import { OrderComponent } from './components/order/order.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'create', component: CreateBookingComponent },
  { path: 'orders', component: OrderComponent },
  {
    path: 'bookings', component: BookingsComponent, children: [
      { path: ':id', component: BookingDetailComponent },
      { path: '', component: PlaceholderComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
