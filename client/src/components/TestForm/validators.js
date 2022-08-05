export const passwordValidators = [
  { type: 'required', message: 'Password is required' },
  {
    type: 'minRequired',
    message: 'Password must be at least 3 characters',
    minRequired: 3
  },
  {
    type: 'maxRequired',
    message: 'Password must be at less than 8 characters',
    maxRequired: 8
  }
];
