import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { APIService } from 'src/app/API.service';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  id: string = '';
  bookForm: any;
  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    private bookingService: APIService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.bookForm = this.formBuilder.group({
      id: ['', Validators.required],
      airline: ['', Validators.required],
      flightNumber: ['', Validators.required],
      departureAirportCode: ['', Validators.required],
      arrivalAirportCode: ['', Validators.required],
      price: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
      console.log(params);
    });
    console.log(this.id);

    this.bookingService.GetFlight(this.id).then((flight) => {
      console.log(flight);
      this.bookForm = this.formBuilder.group({
        id: flight.id,
        airline: flight.airline,
        flightNumber: flight.flightNumber,
        departureAirportCode: flight.departureAirportCode,
        arrivalAirportCode: flight.arrivalAirportCode,
        price: flight.price,
      });
    });
  }

  updateFlights() {
    if (this.bookForm.invalid) {
      return;
    }
    const reqBody = {
      id: this.bookForm.value.id,
      airline: this.bookForm.value.airline,
      flightNumber: this.bookForm.value.flightNumber,
      departureAirportCode: this.bookForm.value.departureAirportCode,
      arrivalAirportCode: this.bookForm.value.arrivalAirportCode,
      price: this.bookForm.value.price,
    };
    this.bookingService.UpdateFlight(reqBody).then(() => {
      this.router.navigateByUrl('/viewdetail');
    });
  }
}
