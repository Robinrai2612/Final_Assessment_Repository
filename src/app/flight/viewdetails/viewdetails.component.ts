import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { APIService } from 'src/app/API.service';
import { AppState } from 'src/app/app.state';
import { Booking } from 'src/app/store/flightbooking.state';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css'],
})
export class ViewdetailsComponent implements OnInit {
  bookings: any;
  flightbookings: Booking;

  constructor(
    private bookingService: APIService,
    private store: Store<AppState>,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.bookingService.ListFlights().then((bookings) => {
      this.bookings = bookings.items;
    });
    //this.bookings=this.store.pipe(select({}));
    //this.bookService.setBookings(this.bookings
  }

  editBookings(booking): void {
    console.log('booking.id:', booking.id);
    if (booking.id != null) {
      console.log('booking.id after null check:', booking.id);
      this.router.navigate(['/edit'], {
        queryParams: {
          id: booking.id,
        },
      });
    }
  }

  deleteBookings(id: string) {
    console.log(id);
    this.bookingService.DeleteFlight({ id: id }).then(() => {
      console.log(id);
      this.bookings = this.bookings.filter((booking) => booking.id !== id);
    });
  }


}
