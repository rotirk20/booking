import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { BookingComponent } from './components/booking/booking.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { BookingDetailComponent } from './components/booking-detail/booking-detail.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BookingService } from './services/booking.service';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CreateBookingComponent } from './components/create-booking/create-booking.component';
import { OrderComponent } from './components/order/order.component';


@NgModule({
  declarations: [
    AppComponent,
    BookingsComponent,
    BookingComponent,
    AboutComponent,
    HomeComponent,
    BookingDetailComponent,
    PlaceholderComponent,
    BookingFormComponent,
    CreateBookingComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    AlertModule.forRoot()
  ],
  providers: [BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
