import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';

const UpdateProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <Container py={'16'} minH={'90vh'}>
      <form>
        <Heading
          children="Update Profile"
          my={'16'}
          textAlign={['center', 'left']}
          textTransform={'uppercase'}
        />
        <VStack>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="ABC"
            focusBorderColor="yellow.500"
          />

          <Input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="abc@gmail.com"
            focusBorderColor="yellow.500"
          />
          <Button w={'full'} colorScheme="yellow" type="submit">
            Change
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdateProfile;
