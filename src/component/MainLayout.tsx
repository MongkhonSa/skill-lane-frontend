import { Menu } from 'antd';
import Layout, {
  Content, Header,
} from 'antd/lib/layout/layout';
import {
  Dispatch,
  ReactElement, ReactNode,
} from 'react';
import { useDispatch } from 'react-redux';
import { AuthActions } from '../redux/actions/authAction';

type MainLayoutProps = {
  children: ReactNode

};
const MainLayout = ({ children }:MainLayoutProps):ReactElement => {
  const authDispatch = useDispatch<Dispatch<AuthActions>>();

  const handlerLogout = () => {
    authDispatch({ type: 'LOGOUT' });
  };
  return (
    <Layout style={{ background: 'white' }}>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ float: 'right' }}>
          <Menu.Item>MyCourse</Menu.Item>
          <Menu.Item>Profile</Menu.Item>
          <Menu.Item onClick={handlerLogout}>Logout</Menu.Item>

        </Menu>

      </Header>
      <Content style={{ marginTop: '20px' }}>
        {children}
      </Content>
    </Layout>

  );
};

export default MainLayout;
