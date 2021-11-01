import CourseContainer from '../component/CourseContainer';

const image = 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png';
const courseList = [{
  instructor: 'ผศ. ดร.ธนาธร ทะนานทอง',
  name: 'Data Mining Algorithms ขั้นตอนวิธีสำหรับเหมืองข้อมูล',
  image,
  startDate: new Date(),
  endDate: new Date(),
  numberOfStudent: 100,
},
{
  instructor: 'string',
  name: 'string',
  image,
  startDate: new Date(),
  endDate: new Date(),

},
];
const Home = () => (
  <CourseContainer courseList={courseList} />
);

export default Home;
