import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../redux/Actions/user';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { loading } = useSelector(state => state.user);

  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading children="Welcome to Coursebundler" />
        <form style={{ width: '100%' }} onSubmit={submitHandler}>
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
            <FormLabel htmlFor="password" children="Password" />
            <Input
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={'4'}>
            <Link to={'/forgetpassword'}>
              <Button fontSize={'sm'} variant={'link'}>
                {' '}
                Forget Password?
              </Button>
            </Link>
          </Box>
          <Button colorScheme="yellow" my={'4'} type="submit">
            Login
          </Button>

          <Box my={'4'}>
            New User?{' '}
            <Link to="/register">
              <Button colorScheme="yellow" variant={'link'}>
                Signup
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
