import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModal from './CourseModal';

const AdminCourses = () => {
  const courses = [
    {
      _id: 1,
      title: 'MERN',
      category: 'Web Development',
      poster: {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPUKOHNfZ8qrt64oKInzIDz6B4yMKsiNK4zg&usqp=CAU',
      },
      createdBy: 'Vivek sharma',
      views: 123,
      numOfVideos: 12,
    },
  ];

  const { isOpen, onClose, onOpen } = useDisclosure();

  const courseDetailsHandler = userId => {
    onOpen();
  };

  const deleteUserHandler = userId => {
    console.log(userId);
  };

  const deleteLectureButtonHandler = (courseId, lectureId) => {
    console.log(courseId);
    console.log(lectureId);
  };

  const addLectureHandler = (e, courseId, title, description, video) => {
    e.preventDefault();
  };

  return (
    <Grid
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
      css={{
        cursor: `url(${cursor}),default`,
      }}
    >
      <Box p={['0', '8']} overflowX="auto">
        <Heading
          textTransform={'uppercase'}
          children="All Courses"
          my={'16'}
          textAlign={['center', 'left']}
        />

        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size={'lg'}>
            <TableCaption>All Available Courses In The Database</TableCaption>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {courses.map(item => (
                <Row
                  key={item._id}
                  item={item}
                  courseDetailsHandler={courseDetailsHandler}
                  deleteUserHandler={deleteUserHandler}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <CourseModal
          isOpen={isOpen}
          onClose={onClose}
          id={'asldjaslasdhsal'}
          courseTitle={'React Course'}
          deleteButtonHandler={deleteLectureButtonHandler}
          addLectureHandler={addLectureHandler}
        />
      </Box>

      <Sidebar />
    </Grid>
  );
};

export default AdminCourses;

function Row({ item, courseDetailsHandler, deleteUserHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image src={item.poster.url} />
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            onClick={() => courseDetailsHandler(item._id)}
            variant={'outline'}
            color="purple.500"
          >
            View Lectures
          </Button>
          <Button
            onClick={() => deleteUserHandler(item._id)}
            color="purple.600"
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
