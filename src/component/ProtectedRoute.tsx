// PrivateRoute.tsx
import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from '../redux/reducers/rootReducer';

interface Props extends RouteProps {
  component: any;
}

const PrivateRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const auth = useSelector((state:AppState) => state.auth); // get auth state
  const { isAuthenticated } = auth;
  return (
    <Route
      {...rest}
      render={(props:any) => (isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      ))}
    />
  );
};

export default PrivateRoute;
