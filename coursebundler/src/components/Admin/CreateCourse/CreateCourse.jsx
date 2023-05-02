import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Input,
  Select,
  StepTitle,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Sidebar';
import { fileUploadCss } from '../../Auth/Register';

const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');

  const categories = [
    'Web Development',
    'Artificial Intelligence',
    'Data Structures & Algorithms',
    'App Development',
    'Data Science',
    'Game Development',
  ];

  const changeImageFileHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  return (
    <Grid
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
      css={{
        cursor: `url(${cursor}),default`,
      }}
    >
      <Container py={'16'}>
        <Heading
          textTransform={'uppercase'}
          children="Create Course"
          my={'16'}
          textAlign={['center', 'left']}
        />
        <VStack m={'auto'} spacing={'8'}>
          <Input
            type="text"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Title"
            required
            focusBorderColor="purple.300"
          />
          <Input
            type="text"
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Description"
            required
            focusBorderColor="purple.300"
          />
          <Input
            type="text"
            id="description"
            value={createdBy}
            onChange={e => setCreatedBy(e.target.value)}
            placeholder="Creator Name"
            required
            focusBorderColor="purple.300"
          />

          <Select
            focusBorderColor="purple.300"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option value={''}>Category</option>
            {categories.map(item => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>

          <Input
            accept="image/*"
            type="file"
            placeholder="Enter your password"
            required
            focusBorderColor="purple.300"
            css={{
              '&::file-selector-button': {
                ...fileUploadCss,
                color: 'purple',
              },
            }}
            onChange={changeImageFileHandler}
          />
          {imagePrev && (
            <Image src={imagePrev} boxSize={'64'} objectFit={'contain'} />
          )}

          <Button w={'full'} colorScheme="purple" type="submit">
            Create
          </Button>
        </VStack>
      </Container>

      <Sidebar />
    </Grid>
  );
};

export default CreateCourse;
