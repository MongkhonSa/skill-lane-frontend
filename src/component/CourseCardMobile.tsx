import {
  Row,
} from 'antd';
import dayjs from 'dayjs';
import styled from 'styled-components';

const Titile = styled.div`
  margin: 17px 0px 10px 0px;
  height: 40px;
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #00532a;
  margin-bottom: 5px;
  height: auto;
  font-size: 18px;
  line-height: 1;
  -webkit-line-clamp: 1;
`;

const ContentDetail = styled.div`
  margin: 0px 0px 5px 0px;
  width: 100%;
  padding: 0px 10px;
`;

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
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const ContentImage = styled.div`
  position: relative;
  padding-bottom: 60%;
  height: 0px;
  border-bottom: 1px solid #eee;
`;

const ImageContainer = styled.div`
  width: 30%;
  float:left
`;

const ContentDetailContainer = styled.div`
  font-family: "DBHeavent";
  width: 70%;
  float: left;
;
`;

const Container = styled(Row)`
  width: 100%;
  position: relative;
  background: #fff;
  border-top: 1px solid #E5E5E5;
  display: inline-block;
  margin: 0px 5px;
  margin-bottom: 10px;
  float: left;
  letter-spacing: 0px;
;
`;
type CourseCardProps = {
  name: string;
  image: string;
  startTime: Date;
  endTime: Date;
  numberOfStudent: number;
  user:{
    firstName:string,
    lastName:string,
  }
};

const CourseCardMobile = ({
  name,
  image,
  startTime,
  endTime,
  numberOfStudent,
  user,
}:CourseCardProps) => (
  <Container>
    <ImageContainer>
      <ContentImage>
        <Image
          src={image}
        />
      </ContentImage>
    </ImageContainer>
    <ContentDetailContainer>
      <ContentDetail>
        <Titile>{name}</Titile>
        <TeacherTitle>{`${user.firstName} ${user.lastName}`}</TeacherTitle>
      </ContentDetail>
      <FooterContent>
        <CourseDate>{`start date: ${dayjs(startTime).format('DD/MM/YY')}`}</CourseDate>
        <CourseDate>{`end date: ${dayjs(endTime).format('DD/MM/YY')}`}</CourseDate>
        {numberOfStudent && <CourseDate>{`number of student: ${numberOfStudent}`}</CourseDate>}
      </FooterContent>
    </ContentDetailContainer>
  </Container>

);
export default CourseCardMobile;
