export interface FlightBooking {
  id: String;
  airline: String;
  flightNumber: String;
  departureAirportCode: String;
  arrivalAirportCode: String;
  price: GLfloat;
  bookings: [Booking];
}
export interface Booking {
  id: String;
  firstName: String;
  lastName: String;
  flight: FlightBooking;
  flightId: String;
}
