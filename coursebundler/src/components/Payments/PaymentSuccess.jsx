import React from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <Container height={'90vh'} padding={'16'}>
      <Heading my={'8'} textAlign={'center'}>
        You have a pro pack
      </Heading>
      <VStack
        boxShadow={'lg'}
        pb={'16'}
        alignItems={'center'}
        borderRadius={'lg'}
      >
        <Box
          width={'full'}
          bg={'yellow.400'}
          p={'4'}
          css={{ borderRadius: '8px 8px 0 0' }}
        >
          <Text color={'black'}>Payment Success</Text>
        </Box>
        <Box padding={'4'}>
          <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
            <Text>
              Congratulations you are a pro member. You have access to premium
              content.
            </Text>
            <Heading size={'4xl'}>
              <RiCheckboxCircleFill />
            </Heading>
          </VStack>
        </Box>
        <Link to="/profile">
          <Button variant={'ghost'}>Go to profile</Button>
        </Link>
        <Heading size={'xs'}>Reference: assdjasjkdjksk</Heading>
      </VStack>
    </Container>
  );
};

export default PaymentSuccess;
