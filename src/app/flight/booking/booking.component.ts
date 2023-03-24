import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { of, switchMap } from 'rxjs';
import { APIService } from 'src/app/API.service';
import { FlightBooking } from 'src/app/flightbooking';
import { addflightaction } from 'src/app/store/flightbooking.action';
import { selectAllflightbookings } from 'src/app/store/flightbooking.selector';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  createForm: FormGroup;
  bookings: FlightBooking;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private bookingService: APIService,
    private router: Router
  ) {
    this.createForm = this.formBuilder.group({
      airline: ['', Validators.required],
      flightNumber: ['', Validators.required],
      departureAirportCode: ['', Validators.required],
      arrivalAirportCode: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onCreate(value: any) {
    this.bookingService.CreateFlight(value).then(
      (data) => {
        console.log(data);
        const booking = {
          airline: data.airline,
          flightNumber: data.flightNumber,
          departureAirportCode: data.departureAirportCode,
          arrivalAirportCode: data.arrivalAirportCode,
          price: data.price,
        };
        this.store.dispatch(addflightaction({ bookings: this.bookings }));
        this.store.select(selectAllflightbookings)
          .pipe(switchMap((value) => {
            if(value) {
              return of(value)
            } else {
              return this.store.select(selectAllflightbookings)
            }
          }))
          .subscribe((value) => {
            console.log()
          })
      },
      (error) => {
        console.log(error);
      }
    );
    this.router.navigateByUrl('/');
  }
}
