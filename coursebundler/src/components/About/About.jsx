import {
  Avatar,
  Container,
  Heading,
  Stack,
  VStack,
  Text,
  Button,
  Box,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import introVideo from '../../assets/videos/intro.mp4';
import { RiSecurePaymentFill } from 'react-icons/ri';
import termsAndConditions from '../../assets/docs/termsAndCondition';

const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <Avatar
        src="https://avatars.githubusercontent.com/u/50068155?v=4"
        boxSize={['40', '48']}
      />
      <Text children="Co-Founder" opacity="0.7" />
    </VStack>
    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children="Vivek Sharma" size={['md', 'xl']} />
      <Text
        children="I am a full stack developer and a learner. My mission is to develop quality code over time."
        textAlign={['center', 'left']}
      />
    </VStack>
  </Stack>
);

const VideoPlayer = () => (
  <Box>
    <video
      src={introVideo}
      autoPlay
      controls
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      muted
    ></video>
  </Box>
);

const TandC = ({ termsAndConditions }) => (
  <Box>
    <Heading
      size={'md'}
      children="Terms and Conditions"
      textAlign={['center', 'left']}
      my={'4'}
    />
    <Box h={'sm'} p={'4'} overflowY={'scroll'}>
      <Text
        textAlign={['center', 'left']}
        letterSpacing={'widest'}
        fontFamily={'heading'}
      >
        {termsAndConditions}
      </Text>
      <Heading
        my={'4'}
        size={'xs'}
        children="Refund only applicable for cancellation within 7 days."
      />
    </Box>
  </Box>
);

const About = () => {
  return (
    <Container maxW={'container.lg'} padding={'16'} boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']} />
      <Founder />
      <Stack m={'8'} direction={['column', 'row']} alignItems={'center'}>
        <Text fontFamily={'cursive'} m={'8'} textAlign={['center', 'left']}>
          We are a video streaming platform with some premium courses available
          only for premium users.
        </Text>
        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme="yellow">
            Checkout Our Plan
          </Button>
        </Link>
      </Stack>
      <VideoPlayer />

      <TandC termsAndConditions={termsAndConditions} />

      <HStack my={'4'} padding={'4'}>
        <RiSecurePaymentFill />
        <Heading
          children="Payment is secured by Razorpay"
          size={'xs'}
          fontFamily={'sans-serif'}
          textTransform={'uppercase'}
        />
      </HStack>
    </Container>
  );
};

export default About;
