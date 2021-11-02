/* eslint-disable import/prefer-default-export */

import httpClient from '../constant/httpClient';
import {
  CreateCourseinput,
  GetCourseInput, GetCourseOutput,
} from '../types';

export const getCourse = async (input:GetCourseInput):Promise<GetCourseOutput[]> => {
  const res = await httpClient.get<GetCourseOutput[]>('/courses', {
    params: input,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return res.data;
};
export const createCourse = async (input:CreateCourseinput):Promise<GetCourseOutput> => {
  const res = await httpClient.post<GetCourseOutput>('/courses', {
    ...input,
  }, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return res.data;
};
export const getMyCourse = async (input:GetCourseInput):Promise<GetCourseOutput[]> => {
  const res = await httpClient.get<GetCourseOutput[]>('/courses/me', {
    params: input,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return res.data;
};

// export const updateProfile = async (input:UpdateProfileInput):Promise<void> => {
//   await httpClient.put('/users/profile', {
//     ...input,
//   }, {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//   });
// };
