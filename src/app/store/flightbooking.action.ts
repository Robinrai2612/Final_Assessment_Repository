import { createAction, props } from '@ngrx/store';
import { FlightBooking } from '../flightbooking';
export const addflightaction = createAction(
  '[ADD_FLIGHT] Add flight',
  props<{ bookings: FlightBooking }>()
);

export const updateflightaction = createAction(
  '[UPDATE_FLIGHT] Update flight',
  props<{ bookings: FlightBooking }>()
);

export const deleteflightaction = createAction(
  '[DELETE_FLIGHT] Delete flight',
  props<{ bookingId: String }>()
);

export const searchflightaction = createAction(
  '[SEARCH_FLIGHT] Search Flight',
  props<{ bookingId: String }>()
);
