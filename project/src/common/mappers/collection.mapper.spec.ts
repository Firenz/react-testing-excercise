import * as collectionMapper from './collection.mapper';

describe('collection mapper specs', () => {
  it('should return empty array when it feeds undefined', () => {
    //Arrange
    const a = undefined;
    const mapper = () => {};

    //Act
    const result = collectionMapper.mapToCollection(a, mapper);

    //Assert
    expect(result).toEqual([]);
  });
  it('should return empty array when it feeds null', () => {
    //Arrange
    const a = null;
    const mapper = () => {};

    //Act
    const result = collectionMapper.mapToCollection(a, mapper);

    //Assert
    expect(result).toEqual([]);
  });
  it('should return empty array when it feeds an empty array', () => {
    //Arrange
    const a = [];
    const mapper = () => {};

    //Act
    const result = collectionMapper.mapToCollection(a, mapper);

    //Assert
    expect(result).toEqual([]);
  });
  it('should not call mapper function when it feeds an empty array', () => {
    //Arrange
    const a = [];
    const mapper = jest.fn();

    //Act
    const result = collectionMapper.mapToCollection(a, mapper);

    //Assert
    expect(mapper).toBeCalledTimes(0);
  });
  it('should call mapper function when it feeds an non empty array of items', () => {
    //Arrange
    const a = [1, 2];
    const mapper = jest.fn();

    //Act
    const result = collectionMapper.mapToCollection(a, mapper);

    //Assert
    expect(mapper).toBeCalledTimes(2);
    expect(result).toEqual(a);
  });
});
