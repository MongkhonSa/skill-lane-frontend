import {
  Card as C,
} from 'antd';
import dayjs from 'dayjs';
import styled from 'styled-components';

const Card = styled(C)`
font-family: "DBHeavent";
position: relative;
width: 210px;
background: #fff;
border: 1px solid #E5E5E5;
display: inline-block;
margin: 0px 5px;
margin-bottom: 10px;
float: left;
letter-spacing: 0px;
`;

const Titile = styled.div`
margin: 17px 0px 10px 0px;
height: 40px;
text-align: left;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
color: #00532a;
`;

const Content = styled.div`
width: 100%;
padding: 0px 10px;
margin: 10px 0px;`;

const TeacherTitle = styled.div`
text-align: left;
line-height: 1.1;
`;
const CourseDate = styled(TeacherTitle)`
text-align: right;
line-height: 1.1;
`;

const FooterContent = styled.div`
justify-content: flex-end;
align-items: flex-end;
line-height: 1.1;
padding: 0 10px;
margin-bottom: 10px;
`;

type CourseCardProps = {
  instructor:string
  name:string;
  image:string;
  startDate:Date;
  endDate:Date;
  numberOfStudent?:number;
};

const CourseCard = ({
  instructor,
  startDate, endDate,
  numberOfStudent,
  name, image = 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
}:CourseCardProps) => (
  <Card
    bodyStyle={{
      padding: '0px',
    }}
    cover={(
      <img
        alt="example"
        src={image}
      />
  )}
  >
    <Content>
      <Titile>{name}</Titile>
      <TeacherTitle>{instructor}</TeacherTitle>
    </Content>
    <FooterContent>
      <CourseDate>{`start date: ${dayjs(startDate).format('DD/MM/YY')}`}</CourseDate>
      <CourseDate>{`end date: ${dayjs(endDate).format('DD/MM/YY')}`}</CourseDate>
      {numberOfStudent && <CourseDate>{`number of student: ${numberOfStudent}`}</CourseDate>}
    </FooterContent>

  </Card>
);
export default CourseCard;
