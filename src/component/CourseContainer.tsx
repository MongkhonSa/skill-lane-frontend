import {
  Col, Row,
} from 'antd';

import CourseCard from './CourseCard';
import CourseCardMobile from './CourseCardMobile';
import SearchComponent from './SearchComponent';

type CourseContainerProps = {
  onFinish:Function,
  courseList:{
    name: string;
    description: string;
    category: string;
    image: string;
    subject: string;
    startTime: Date;
    endTime: Date;
    numberOfStudent: number;
    user:{
      firstName:string,
      lastName:string,
    }
  }[]
};
const CourseContainer = ({ courseList, onFinish }:CourseContainerProps) => (
  <>
    <Col offset={1} span={22}>
      <Row justify="end" align="middle" style={{ marginBottom: '10px' }}>
        <SearchComponent onFinish={onFinish} />

      </Row>
    </Col>
    <Row>
      <Col xs={24} xl={0} style={{ borderBottom: '1px solid #E5E5E5' }}>
        <Col xs={{ span: 22, offset: 1 }} md={{ span: 24, offset: 0 }}>
          {
        courseList.map((props) => (
          <CourseCardMobile {...props} />
        ))
      }
        </Col>

      </Col>
      <Col
        xs={0}
        xl={{ span: 24 }}
      >
        <Row style={{ maxWidth: '1140px', padding: '0px 15px', margin: 'auto' }}>
          {
        courseList.map((props) => (
          <CourseCard {...props} />
        ))
      }

        </Row>
      </Col>

    </Row>
  </>
);

export default CourseContainer;
