import {
  Col, Row,
} from 'antd';
import CourseCard from './CourseCard';
import CourseCardMobile from './CourseCardMobile';

type CourseContainerProps = {
  courseList:{
    instructor:string
    name:string;
    image:string;
    startDate:Date;
    endDate:Date;
    numberOfStudent?:number;
  }[]
};
const CourseContainer = ({ courseList }:CourseContainerProps) => (
  <Row>
    <Col xs={24} xl={0}>
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

);

export default CourseContainer;
