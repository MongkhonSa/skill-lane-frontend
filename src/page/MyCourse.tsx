import {
  notification,
  Button,
  Drawer, Input, Form, DatePicker, InputNumber, Col, Row,
} from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { useEffect, useState } from 'react';
import { createCourse, getMyCourse } from '../api/courseService';
import CourseContainer from '../component/CourseContainer';
import { GetCourseInput, GetCourseOutput } from '../types';

const MyCourse = () => {
  const [course, setCourse] = useState<GetCourseOutput[]>([]);
  const fetchCourse = async (input:GetCourseInput) => {
    const data = await getMyCourse(input);
    setCourse(data);
  };
  const [form] = useForm();
  const [visible, setVisible] = useState(false);
  const handleCreateCourse = async (value:GetCourseOutput) => {
    await createCourse(value);
    await fetchCourse({});
    form.resetFields();
    setVisible(false);
  };
  const onFinish = async (input:GetCourseInput) => {
    try {
      await fetchCourse(input);
    } catch (e) {
      notification.error({ message: 'something went wrong' });
    }
  };

  useEffect(() => {
    fetchCourse({});
  }, []);
  return (
    <>
      <Col offset={1} span={22}>
        <Row justify="end" align="middle" style={{ marginBottom: '10px' }}>

          <Col span={24}>
            <Button onClick={() => setVisible(true)}>Create course</Button>
          </Col>

        </Row>
      </Col>
      <Drawer
        title="Create Course"
        placement="left"
        closable
        onClose={() => setVisible(false)}
        visible={visible}
        width={window.innerWidth > 1200 ? 400 : 'auto'}
      >
        <Form
          form={form}
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
          onFinish={handleCreateCourse}
          autoComplete="off"
        >
          <Form.Item
            label="Course Name"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input course name!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="description"
            name="description"
            rules={[
              {
                required: true,
                message: 'Please input course description!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="category"
            name="category"
            rules={[
              {
                required: true,
                message: 'Please input course category!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="subject"
            name="subject"
            rules={[
              {
                required: true,
                message: 'Please input subject!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="start time"
            name="startTime"
            rules={[
              {
                required: true,
                message: 'Please input start time!',
              },
            ]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            label="end time"
            name="endTime"
            rules={[
              {
                required: true,
                message: 'Please input end time!',
              },
            ]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            label="number of student"
            name="numberOfStudent"
            rules={[
              {
                required: true,
                message: 'Please input number of student!',
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            label="image url"
            name="image"
            rules={[
              {
                required: true,
                message: 'Please input number of image!',
              },
            ]}
          >
            <Input />
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
      </Drawer>
      <CourseContainer courseList={course} onFinish={onFinish} />
    </>
  );
};

export default MyCourse;
