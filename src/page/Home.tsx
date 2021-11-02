import { notification } from 'antd';
import { useEffect, useState } from 'react';
import { getCourse } from '../api/courseService';
import CourseContainer from '../component/CourseContainer';
import { GetCourseInput, GetCourseOutput } from '../types';

const Home = () => {
  const [course, setCourse] = useState<GetCourseOutput[]>([]);
  const fetchCourse = async (input:GetCourseInput) => {
    const data = await getCourse(input);
    setCourse(data);
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

    <CourseContainer courseList={course} onFinish={onFinish} />
  );
};

export default Home;
