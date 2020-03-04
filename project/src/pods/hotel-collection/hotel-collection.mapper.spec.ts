import * as apiModel from './hotel-collection.api';
import * as viewModel from './hotel-collection.vm';
import { mapFromApiToVm } from './hotel-collection.mapper';

describe('hotel collection mapper specs', () => {
  it('should return null when it feeds undefined', () => {
    //Arrange
    const hotel: apiModel.HotelEntityApi = undefined;

    //Act
    const result: viewModel.HotelEntityVm = mapFromApiToVm(hotel);

    //Assert
    expect(result).toBe(null);
  });
  it('should return null when it feeds null', () => {
    //Arrange
    const hotel: apiModel.HotelEntityApi = null;

    //Act
    const result: viewModel.HotelEntityVm = mapFromApiToVm(hotel);

    //Assert
    expect(result).toBe(null);
  });
  it('should return empty when it feeds empty', () => {
    //Arrange
    const hotel: apiModel.HotelEntityApi = <apiModel.HotelEntityApi>{};

    //Act
    const result: viewModel.HotelEntityVm = mapFromApiToVm(hotel);

    //Assert
    expect(result).toEqual(<viewModel.HotelEntityVm>{});
  });
  it('should return a mapped item when it feeds an hotel entity', () => {
    //Arrange
    const hotel: apiModel.HotelEntityApi = {
      id: "1",
      type: "",
      name: "test item",
      created: new Date(0),
      modified: new Date(0),
      address1: "test item address",
      airportCode: "",
      amenityMask: 0,
      city: "",
      confidenceRating: 0,
      countryCode: "",
      deepLink: "",
      highRate: 0,
      hotelId: 0,
      hotelInDestination: true,
      hotelRating: 0,
      location: {
        latitude: 0,
        longitude: 0,
      },
      locationDescription: "",
      lowRate: 0,
      metadata: {
        path: "",
      },
      postalCode: 0,
      propertyCategory: 0,
      proximityDistance: 0,
      proximityUnit: "",
      rateCurrencyCode: "",
      shortDescription: "test item description",
      stateProvinceCode: "",
      thumbNailUrl: "/image.jpg",
      tripAdvisorRating: 0,
      tripAdvisorRatingUrl: "",
    };

    const expectedResult: viewModel.HotelEntityVm = {
      id: "1",
      picture: "http://localhost:3000/image.jpg",
      name: "test item",
      description: "test item description",
      rating: 0,
      address: "test item address"
    };

    //Act
    const result: viewModel.HotelEntityVm = mapFromApiToVm(hotel);

    //Assert
    expect(result).toEqual(expectedResult);
  });
});
