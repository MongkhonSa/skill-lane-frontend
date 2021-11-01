import { Col, Menu } from 'antd';
import Layout, {
  Content, Header,
} from 'antd/lib/layout/layout';
import {
  Dispatch,
  ReactElement, ReactNode,
} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MenuOutlined } from '@ant-design/icons';

import { AuthActions } from '../redux/actions/authAction';

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
            <Menu.Item>My Course</Menu.Item>
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
