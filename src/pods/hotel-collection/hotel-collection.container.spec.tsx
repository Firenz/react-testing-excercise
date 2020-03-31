import * as React from 'react';
import { render } from '@testing-library/react';
import * as hook from './hotel-collection.hook';
import { HotelEntityVm } from './hotel-collection.vm';
import { HotelCollectionContainer } from './hotel-collection.container';

describe('hotel collection container component specs', () => {
  it('should render hotel collection components from data form the api', () => {
    //Arrange
    const hotelCollection: HotelEntityVm[] = [
      {
        id: 'hotel id',
        picture: 'http://localhost:3000/image.jpg',
        name: 'hotel name',
        description: 'hotel description',
        rating: 0,
        address: 'hotel address',
      },
    ];

    const getStub = jest
    .spyOn(hook, 'useHotelCollection')
    .mockReturnValue({
      hotelCollection: hotelCollection,
      loadHotelCollection: jest.fn()
    });

    // //Act
    const { getByText } = render(<HotelCollectionContainer />);
    const hotelNameElement = getByText(hotelCollection[0].name);

    // //Assert
    expect(getStub).toHaveBeenCalled();
    expect(hotelNameElement).toBeInTheDocument();
  });
});
