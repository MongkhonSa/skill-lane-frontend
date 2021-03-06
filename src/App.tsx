import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './page/Login';
import store from './redux/store';
import 'antd/dist/antd.css';
import Home from './page/Home';
import ProtectedRoute from './component/ProtectedRoute';
import MainLayout from './component/MainLayout';
import Profile from './page/Profile';
import MyCourse from './page/MyCourse';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <MainLayout>
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/profile" component={Profile} />
            <ProtectedRoute exact path="/my-course" component={MyCourse} />

          </MainLayout>

        </Switch>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
