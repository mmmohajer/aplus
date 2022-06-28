import React from 'react';
import { render as renderRTL, screen, fireEvent } from '@testing-library/react';
import PublicRoute from '../PublicRoute';
import * as reactRedux from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const render = (component) => renderRTL(<BrowserRouter>{component}</BrowserRouter>);

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

describe('Test PublicRoute Component', () => {
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

  test('Public route content is observale to an authenticated user', () => {
    mockStore = {
      isAuthenticated: true
    };

    const children = `<div>This is a secret messsage</div>`;

    render(<PublicRoute children={children} />);

    expect(screen.getByText(/This is a secret messsage/i)).toBeInTheDocument();
  });

  test('Public route content is observable for ananymous user', () => {
    mockStore = {
      isAuthenticated: false
    };

    const children = `<div>This is a secret messsage</div>`;

    render(<PublicRoute children={children} />);

    expect(screen.getByText(/This is a secret messsage/i)).toBeInTheDocument();
  });
});
