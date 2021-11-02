import dayjs from 'dayjs';
import styled from 'styled-components';

const Card = styled.div`
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

const Image = styled.img`
  width: 100%;
  height: 100%;
  vertical-align: middle;
`;
const ImageContainer = styled.div`
  position: relative;
  padding-bottom: 60%;
  height: 0px;
  border-bottom: 1px solid #eee;
`;

const ImageContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
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

const CourseCard = ({
  name,
  startTime,
  endTime,
  numberOfStudent,
  image,
  user,
}:CourseCardProps) => (
  <Card>
    <ImageContainer>
      <ImageContent>

        <Image
          alt="example"
          src={image}
        />
      </ImageContent>
    </ImageContainer>

    <Content>
      <Titile>{name}</Titile>
      <TeacherTitle>{`${user.firstName} ${user.lastName}`}</TeacherTitle>
    </Content>
    <FooterContent>
      <CourseDate>{`start date: ${dayjs(startTime).format('DD/MM/YY')}`}</CourseDate>
      <CourseDate>{`end date: ${dayjs(endTime).format('DD/MM/YY')}`}</CourseDate>
      {numberOfStudent && <CourseDate>{`number of student: ${numberOfStudent}`}</CourseDate>}
    </FooterContent>

  </Card>
);
export default CourseCard;
