import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingComponent } from './flight/booking/booking.component';
import { HomeComponent } from './flight/home/home.component';
import { ViewdetailsComponent } from './flight/viewdetails/viewdetails.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { bookingreducer } from './store/flightbooking.reducer';
import { EditComponent } from './flight/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    HomeComponent,
    ViewdetailsComponent,
    EditComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({}),
    StoreModule.forRoot({ BookingState: bookingreducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
