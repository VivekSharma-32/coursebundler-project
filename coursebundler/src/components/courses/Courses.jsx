import React, { useState } from 'react';
import {
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize={'60'} objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW={'200'}
        size={'sm'}
        fontFamily={'sans-serif'}
        noOfLines={'3'}
        children={title}
      />
      <Text noOfLines={'2'} children={description} />
      <HStack>
        <Text
          fontWeight={'bold'}
          textTransform={'uppercase'}
          children={'Creator'}
        />
        <Text
          fontFamily={'body'}
          textTransform={'uppercase'}
          children={creator}
        />
      </HStack>
      <Heading
        textAlign={'center'}
        size={'xs'}
        children={`Lectures - ${lectureCount}`}
        textTransform={'uppercase'}
      />
      <Heading
        size={'xs'}
        children={`Views - ${views}`}
        textTransform={'uppercase'}
      />
      <Stack direction={['column', 'row']} alignItems={'center'}>
        <Link to={`/course/${id}`}>
          <Button colorScheme="yellow">Watch Now</Button>
        </Link>
        <Button
          variant={'ghost'}
          colorScheme="yellow"
          onClick={() => addToPlaylistHandler(id)}
        >
          Add To Playlist
        </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  const categories = [
    'Web Development',
    'Artificial Intelligence',
    'Data Structures & Algorithms',
    'App Development',
    'Data Science',
    'Game Development',
  ];

  const addToPlaylistHandler = () => {
    console.log('Added to playlist');
  };
  return (
    <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
      <Heading children="All Courses" m={'8'} />
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a course..."
        type="text"
        focusBorderColor="yellow.500"
      />
      <HStack
        overflowX={'auto'}
        paddingY={'8'}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {categories.map((category, idx) => (
          <Button key={idx} onClick={() => setCategory(category)} minW={'60'}>
            <Text children={category} />
          </Button>
        ))}
      </HStack>
      <Stack
        direction={['column', 'row']}
        flexWrap={'wrap'}
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <Course
          title="Sample"
          description="Sample"
          views="23"
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPUKOHNfZ8qrt64oKInzIDz6B4yMKsiNK4zg&usqp=CAU"
          id="Sample"
          creator="Sample Boy"
          lectureCount="2"
          addToPlaylistHandler={addToPlaylistHandler}
        />
      </Stack>
    </Container>
  );
};

export default Courses;
