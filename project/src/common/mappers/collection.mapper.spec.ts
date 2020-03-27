import * as collectionMapper from './collection.mapper';

describe('collection mapper specs', () => {
  it('should return empty array when it feeds undefined', () => {
    //Arrange
    const collection = undefined;
    const mapper = () => {};

    //Act
    const result = collectionMapper.mapToCollection(collection, mapper);

    //Assert
    expect(result).toEqual([]);
  });
  it('should return empty array when it feeds null', () => {
    //Arrange
    const collection = null;
    const mapper = () => {};

    //Act
    const result = collectionMapper.mapToCollection(collection, mapper);

    //Assert
    expect(result).toEqual([]);
  });
  it('should return empty array when it feeds an empty array', () => {
    //Arrange
    const collection = [];
    const mapper = () => {};

    //Act
    const result = collectionMapper.mapToCollection(collection, mapper);

    //Assert
    expect(result).toEqual([]);
  });
  it('should not call mapper function when it feeds an empty array', () => {
    //Arrange
    const collection = [];
    const mapper = jest.fn();

    //Act
    const result = collectionMapper.mapToCollection(collection, mapper);

    //Assert
    expect(mapper).toBeCalledTimes(0);
  });
  it('should call mapper function when it feeds an non empty array of items', () => {
    //Arrange
    const collection = [1, 2];
    const mapper = jest.fn();

    //Act
    const result = collectionMapper.mapToCollection(collection, mapper);

    //Assert
    expect(mapper).toBeCalledTimes(2);
  });
  it('should return transformed array by an non empty method as a mapper function when it feeds an non empty array of items', () => {
    //Arrange
    const collection = [1, 2];
    const expectedResult = [3, 6];
    const mapper = (a: number) => a * 3;

    //Act
    const result = collectionMapper.mapToCollection(collection, mapper);

    //Assert
    expect(result).toEqual(expectedResult);
  });
});
