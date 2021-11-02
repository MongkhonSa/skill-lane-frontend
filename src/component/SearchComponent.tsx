import {
  Button, Col, DatePicker, Form, Input,
} from 'antd';

type SearchComponentProps = {
  onFinish:Function
};
const SearchComponent = ({ onFinish }:SearchComponentProps) => (

  <Form
    name="customized_form_controls"
    layout="inline"
    onFinish={(values:any) => onFinish(values)}
  >
    <Col span={8}>
      <Form.Item
        name="name"
      >
        <Input placeholder="find by name" allowClear />
      </Form.Item>
    </Col>
    <Col span={8}>

      <Form.Item
        name="date"
      >

        <DatePicker />
      </Form.Item>
    </Col>

    <Form.Item>
      <Button type="primary" htmlType="submit">
        Search
      </Button>
    </Form.Item>
  </Form>
);

export default SearchComponent;
