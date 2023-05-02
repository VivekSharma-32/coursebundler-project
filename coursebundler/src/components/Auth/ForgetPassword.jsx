import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  return (
    <Container padding={'16'} h={'90vh'}>
      <form>
        <Heading
          children="Forgot Password"
          my={'16'}
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        />
        <VStack spacing={'8'}>
          <Input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="abc@gmail.com"
            required
            focusBorderColor="yellow.500"
          />
          <Button type="submit" width={'full'} colorScheme={'yellow'}>
            Send Reset Link
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ForgetPassword;
