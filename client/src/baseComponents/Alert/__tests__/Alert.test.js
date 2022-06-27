import React from 'react';
import { render as renderRTL, screen, fireEvent } from '@testing-library/react';
import Alert from '../Alert';
import * as reactRedux from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const render = (component) => renderRTL(<BrowserRouter>{component}</BrowserRouter>);

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

describe('Test TargetComponent', () => {
  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;

  let mockStore = {
    notifications: []
  };

  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
  });

  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });

  test('Alert components shows all types of messages simultaneously and properly', () => {
    mockStore = {
      notifications: [
        { key: 'key1', message: 'This is a success messsage', type: 'success' },
        { key: 'key2', message: 'This is an error messsage', type: 'error' },
        { key: 'key3', message: 'This is a danger messsage', type: 'danger' }
      ]
    };

    render(<Alert />);

    expect(screen.getByText(/This is a success messsage/i)).toBeInTheDocument();
    expect(screen.getByText(/This is an error messsage/i)).toBeInTheDocument();
    expect(screen.getByText(/This is a danger messsage/i)).toBeInTheDocument();
  });
});
