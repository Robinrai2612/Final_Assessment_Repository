import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { Booking } from './flightbooking.state';

const selectBookingState = createFeatureSelector('BookingState');
export const selectflightbookings = (state: AppState) => state.BookingState;
export const selectAllflightbookings = createSelector(
  selectBookingState,
  (state: Booking) => state.flightbookings
);
