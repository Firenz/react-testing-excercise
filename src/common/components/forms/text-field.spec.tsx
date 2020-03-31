import * as React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { TextField } from './text-field';

describe('TextField component specs', () => {
  it('should display text field', () => {
    //Arrange
    const props = {
      input: {
        name: 'test',
        value: 'test value',
        onChange: jest.fn(),
        onBlur: jest.fn(),
        onFocus: jest.fn(),
      },
      meta: {
        error: 'test error',
      },
      'data-testid': 'text-field',
    };

    //Act
    const { getByTestId } = render(<TextField {...props} />);

    const inputElement = getByTestId('text-field') as HTMLInputElement;

    //Assert
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toEqual('test value');
  });
  it('should update value when input changes', () => {
    //Arrange
    const props = {
      input: {
        name: 'test',
        value: 'test value',
        onChange: jest.fn(),
        onBlur: jest.fn(),
        onFocus: jest.fn(),
      },
      meta: {
        error: 'test error',
      },
      'data-testid': 'text-field',
    };

    //Act
    const { getByTestId } = render(<TextField {...props} />);

    const inputElement = getByTestId('text-field') as HTMLInputElement;

    act(() => {
      fireEvent.change(inputElement, {
        target: {
          value: 'new value',
        },
      });
    })

    //Assert
    expect(inputElement).toBeInTheDocument();
    expect(props.input.onChange).toHaveBeenCalled();
  });
});
