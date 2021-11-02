export type LoginInput = {
  username:string;
  password: string
};

export type LoginOutput = {
  accessToken:string
  roles:string[]
};

export enum Gender{
  MALE = 'MALE',
  FEMALE = 'FEMALE',

}
export type GetProfileOutput = {
  'firstName': string
  'lastName': string
  'nickName': string
  'birthday': Date
  'gender': keyof typeof Gender
};

export type UpdateProfileInput = GetProfileOutput;

export type GetCourseInput = {
  name?:string,
  date?:Date,
};
export type GetCourseOutput = {
  name: string;
  description: string;
  category: string;
  image: string;
  subject: string;
  startTime: Date;
  endTime: Date;
  numberOfStudent: number;
  createdAt: Date;
  user:GetProfileOutput;
};

export type CreateCourseinput = {
  name: string;
  description: string;
  category: string;
  image: string;
  subject: string;
  startTime: Date;
  endTime: Date;
  numberOfStudent: number;
};
