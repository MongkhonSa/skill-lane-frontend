import { AuthActions } from '../actions/authAction';

type AuthState = {
  isAuthenticated:boolean,
  accessToken:string
};
const initialState: AuthState = {
  isAuthenticated: !!localStorage.getItem('accessToken'),
  accessToken: localStorage.getItem('accessToken') || '',
};
const authReducer = (state: AuthState = initialState, action: AuthActions) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('accessToken', action.payload);
      return {
        ...state,
        accessToken: action.payload,
        isAuthenticated: true,
      };
    case 'LOGOUT':
      localStorage.removeItem('accessToken');
      return {
        ...state,
        accessToken: '',
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
export default authReducer;
