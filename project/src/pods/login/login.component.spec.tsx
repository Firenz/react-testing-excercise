import * as React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import { LoginComponent } from './login.component';

describe('login component specs', () => {
  it('should render component', () => {
    //Arrange
    const props = {
      onLogin: jest.fn(),
      initialLogin: {
        login: '',
        password: '',
      },
    };

    //Act
    const { getByTestId } = render(<LoginComponent {...props} />);

    const loginComponentElement = getByTestId('login-component');
    const loginInputElement = getByTestId('login-input');
    const passInputElement = getByTestId('password-input');

    //Assert
    expect(loginComponentElement).toBeInTheDocument();
    expect(loginInputElement).toBeInTheDocument();
    expect(passInputElement).toBeInTheDocument();
    expect(loginInputElement).toHaveValue(props.initialLogin.login);
    expect(passInputElement).toHaveValue(props.initialLogin.password);
  });
  it('should not call login validation when submit with invalid login', async () => {
    //Arrange
    const props = {
      onLogin: jest.fn(),
      initialLogin: {
        login: '',
        password: '',
      },
    };

    //Act
    const { getByTestId } = render(<LoginComponent {...props} />);

    const loginComponentElement = getByTestId('login-component');
    const buttonElement = getByTestId('login-button');

    await wait(() => {
      fireEvent.click(buttonElement);
    });

    //Assert
    expect(loginComponentElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(props.onLogin).not.toHaveBeenCalled();
  });
  it('should call login validation when submit with valid login', async () => {
    //Arrange
    const props = {
      onLogin: jest.fn(),
      initialLogin: {
        login: '',
        password: '',
      },
    };

    //Act
    const { getByTestId } = render(<LoginComponent {...props} />);

    const loginComponentElement = getByTestId('login-component');
    const loginInputElement = getByTestId('login-input') as HTMLInputElement;
    const passInputElement = getByTestId('password-input') as HTMLInputElement;
    const buttonElement = getByTestId('login-button');

    await wait(() => {
      fireEvent.change(loginInputElement, {
        target: {
          value: 'admin',
        },
      });

      fireEvent.change(passInputElement, {
        target: {
          value: 'test',
        },
      });

      fireEvent.submit(buttonElement);
    });

    //Assert
    expect(loginComponentElement).toBeInTheDocument();
    expect(loginInputElement).toBeInTheDocument();
    expect(loginInputElement.value).toEqual('admin');
    expect(passInputElement).toBeInTheDocument();
    expect(passInputElement.value).toEqual('test');
    expect(buttonElement).toBeInTheDocument();
    expect(props.onLogin).toHaveBeenCalled();
  });
});
