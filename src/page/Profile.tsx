import {
  Form, Input, Button, Card, Row, Col, notification, DatePicker, Select,
} from 'antd';
import { useForm } from 'antd/lib/form/Form';
import moment from 'moment';
import { useEffect, useState } from 'react';

import { getProfile, updateProfile } from '../api/userService';

import { GetProfileOutput, UpdateProfileInput } from '../types';

const Profile = () => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [profile, setProfile] = useState<GetProfileOutput>();
  const [form] = useForm();
  const isDisbled = !isEditMode;

  const fetchProfile = async () => {
    const data = await getProfile();
    form.setFieldsValue({
      firstName: data.firstName,
      lastName: data.lastName,
      nickName: data.nickName,
      gender: data.gender,
      birthday: moment(data.birthday),
    });
    setProfile(data);
  };
  const handleCancel = async () => {
    form.setFieldsValue({
      firstName: profile?.firstName,
      lastName: profile?.lastName,
      nickName: profile?.nickName,
      gender: profile?.gender,
      birthday: moment(profile?.birthday),
    });
    setIsEditMode(false);
  };

  const onFinish = async (input:UpdateProfileInput) => {
    try {
      await updateProfile(input);
      await fetchProfile();
      setIsEditMode(false);
    } catch (e) {
      notification.error({ message: 'something went wrong' });
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col>
        <Card>
          {!isEditMode && (

          <Row justify="end">
            <Col offset={16} span={4} style={{ marginBottom: '10px' }}>
              <Button onClick={() => setIsEditMode(true)}>
                Edit
              </Button>
            </Col>
          </Row>

          )}

          <Form
            form={form}
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="First name"
              name="firstName"
              rules={[
                {
                  required: true,
                  message: 'Please input your first name!',
                },
              ]}
            >
              <Input disabled={isDisbled} />
            </Form.Item>

            <Form.Item
              label="Last name"
              name="lastName"
              rules={[
                {
                  required: true,
                  message: 'Please input your last name!',
                },
              ]}
            >
              <Input disabled={isDisbled} />
            </Form.Item>
            <Form.Item
              label="Nick name"
              name="nickName"
              rules={[
                {
                  required: true,
                  message: 'Please input your nick name!',
                },
              ]}
            >
              <Input disabled={isDisbled} />
            </Form.Item>

            <Form.Item
              label="Birthday"
              name="birthday"
              rules={[
                {
                  required: true,
                  message: 'Please input your birthdate',
                },
              ]}
            >
              <DatePicker disabled={isDisbled} />
            </Form.Item>
            <Form.Item
              label="Gender"
              name="gender"
              rules={[
                {
                  required: true,
                  message: 'Please input your gender',
                },
              ]}
            >
              <Select disabled={isDisbled}>
                <Select.Option value="FEMALE">female</Select.Option>
                <Select.Option value="MALE">male</Select.Option>

              </Select>
            </Form.Item>
            {isEditMode && (
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit" style={{ marginRight: '8px' }}>
                Save
              </Button>
              <Button htmlType="button" onClick={handleCancel}>
                Cancel
              </Button>
            </Form.Item>
            )}
          </Form>

        </Card>
      </Col>
    </Row>
  );
};

export default Profile;
