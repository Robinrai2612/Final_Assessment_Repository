/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from '@angular/core';
import API, { graphqlOperation, GraphQLResult } from '@aws-amplify/api-graphql';
import { Observable } from 'zen-observable-ts';

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateFlight: OnCreateFlightSubscription;
  onUpdateFlight: OnUpdateFlightSubscription;
  onDeleteFlight: OnDeleteFlightSubscription;
  onCreateBooking: OnCreateBookingSubscription;
  onUpdateBooking: OnUpdateBookingSubscription;
  onDeleteBooking: OnDeleteBookingSubscription;
};

export type CreateFlightInput = {
  id?: string | null;
  airline?: string | null;
  flightNumber?: string | null;
  departureAirportCode?: string | null;
  arrivalAirportCode?: string | null;
  price: number;
};

export type ModelFlightConditionInput = {
  airline?: ModelStringInput | null;
  flightNumber?: ModelStringInput | null;
  departureAirportCode?: ModelStringInput | null;
  arrivalAirportCode?: ModelStringInput | null;
  price?: ModelFloatInput | null;
  and?: Array<ModelFlightConditionInput | null> | null;
  or?: Array<ModelFlightConditionInput | null> | null;
  not?: ModelFlightConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Flight = {
  __typename: 'Flight';
  id?: string | null;
  airline?: string | null;
  flightNumber?: string | null;
  departureAirportCode?: string | null;
  arrivalAirportCode?: string | null;
  price: number;
  bookings?: Array<Booking | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type Booking = {
  __typename: 'Booking';
  id?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  flight?: Flight | null;
  flightId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateFlightInput = {
  id: string;
  airline?: string | null;
  flightNumber?: string | null;
  departureAirportCode?: string | null;
  arrivalAirportCode?: string | null;
  price?: number | null;
};

export type DeleteFlightInput = {
  id: string;
};

export type CreateBookingInput = {
  id?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  flightId?: string | null;
};

export type ModelBookingConditionInput = {
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  flightId?: ModelIDInput | null;
  and?: Array<ModelBookingConditionInput | null> | null;
  or?: Array<ModelBookingConditionInput | null> | null;
  not?: ModelBookingConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateBookingInput = {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  flightId?: string | null;
};

export type DeleteBookingInput = {
  id: string;
};

export type SearchableFlightFilterInput = {
  id?: SearchableIDFilterInput | null;
  airline?: SearchableStringFilterInput | null;
  flightNumber?: SearchableStringFilterInput | null;
  departureAirportCode?: SearchableStringFilterInput | null;
  arrivalAirportCode?: SearchableStringFilterInput | null;
  price?: SearchableFloatFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableFlightFilterInput | null> | null;
  or?: Array<SearchableFlightFilterInput | null> | null;
  not?: SearchableFlightFilterInput | null;
};

export type SearchableIDFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableStringFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableFloatFilterInput = {
  ne?: number | null;
  gt?: number | null;
  lt?: number | null;
  gte?: number | null;
  lte?: number | null;
  eq?: number | null;
  range?: Array<number | null> | null;
};

export type SearchableFlightSortInput = {
  field?: SearchableFlightSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableFlightSortableFields {
  id = 'id',
  airline = 'airline',
  flightNumber = 'flightNumber',
  departureAirportCode = 'departureAirportCode',
  arrivalAirportCode = 'arrivalAirportCode',
  price = 'price',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

export enum SearchableSortDirection {
  asc = 'asc',
  desc = 'desc',
}

export type SearchableFlightAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableFlightAggregateField;
};

export enum SearchableAggregateType {
  terms = 'terms',
  avg = 'avg',
  min = 'min',
  max = 'max',
  sum = 'sum',
}

export enum SearchableFlightAggregateField {
  id = 'id',
  airline = 'airline',
  flightNumber = 'flightNumber',
  departureAirportCode = 'departureAirportCode',
  arrivalAirportCode = 'arrivalAirportCode',
  price = 'price',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

export type SearchableFlightConnection = {
  __typename: 'SearchableFlightConnection';
  items: Array<Flight | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type SearchableAggregateResult = {
  __typename: 'SearchableAggregateResult';
  name: string;
  result?: SearchableAggregateGenericResult | null;
};

export type SearchableAggregateGenericResult =
  | SearchableAggregateScalarResult
  | SearchableAggregateBucketResult;

export type SearchableAggregateScalarResult = {
  __typename: 'SearchableAggregateScalarResult';
  value: number;
};

export type SearchableAggregateBucketResult = {
  __typename: 'SearchableAggregateBucketResult';
  buckets?: Array<SearchableAggregateBucketResultItem | null> | null;
};

export type SearchableAggregateBucketResultItem = {
  __typename: 'SearchableAggregateBucketResultItem';
  key: string;
  doc_count: number;
};

export type ModelFlightFilterInput = {
  id?: ModelIDInput | null;
  airline?: ModelStringInput | null;
  flightNumber?: ModelStringInput | null;
  departureAirportCode?: ModelStringInput | null;
  arrivalAirportCode?: ModelStringInput | null;
  price?: ModelFloatInput | null;
  and?: Array<ModelFlightFilterInput | null> | null;
  or?: Array<ModelFlightFilterInput | null> | null;
  not?: ModelFlightFilterInput | null;
};

export type ModelFlightConnection = {
  __typename: 'ModelFlightConnection';
  items: Array<Flight | null>;
  nextToken?: string | null;
};

export type ModelBookingFilterInput = {
  id?: ModelIDInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  flightId?: ModelIDInput | null;
  and?: Array<ModelBookingFilterInput | null> | null;
  or?: Array<ModelBookingFilterInput | null> | null;
  not?: ModelBookingFilterInput | null;
};

export type ModelBookingConnection = {
  __typename: 'ModelBookingConnection';
  items: Array<Booking | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionFlightFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  airline?: ModelSubscriptionStringInput | null;
  flightNumber?: ModelSubscriptionStringInput | null;
  departureAirportCode?: ModelSubscriptionStringInput | null;
  arrivalAirportCode?: ModelSubscriptionStringInput | null;
  price?: ModelSubscriptionFloatInput | null;
  and?: Array<ModelSubscriptionFlightFilterInput | null> | null;
  or?: Array<ModelSubscriptionFlightFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionBookingFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  firstName?: ModelSubscriptionStringInput | null;
  lastName?: ModelSubscriptionStringInput | null;
  flightId?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionBookingFilterInput | null> | null;
  or?: Array<ModelSubscriptionBookingFilterInput | null> | null;
};

export type CreateFlightMutation = {
  __typename: 'Flight';
  id?: string | null;
  airline?: string | null;
  flightNumber?: string | null;
  departureAirportCode?: string | null;
  arrivalAirportCode?: string | null;
  price: number;
  bookings?: Array<{
    __typename: 'Booking';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    flight?: {
      __typename: 'Flight';
      id?: string | null;
      airline?: string | null;
      flightNumber?: string | null;
      departureAirportCode?: string | null;
      arrivalAirportCode?: string | null;
      price: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    flightId?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateFlightMutation = {
  __typename: 'Flight';
  id?: string | null;
  airline?: string | null;
  flightNumber?: string | null;
  departureAirportCode?: string | null;
  arrivalAirportCode?: string | null;
  price: number;
  bookings?: Array<{
    __typename: 'Booking';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    flight?: {
      __typename: 'Flight';
      id?: string | null;
      airline?: string | null;
      flightNumber?: string | null;
      departureAirportCode?: string | null;
      arrivalAirportCode?: string | null;
      price: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    flightId?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteFlightMutation = {
  __typename: 'Flight';
  id?: string | null;
  airline?: string | null;
  flightNumber?: string | null;
  departureAirportCode?: string | null;
  arrivalAirportCode?: string | null;
  price: number;
  bookings?: Array<{
    __typename: 'Booking';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    flight?: {
      __typename: 'Flight';
      id?: string | null;
      airline?: string | null;
      flightNumber?: string | null;
      departureAirportCode?: string | null;
      arrivalAirportCode?: string | null;
      price: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    flightId?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateBookingMutation = {
  __typename: 'Booking';
  id?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  flight?: {
    __typename: 'Flight';
    id?: string | null;
    airline?: string | null;
    flightNumber?: string | null;
    departureAirportCode?: string | null;
    arrivalAirportCode?: string | null;
    price: number;
    bookings?: Array<{
      __typename: 'Booking';
      id?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      flightId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  flightId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateBookingMutation = {
  __typename: 'Booking';
  id?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  flight?: {
    __typename: 'Flight';
    id?: string | null;
    airline?: string | null;
    flightNumber?: string | null;
    departureAirportCode?: string | null;
    arrivalAirportCode?: string | null;
    price: number;
    bookings?: Array<{
      __typename: 'Booking';
      id?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      flightId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  flightId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteBookingMutation = {
  __typename: 'Booking';
  id?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  flight?: {
    __typename: 'Flight';
    id?: string | null;
    airline?: string | null;
    flightNumber?: string | null;
    departureAirportCode?: string | null;
    arrivalAirportCode?: string | null;
    price: number;
    bookings?: Array<{
      __typename: 'Booking';
      id?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      flightId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  flightId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type SearchFlightsQuery = {
  __typename: 'SearchableFlightConnection';
  items: Array<{
    __typename: 'Flight';
    id?: string | null;
    airline?: string | null;
    flightNumber?: string | null;
    departureAirportCode?: string | null;
    arrivalAirportCode?: string | null;
    price: number;
    bookings?: Array<{
      __typename: 'Booking';
      id?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      flightId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<{
    __typename: 'SearchableAggregateResult';
    name: string;
    result:
      | (
          | {
              __typename: 'SearchableAggregateScalarResult';
              value: number;
            }
          | {
              __typename: 'SearchableAggregateBucketResult';
              buckets?: Array<{
                __typename: string;
                key: string;
                doc_count: number;
              } | null> | null;
            }
        )
      | null;
  } | null>;
};

export type GetFlightQuery = {
  __typename: 'Flight';
  id?: string | null;
  airline?: string | null;
  flightNumber?: string | null;
  departureAirportCode?: string | null;
  arrivalAirportCode?: string | null;
  price: number;
  bookings?: Array<{
    __typename: 'Booking';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    flight?: {
      __typename: 'Flight';
      id?: string | null;
      airline?: string | null;
      flightNumber?: string | null;
      departureAirportCode?: string | null;
      arrivalAirportCode?: string | null;
      price: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    flightId?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type ListFlightsQuery = {
  __typename: 'ModelFlightConnection';
  items: Array<{
    __typename: 'Flight';
    id?: string | null;
    airline?: string | null;
    flightNumber?: string | null;
    departureAirportCode?: string | null;
    arrivalAirportCode?: string | null;
    price: number;
    bookings?: Array<{
      __typename: 'Booking';
      id?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      flightId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetBookingQuery = {
  __typename: 'Booking';
  id?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  flight?: {
    __typename: 'Flight';
    id?: string | null;
    airline?: string | null;
    flightNumber?: string | null;
    departureAirportCode?: string | null;
    arrivalAirportCode?: string | null;
    price: number;
    bookings?: Array<{
      __typename: 'Booking';
      id?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      flightId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  flightId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListBookingsQuery = {
  __typename: 'ModelBookingConnection';
  items: Array<{
    __typename: 'Booking';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    flight?: {
      __typename: 'Flight';
      id?: string | null;
      airline?: string | null;
      flightNumber?: string | null;
      departureAirportCode?: string | null;
      arrivalAirportCode?: string | null;
      price: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    flightId?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateFlightSubscription = {
  __typename: 'Flight';
  id?: string | null;
  airline?: string | null;
  flightNumber?: string | null;
  departureAirportCode?: string | null;
  arrivalAirportCode?: string | null;
  price: number;
  bookings?: Array<{
    __typename: 'Booking';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    flight?: {
      __typename: 'Flight';
      id?: string | null;
      airline?: string | null;
      flightNumber?: string | null;
      departureAirportCode?: string | null;
      arrivalAirportCode?: string | null;
      price: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    flightId?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateFlightSubscription = {
  __typename: 'Flight';
  id?: string | null;
  airline?: string | null;
  flightNumber?: string | null;
  departureAirportCode?: string | null;
  arrivalAirportCode?: string | null;
  price: number;
  bookings?: Array<{
    __typename: 'Booking';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    flight?: {
      __typename: 'Flight';
      id?: string | null;
      airline?: string | null;
      flightNumber?: string | null;
      departureAirportCode?: string | null;
      arrivalAirportCode?: string | null;
      price: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    flightId?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteFlightSubscription = {
  __typename: 'Flight';
  id?: string | null;
  airline?: string | null;
  flightNumber?: string | null;
  departureAirportCode?: string | null;
  arrivalAirportCode?: string | null;
  price: number;
  bookings?: Array<{
    __typename: 'Booking';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    flight?: {
      __typename: 'Flight';
      id?: string | null;
      airline?: string | null;
      flightNumber?: string | null;
      departureAirportCode?: string | null;
      arrivalAirportCode?: string | null;
      price: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    flightId?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateBookingSubscription = {
  __typename: 'Booking';
  id?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  flight?: {
    __typename: 'Flight';
    id?: string | null;
    airline?: string | null;
    flightNumber?: string | null;
    departureAirportCode?: string | null;
    arrivalAirportCode?: string | null;
    price: number;
    bookings?: Array<{
      __typename: 'Booking';
      id?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      flightId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  flightId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateBookingSubscription = {
  __typename: 'Booking';
  id?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  flight?: {
    __typename: 'Flight';
    id?: string | null;
    airline?: string | null;
    flightNumber?: string | null;
    departureAirportCode?: string | null;
    arrivalAirportCode?: string | null;
    price: number;
    bookings?: Array<{
      __typename: 'Booking';
      id?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      flightId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  flightId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteBookingSubscription = {
  __typename: 'Booking';
  id?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  flight?: {
    __typename: 'Flight';
    id?: string | null;
    airline?: string | null;
    flightNumber?: string | null;
    departureAirportCode?: string | null;
    arrivalAirportCode?: string | null;
    price: number;
    bookings?: Array<{
      __typename: 'Booking';
      id?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      flightId?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  flightId?: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: 'root',
})
export class APIService {
  async CreateFlight(
    input: CreateFlightInput,
    condition?: ModelFlightConditionInput
  ): Promise<CreateFlightMutation> {
    const statement = `mutation CreateFlight($input: CreateFlightInput!, $condition: ModelFlightConditionInput) {
        createFlight(input: $input, condition: $condition) {
          __typename
          id
          airline
          flightNumber
          departureAirportCode
          arrivalAirportCode
          price
          bookings {
            __typename
            id
            firstName
            lastName
            flight {
              __typename
              id
              airline
              flightNumber
              departureAirportCode
              arrivalAirportCode
              price
              createdAt
              updatedAt
            }
            flightId
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateFlightMutation>response.data.createFlight;
  }
  async UpdateFlight(
    input: UpdateFlightInput,
    condition?: ModelFlightConditionInput
  ): Promise<UpdateFlightMutation> {
    const statement = `mutation UpdateFlight($input: UpdateFlightInput!, $condition: ModelFlightConditionInput) {
        updateFlight(input: $input, condition: $condition) {
          __typename
          id
          airline
          flightNumber
          departureAirportCode
          arrivalAirportCode
          price
          bookings {
            __typename
            id
            firstName
            lastName
            flight {
              __typename
              id
              airline
              flightNumber
              departureAirportCode
              arrivalAirportCode
              price
              createdAt
              updatedAt
            }
            flightId
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateFlightMutation>response.data.updateFlight;
  }
  async DeleteFlight(
    input: DeleteFlightInput,
    condition?: ModelFlightConditionInput
  ): Promise<DeleteFlightMutation> {
    const statement = `mutation DeleteFlight($input: DeleteFlightInput!, $condition: ModelFlightConditionInput) {
        deleteFlight(input: $input, condition: $condition) {
          __typename
          id
          airline
          flightNumber
          departureAirportCode
          arrivalAirportCode
          price
          bookings {
            __typename
            id
            firstName
            lastName
            flight {
              __typename
              id
              airline
              flightNumber
              departureAirportCode
              arrivalAirportCode
              price
              createdAt
              updatedAt
            }
            flightId
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteFlightMutation>response.data.deleteFlight;
  }
  async CreateBooking(
    input: CreateBookingInput,
    condition?: ModelBookingConditionInput
  ): Promise<CreateBookingMutation> {
    const statement = `mutation CreateBooking($input: CreateBookingInput!, $condition: ModelBookingConditionInput) {
        createBooking(input: $input, condition: $condition) {
          __typename
          id
          firstName
          lastName
          flight {
            __typename
            id
            airline
            flightNumber
            departureAirportCode
            arrivalAirportCode
            price
            bookings {
              __typename
              id
              firstName
              lastName
              flightId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          flightId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBookingMutation>response.data.createBooking;
  }
  async UpdateBooking(
    input: UpdateBookingInput,
    condition?: ModelBookingConditionInput
  ): Promise<UpdateBookingMutation> {
    const statement = `mutation UpdateBooking($input: UpdateBookingInput!, $condition: ModelBookingConditionInput) {
        updateBooking(input: $input, condition: $condition) {
          __typename
          id
          firstName
          lastName
          flight {
            __typename
            id
            airline
            flightNumber
            departureAirportCode
            arrivalAirportCode
            price
            bookings {
              __typename
              id
              firstName
              lastName
              flightId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          flightId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBookingMutation>response.data.updateBooking;
  }
  async DeleteBooking(
    input: DeleteBookingInput,
    condition?: ModelBookingConditionInput
  ): Promise<DeleteBookingMutation> {
    const statement = `mutation DeleteBooking($input: DeleteBookingInput!, $condition: ModelBookingConditionInput) {
        deleteBooking(input: $input, condition: $condition) {
          __typename
          id
          firstName
          lastName
          flight {
            __typename
            id
            airline
            flightNumber
            departureAirportCode
            arrivalAirportCode
            price
            bookings {
              __typename
              id
              firstName
              lastName
              flightId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          flightId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBookingMutation>response.data.deleteBooking;
  }
  async SearchFlights(
    filter?: SearchableFlightFilterInput,
    sort?: Array<SearchableFlightSortInput | null>,
    limit?: number,
    nextToken?: string,
    from?: number,
    aggregates?: Array<SearchableFlightAggregationInput | null>
  ): Promise<SearchFlightsQuery> {
    const statement = `query SearchFlights($filter: SearchableFlightFilterInput, $sort: [SearchableFlightSortInput], $limit: Int, $nextToken: String, $from: Int, $aggregates: [SearchableFlightAggregationInput]) {
        searchFlights(
          filter: $filter
          sort: $sort
          limit: $limit
          nextToken: $nextToken
          from: $from
          aggregates: $aggregates
        ) {
          __typename
          items {
            __typename
            id
            airline
            flightNumber
            departureAirportCode
            arrivalAirportCode
            price
            bookings {
              __typename
              id
              firstName
              lastName
              flightId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
          total
          aggregateItems {
            __typename
            name
            result {
              __typename
              ... on SearchableAggregateScalarResult {
                value
              }
              ... on SearchableAggregateBucketResult {
                buckets {
                  __typename
                  key
                  doc_count
                }
              }
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (sort) {
      gqlAPIServiceArguments.sort = sort;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (from) {
      gqlAPIServiceArguments.from = from;
    }
    if (aggregates) {
      gqlAPIServiceArguments.aggregates = aggregates;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SearchFlightsQuery>response.data.searchFlights;
  }
  async GetFlight(id: string): Promise<GetFlightQuery> {
    const statement = `query GetFlight($id: ID!) {
        getFlight(id: $id) {
          __typename
          id
          airline
          flightNumber
          departureAirportCode
          arrivalAirportCode
          price
          bookings {
            __typename
            id
            firstName
            lastName
            flight {
              __typename
              id
              airline
              flightNumber
              departureAirportCode
              arrivalAirportCode
              price
              createdAt
              updatedAt
            }
            flightId
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetFlightQuery>response.data.getFlight;
  }
  async ListFlights(
    filter?: ModelFlightFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListFlightsQuery> {
    const statement = `query ListFlights($filter: ModelFlightFilterInput, $limit: Int, $nextToken: String) {
        listFlights(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            airline
            flightNumber
            departureAirportCode
            arrivalAirportCode
            price
            bookings {
              __typename
              id
              firstName
              lastName
              flightId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListFlightsQuery>response.data.listFlights;
  }
  async GetBooking(id: string): Promise<GetBookingQuery> {
    const statement = `query GetBooking($id: ID!) {
        getBooking(id: $id) {
          __typename
          id
          firstName
          lastName
          flight {
            __typename
            id
            airline
            flightNumber
            departureAirportCode
            arrivalAirportCode
            price
            bookings {
              __typename
              id
              firstName
              lastName
              flightId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          flightId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBookingQuery>response.data.getBooking;
  }
  async ListBookings(
    filter?: ModelBookingFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBookingsQuery> {
    const statement = `query ListBookings($filter: ModelBookingFilterInput, $limit: Int, $nextToken: String) {
        listBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            firstName
            lastName
            flight {
              __typename
              id
              airline
              flightNumber
              departureAirportCode
              arrivalAirportCode
              price
              createdAt
              updatedAt
            }
            flightId
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBookingsQuery>response.data.listBookings;
  }
  OnCreateFlightListener(
    filter?: ModelSubscriptionFlightFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, 'onCreateFlight'>>
  > {
    const statement = `subscription OnCreateFlight($filter: ModelSubscriptionFlightFilterInput) {
        onCreateFlight(filter: $filter) {
          __typename
          id
          airline
          flightNumber
          departureAirportCode
          arrivalAirportCode
          price
          bookings {
            __typename
            id
            firstName
            lastName
            flight {
              __typename
              id
              airline
              flightNumber
              departureAirportCode
              arrivalAirportCode
              price
              createdAt
              updatedAt
            }
            flightId
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, 'onCreateFlight'>>
    >;
  }

  OnUpdateFlightListener(
    filter?: ModelSubscriptionFlightFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, 'onUpdateFlight'>>
  > {
    const statement = `subscription OnUpdateFlight($filter: ModelSubscriptionFlightFilterInput) {
        onUpdateFlight(filter: $filter) {
          __typename
          id
          airline
          flightNumber
          departureAirportCode
          arrivalAirportCode
          price
          bookings {
            __typename
            id
            firstName
            lastName
            flight {
              __typename
              id
              airline
              flightNumber
              departureAirportCode
              arrivalAirportCode
              price
              createdAt
              updatedAt
            }
            flightId
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, 'onUpdateFlight'>>
    >;
  }

  OnDeleteFlightListener(
    filter?: ModelSubscriptionFlightFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, 'onDeleteFlight'>>
  > {
    const statement = `subscription OnDeleteFlight($filter: ModelSubscriptionFlightFilterInput) {
        onDeleteFlight(filter: $filter) {
          __typename
          id
          airline
          flightNumber
          departureAirportCode
          arrivalAirportCode
          price
          bookings {
            __typename
            id
            firstName
            lastName
            flight {
              __typename
              id
              airline
              flightNumber
              departureAirportCode
              arrivalAirportCode
              price
              createdAt
              updatedAt
            }
            flightId
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, 'onDeleteFlight'>>
    >;
  }

  OnCreateBookingListener(
    filter?: ModelSubscriptionBookingFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, 'onCreateBooking'>>
  > {
    const statement = `subscription OnCreateBooking($filter: ModelSubscriptionBookingFilterInput) {
        onCreateBooking(filter: $filter) {
          __typename
          id
          firstName
          lastName
          flight {
            __typename
            id
            airline
            flightNumber
            departureAirportCode
            arrivalAirportCode
            price
            bookings {
              __typename
              id
              firstName
              lastName
              flightId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          flightId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, 'onCreateBooking'>>
    >;
  }

  OnUpdateBookingListener(
    filter?: ModelSubscriptionBookingFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, 'onUpdateBooking'>>
  > {
    const statement = `subscription OnUpdateBooking($filter: ModelSubscriptionBookingFilterInput) {
        onUpdateBooking(filter: $filter) {
          __typename
          id
          firstName
          lastName
          flight {
            __typename
            id
            airline
            flightNumber
            departureAirportCode
            arrivalAirportCode
            price
            bookings {
              __typename
              id
              firstName
              lastName
              flightId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          flightId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, 'onUpdateBooking'>>
    >;
  }

  OnDeleteBookingListener(
    filter?: ModelSubscriptionBookingFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, 'onDeleteBooking'>>
  > {
    const statement = `subscription OnDeleteBooking($filter: ModelSubscriptionBookingFilterInput) {
        onDeleteBooking(filter: $filter) {
          __typename
          id
          firstName
          lastName
          flight {
            __typename
            id
            airline
            flightNumber
            departureAirportCode
            arrivalAirportCode
            price
            bookings {
              __typename
              id
              firstName
              lastName
              flightId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          flightId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, 'onDeleteBooking'>>
    >;
  }
}
