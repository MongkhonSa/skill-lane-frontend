import {
  Form, Input, Button, Card, Row, Col, notification,
} from 'antd';
import { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { login } from '../api/authService';
import { AuthActions } from '../redux/actions/authAction';

import { LoginInput } from '../types';

const Login = () => {
  const authDispatch = useDispatch<Dispatch<AuthActions>>();
  const history = useHistory();
  const onFinish = async ({ username, password }:LoginInput) => {
    try {
      const data = await login(username, password);
      authDispatch({ type: 'LOGIN', payload: data });
      history.replace('/');
    } catch (e) {
      notification.error({ message: 'something went wrong' });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col>
        <Card>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
