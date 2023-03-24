import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookingComponent } from './flight/booking/booking.component';
import { EditComponent } from './flight/edit/edit.component';
import { HomeComponent } from './flight/home/home.component';
import { ViewdetailsComponent } from './flight/viewdetails/viewdetails.component';

const routes: Routes = [
  {
    path: 'booking',
    component: BookingComponent,
  },
  {
    path: 'viewdetail',
    component: ViewdetailsComponent,
  },
  {
    path: 'edit',
    component: EditComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
