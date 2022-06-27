import React from 'react';
import { render as renderRTL, screen, fireEvent } from '@testing-library/react';
import AuthRoute from '../AuthRoute';
import * as reactRedux from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const render = (component) => renderRTL(<BrowserRouter>{component}</BrowserRouter>);

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

describe('Test AuthRoute Component', () => {
  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;

  let mockStore = {
    profile: {}
  };

  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
  });

  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });

  test('Auth route content is observale to an authenticated user', () => {
    mockStore = {
      isAuthenticated: true
    };

    const children = `<div>This is a secret messsage</div>`;

    render(<AuthRoute children={children} />);

    expect(screen.getByText(/This is a secret messsage/i)).toBeInTheDocument();
  });

  test('Admin route content is not observale for ananymous user', () => {
    mockStore = {
      isAuthenticated: false
    };

    const children = `<div>This is a secret messsage</div>`;

    render(<AuthRoute children={children} />);

    expect(screen.queryByText(/This is a secret messsage/i)).not.toBeInTheDocument();
  });
});
