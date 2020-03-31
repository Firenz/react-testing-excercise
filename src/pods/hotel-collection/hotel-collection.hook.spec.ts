import { renderHook } from '@testing-library/react-hooks';
import * as api from './hotel-collection.api';
import { HotelEntityVm } from './hotel-collection.vm';
import { useHotelCollection } from './hotel-collection.hook';
import { act } from '@testing-library/react';

describe('useHotelCollection hook specs', () => {
  it('should an empty array when the hook is called and the api call is rejected', async () => {
    //Arrange
    const getStub = jest
      .spyOn(api, 'getHotelCollection')
      .mockRejectedValue('hotel collection not found');
    //Act
    const { result } = renderHook(() => useHotelCollection());

    //Assert
    expect(result.current.hotelCollection).toEqual([]);
    expect(result.current.loadHotelCollection()).rejects.toEqual('hotel collection not found');
  });
  it('should return a mapped hotel collection from the api when the hook is called and the api call is succesfully resolved', async () => {
    //Arrange
    const hotelCollectionMapped: HotelEntityVm[] = [
      {
        id: 'hotel id',
        picture: 'http://localhost:3000/image.jpg',
        name: 'hotel name',
        description: 'hotel description',
        rating: 0,
        address: 'hotel address',
      },
    ];

    const hotelCollectionApi: api.HotelEntityApi[] = [
      {
        id: 'hotel id',
        type: '',
        name: 'hotel name',
        created: new Date(0),
        modified: new Date(0),
        address1: 'hotel address',
        airportCode: '',
        amenityMask: 0,
        city: '',
        confidenceRating: 0,
        countryCode: '',
        deepLink: '',
        highRate: 0,
        hotelId: 0,
        hotelInDestination: true,
        hotelRating: 0,
        location: {
          latitude: 0,
          longitude: 0,
        },
        locationDescription: '',
        lowRate: 0,
        metadata: {
          path: '',
        },
        postalCode: 0,
        propertyCategory: 0,
        proximityDistance: 0,
        proximityUnit: '',
        rateCurrencyCode: '',
        shortDescription: 'hotel description',
        stateProvinceCode: '',
        thumbNailUrl: '/image.jpg',
        tripAdvisorRating: 0,
        tripAdvisorRatingUrl: '',
      },
    ];

    const getStub = jest
      .spyOn(api, 'getHotelCollection')
      .mockResolvedValue(hotelCollectionApi);

    //Act
    const { result, waitForNextUpdate } = renderHook(() =>
      useHotelCollection()
    );

    //Assert
    expect(result.current.hotelCollection).toEqual([]);

    act(() => {
      result.current.loadHotelCollection();
    });
    await waitForNextUpdate();

    expect(getStub).toHaveBeenCalled();
    expect(result.current.hotelCollection).toEqual(hotelCollectionMapped);
  });
});
