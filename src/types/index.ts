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
