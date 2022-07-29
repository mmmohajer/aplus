export const passwordValidators = [
  { type: 'required', message: 'Password is required' },
  {
    type: 'minRequired',
    message: 'PAssword must be at least 3 characters',
    minRequired: 3
  },
  {
    type: 'maxRequired',
    message: 'Password must be at less than 8 characters',
    maxRequired: 8
  }
];

export const provniceValidators = [{ type: 'required', message: 'Province is required' }];

export const birthDateValidators = [{ type: 'required', message: 'Birth date is required' }];

export const profilePhotoValidators = [{ type: 'required', message: 'Profile Photo is required' }];
