/* eslint-disable import/prefer-default-export */

import httpClient from '../constant/httpClient';
import { GetProfileOutput, UpdateProfileInput } from '../types';

export const getProfile = async ():Promise<GetProfileOutput> => {
  const res = await httpClient.get<GetProfileOutput>('/users/profile', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return res.data;
};

export const updateProfile = async (input:UpdateProfileInput):Promise<void> => {
  await httpClient.put('/users/profile', {
    ...input,
  }, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
};
