import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import introVideo from '../../assets/videos/intro.mp4';

const CoursePage = () => {
  const lectureTitle = 'Lecture Title';
  const [lectureNumber, setLectureNumber] = useState(0);

  const lectures = [
    {
      _id: 'sadsjsak',
      title: 'Sample',
      description: 'Sample akjsdhakdshka',
      video: {
        url: 'askjad',
      },
    },
    {
      _id: 'sadsjsak2',
      title: 'Sample 2',
      description: 'Sample akjsdhakdshka',
      video: {
        url: 'askjad',
      },
    },
    {
      _id: 'sadsjsak3',
      title: 'Sample 3',
      description: 'Sample akjsdhakdshka',
      video: {
        url: 'askjad',
      },
    },
  ];
  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
          src={introVideo}
          controls
          width={'100%'}
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        ></video>
        <Heading
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
          m={'4'}
        />
        <Heading m={'4'} children="Description" />
        <Text m={'4'} children={lectures[lectureNumber].description} />
      </Box>

      <VStack>
        {lectures.map((element, index) => (
          <button
            onClick={() => setLectureNumber(index)}
            key={element._id}
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              margin: '0',
              borderBottom: '1px solid rgba(0,0,0,0.2',
            }}
          >
            <Text noOfLines={'1'}>
              #{index + 1} {element.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CoursePage;
