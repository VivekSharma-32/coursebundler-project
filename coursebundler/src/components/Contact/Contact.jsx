import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Container h={'92vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading children="Contact Us" />
        <form style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              type="text"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Abc"
              required
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              required
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="message" children="Message" />
            <Textarea
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Your message..."
              required
              focusBorderColor="yellow.500"
            />
          </Box>

          <Button colorScheme="yellow" my={'4'} type="submit">
            Send Mail
          </Button>

          <Box my={'4'}>
            Request for a course?{' '}
            <Link to="/request">
              <Button colorScheme="yellow" variant={'link'}>
                Click
              </Button>{' '}
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Contact;
