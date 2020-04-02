import * as React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import {
  render,
  fireEvent,
  wait,
  waitForElement,
} from '@testing-library/react';
import * as api from './login.api';
import * as loginVm from './login.vm';
import { SessionProvider } from 'core';
import { HotelCollectionScene } from 'scenes';
import { LoginContainer } from './login.container';

const renderWithRouter = component => {
  return {
    ...render(
      <HashRouter>
        <Switch>
          <Route path="/hotel-collection" component={HotelCollectionScene} />
        </Switch>
        <SessionProvider>{component}</SessionProvider>
      </HashRouter>
    ),
  };
};

describe('login container specs', () => {
  it('should call validate credentials when submitted login info', async () => {
    //Arrange
    const loginStub = jest.spyOn(loginVm, 'createEmptyLogin').mockReturnValue({
      login: 'admin',
      password: 'test',
    });
    const validateCredentialsStub = jest
      .spyOn(api, 'validateCredentials')
      .mockResolvedValue(true);

    //Act
    const { getByTestId } = renderWithRouter(<LoginContainer />);
    const buttonElement = getByTestId('login-button');

    await wait(() => {
      fireEvent.click(buttonElement);
    });

    // const hotelCollectionElement = await waitForElement(() => getByTestId('hotel-collection'));

    //Assert
    expect(loginStub).toHaveBeenCalled();
    expect(validateCredentialsStub).toHaveBeenCalled();
    // expect(hotelCollectionElement).toBeInTheDocument();
  });
});
