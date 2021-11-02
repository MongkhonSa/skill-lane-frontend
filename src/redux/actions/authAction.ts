export interface ILoginAction {
  readonly type: 'LOGIN';
  readonly payload: {
    accessToken:string;
    roles:string[];
  }
}
export interface ILogoutAction {
  readonly type: 'LOGOUT';
}
export type AuthActions =
| ILoginAction
| ILogoutAction;
