/* eslint-disable import/prefer-default-export */

import httpClient from '../constant/httpClient';
import store from '../redux/store';
import { GetProfileOutput, UpdateProfileInput } from '../types';

const {
  auth: {
    accessToken,
  },
} = store.getState();
export const getProfile = async ():Promise<GetProfileOutput> => {
  const res = await httpClient.get<GetProfileOutput>('/users/profile', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.data;
};

export const updateProfile = async (input:UpdateProfileInput):Promise<void> => {
  await httpClient.put('/users/profile', {
    ...input,
  }, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
