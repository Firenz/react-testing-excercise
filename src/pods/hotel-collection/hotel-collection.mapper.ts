import { basePicturesUrl } from 'core';
import * as apiModel from './hotel-collection.api';
import * as viewModel from './hotel-collection.vm';

export const mapFromApiToVm = (
  hotel: apiModel.HotelEntityApi
): viewModel.HotelEntityVm => {
  if (!hotel) return null;
  if(JSON.stringify(hotel) === JSON.stringify({})) return <viewModel.HotelEntityVm>{};

  return {
    id: hotel.id,
    picture: `${basePicturesUrl}${hotel.thumbNailUrl}`,
    name: hotel.name,
    description: hotel.shortDescription,
    rating: hotel.hotelRating,
    address: hotel.address1,
  };
};
