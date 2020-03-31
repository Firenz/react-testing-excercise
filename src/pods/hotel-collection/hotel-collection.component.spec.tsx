import * as React from 'react';
import { render } from '@testing-library/react';
import { HotelCollectionComponent } from './hotel-collection.component';
import { HotelEntityVm } from './hotel-collection.vm';

describe('hotel collection component specs', () => {
  it('should render component with empty hotel collection', () => {
    //Arrange
    const hotelCollection: HotelEntityVm[] = [];

    //Act
    const { getByTestId } = render(
      <HotelCollectionComponent hotelCollection={hotelCollection} />
    );
    const hotelCollectionElement = getByTestId('hotel-collection-component');

    //Assert
    expect(hotelCollectionElement).toBeInTheDocument();
  });
  it('should render component with one element', () => {
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

    //Act
    const { getByTestId, getByText } = render(
      <HotelCollectionComponent hotelCollection={hotelCollection} />
    );
    const hotelCollectionElement = getByTestId('hotel-collection-component');
    const hotelNameElement = getByText(hotelCollection[0].name);
    const hotelDescriptionElement = getByText(hotelCollection[0].description);
    const hotelAddressElement = getByText(hotelCollection[0].address);

    //Assert
    expect(hotelCollectionElement).toBeInTheDocument();
    expect(hotelNameElement).toBeInTheDocument();
    expect(hotelDescriptionElement).toBeInTheDocument();
    expect(hotelAddressElement).toBeInTheDocument();
  });
});
