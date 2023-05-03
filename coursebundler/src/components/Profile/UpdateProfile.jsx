import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { updateProfile } from '../../redux/Actions/profile';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../../redux/Actions/user';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const submitHandler = async e => {
    e.preventDefault();

    await dispatch(updateProfile(name, email));
    dispatch(loadUser());
    navigate('/profile');
  };

  const { loading } = useSelector(state => state.profile);

  return (
    <Container py={'16'} minH={'90vh'}>
      <form onSubmit={submitHandler}>
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
          <Button
            isLoading={loading}
            w={'full'}
            colorScheme="yellow"
            type="submit"
          >
            Change
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdateProfile;
