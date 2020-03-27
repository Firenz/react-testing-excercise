import * as React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { render, waitForElement } from '@testing-library/react';
import * as reactRouterDom from 'react-router-dom';
import * as api from './login.api';
import * as core from 'core';
import * as LoginVm from './login.vm';
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
  xit('should render hotel collection component when login is succesfull', async () => {
    //Arrange
    const getValidateCredentialsStub = jest
      .spyOn(api, 'validateCredentials')
      .mockResolvedValue(true);

    //Act
    const { getByTestId } = renderWithRouter(<LoginContainer />);
    // const hotelCollectionElement = await waitForElement(() => getByTestId('hotel-collection'));

    //Assert
    expect(getValidateCredentialsStub).toHaveBeenCalled();
    // expect(hotelCollectionElement).toBeInTheDocument();
  });
});
