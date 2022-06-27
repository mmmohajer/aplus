export const emailValidators = [
  { type: 'required', message: 'Email is required' },
  {
    type: 'email',
    message: 'Must be a valid email address'
  }
];

export const passwordValidators = [
  { type: 'required', message: 'Password required' },
  {
    type: 'minRequired',
    message: 'Password must be at least 3 characters',
    minRequired: 3
  }
];
