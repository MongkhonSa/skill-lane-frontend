import { AuthActions } from '../actions/authAction';

type AuthState = {
  isAuthenticated:boolean,
  accessToken:string
  roles:string[]
};
const initialState: AuthState = {
  isAuthenticated: !!localStorage.getItem('accessToken'),
  accessToken: localStorage.getItem('accessToken') || '',
  roles: JSON.parse(localStorage.getItem('roles') as string) || [],
};
const authReducer = (state: AuthState = initialState, action: AuthActions) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('accessToken', action.payload.accessToken);
      localStorage.setItem('roles', JSON.stringify(action.payload.roles));
      return {
        ...state,
        accessToken: action.payload.accessToken,
        isAuthenticated: true,
        roles: action.payload.roles,
      };
    case 'LOGOUT':
      localStorage.removeItem('accessToken');
      localStorage.setItem('roles', '[]');

      return {
        ...state,
        accessToken: '',
        isAuthenticated: false,
        roles: [],
      };
    default:
      return state;
  }
};
export default authReducer;
