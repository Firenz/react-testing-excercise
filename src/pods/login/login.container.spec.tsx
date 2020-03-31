import * as React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import {
  render,
  waitForElement,
  fireEvent,
  wait,
} from '@testing-library/react';
import * as reactRouterDom from 'react-router-dom';
import * as api from './login.api';
import * as core from 'core';
import * as LoginVm from './login.vm';
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
        {component}
      </HashRouter>
    ),
  };
};

describe('login container specs', () => {
  it('should render hotel collection component when login is succesfull', async () => {
    //Arrange
    const loginStub = jest.spyOn(LoginVm, 'createEmptyLogin').mockReturnValue({
      login: 'admin',
      password: 'test',
    });
    const getValidateCredentialsStub = jest
      .spyOn(api, 'validateCredentials')
      .mockResolvedValue(true);

    //Act
    const { getByTestId } = renderWithRouter(
      <SessionProvider>
        <LoginContainer />
      </SessionProvider>
    );
    const buttonElement = getByTestId('login-button');

    await wait(() => {
      fireEvent.click(buttonElement);
    });

    //Assert
    expect(getValidateCredentialsStub).toHaveBeenCalled();
  });
});
