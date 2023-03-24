import { createReducer, on } from '@ngrx/store';
import {
  addflightaction,
  deleteflightaction,
  updateflightaction,
} from './flightbooking.action';
import { Booking } from './flightbooking.state';

export const initialState: Booking = {
  flightbookings: [],
};

export const bookingreducer = createReducer(
  initialState,
  on(addflightaction, (state, { bookings }) => ({
    ...state,
    flightbookings: [...state.flightbookings, bookings],
  })),

  on(updateflightaction, (state, { bookings }) => {
    // const x = [...state.flightbookings];
    // const tempbookings = x.filter((n) => n.id !== bookings.id);
    // console.log(...tempbookings, bookings);
    const id = bookings.id
    return {
      ...state,
      flightbookings: state.flightbookings.map((b) => b.id == id ? bookings : b)
    };
  }),

  on(deleteflightaction, (state, { bookingId }) => ({
    ...state,
    flightbookings: state.flightbookings.filter((i) => i.id !== bookingId),
  }))
);
