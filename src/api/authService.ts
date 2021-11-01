/* eslint-disable import/prefer-default-export */

import httpClient from '../constant/httpClient';
import { LoginOutput } from '../types';

export const login = async (username:string, password:string):Promise<LoginOutput> => {
  const res = await httpClient.post<LoginOutput>('/auth/login', {
    username,
    password,
  });
  return res.data;
};
