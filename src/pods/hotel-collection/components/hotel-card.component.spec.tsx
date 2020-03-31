import * as React from 'react';
import { render } from '@testing-library/react';
import { HotelCard } from './hotel-card.component';
import { HotelEntityVm } from '../hotel-collection.vm';

describe('hotel card component specs', () => {
  it('should render component', () => {
    //Arrange
    const hotel: HotelEntityVm = {
      id: 'hotel id',
      picture: 'http://localhost:3000/image.jpg',
      name: 'hotel name',
      description: 'hotel description',
      rating: 0,
      address: 'hotel address',
    };

    //Act
    const { getByTestId, getByText } = render(<HotelCard hotel={hotel} />);
    const hotelElement = getByTestId(hotel.id) as HTMLElement;
    const hotelNameElement = getByText(hotel.name);
    const hotelDescriptionElement = getByText(hotel.description);
    const hotelAddressElement = getByText(hotel.address);

    //Assert
    expect(hotelElement).toBeInTheDocument();
    expect(hotelNameElement).toBeInTheDocument();
    expect(hotelDescriptionElement).toBeInTheDocument();
    expect(hotelAddressElement).toBeInTheDocument();
  });
});
