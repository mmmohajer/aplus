export const nameValidators = [
  { type: 'required', message: 'Name is required' },
  {
    type: 'minRequired',
    message: 'Name must be at least 3 characters',
    minRequired: 3
  },
  {
    type: 'maxRequired',
    message: 'Name must be at less than 60 characters',
    maxRequired: 60
  }
];

export const emailValidators = [
  { type: 'required', message: 'Email is required' },
  { type: 'email', message: 'Must be a valid email address' }
];

export const phoneValidators = [{ type: 'required', message: 'Phone number is required' }];
