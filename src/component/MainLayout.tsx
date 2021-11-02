import { Col, Menu } from 'antd';
import Layout, {
  Content, Header,
} from 'antd/lib/layout/layout';
import {
  Dispatch,
  ReactElement, ReactNode,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MenuOutlined } from '@ant-design/icons';

import { AuthActions } from '../redux/actions/authAction';
import { AppState } from '../redux/reducers/rootReducer';

const Logo = styled.div`
  float: left;
  width: 120px;
  height: 31px;
 
`;

type MainLayoutProps = {
  children: ReactNode

};
const MainLayout = ({ children }:MainLayoutProps):ReactElement => {
  const authDispatch = useDispatch<Dispatch<AuthActions>>();
  const auth = useSelector((state:AppState) => state.auth); // get auth state
  const { roles } = auth;
  const isInstructor = roles.some((role) => role === 'instructor');
  const handleLogout = () => {
    authDispatch({ type: 'LOGOUT' });
  };

  return (
    <Layout style={{ background: 'white' }}>
      <Header>
        <Link to="/">
          <Logo>My App </Logo>
        </Link>
        <Col>
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ float: 'right' }}
            overflowedIndicator={
              <MenuOutlined />
          }
          >
            <Menu.Item>
              <Link to="/">Home</Link>
            </Menu.Item>
            {isInstructor && <Menu.Item><Link to="/my-course">My Course</Link></Menu.Item>}
            <Menu.Item>
              <Link to="/profile">Profile</Link>
            </Menu.Item>
            <Menu.Item onClick={handleLogout}>Logout</Menu.Item>
          </Menu>
        </Col>

      </Header>
      <Content style={{ marginTop: '20px' }}>
        {children}
      </Content>
    </Layout>

  );
};

export default MainLayout;
