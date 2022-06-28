import React from 'react';
import { render as renderRTL, screen, fireEvent } from '@testing-library/react';
import SubscriberRoute from '../SubscriberRoute';
import * as reactRedux from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const render = (component) => renderRTL(<BrowserRouter>{component}</BrowserRouter>);

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

describe('Test SubscriberRoute Component', () => {
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

  test('Subscriber route content is not observale to an admin user', () => {
    mockStore = {
      profile: {
        user: {
          groups: ['Admin']
        }
      }
    };

    const children = `<div>This is a secret messsage</div>`;

    render(<SubscriberRoute children={children} />);

    expect(screen.queryByText(/This is a secret messsage/i)).not.toBeInTheDocument();
  });

  test('Subscriber route content is observale for a subscriber user', () => {
    mockStore = {
      profile: {
        user: {
          groups: ['Subscriber']
        }
      }
    };

    const children = `<div>This is a secret messsage</div>`;

    render(<SubscriberRoute children={children} />);

    expect(screen.queryByText(/This is a secret messsage/i)).toBeInTheDocument();
  });

  test('Subscriber route content is not observale for anonymous user', () => {
    mockStore = {
      profile: {}
    };

    const children = `<div>This is a secret messsage</div>`;

    render(<SubscriberRoute children={children} />);

    expect(screen.queryByText(/This is a secret messsage/i)).not.toBeInTheDocument();
  });
});
