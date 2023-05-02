import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  TiSocialYoutubeCircular,
  TiSocialInstagramCircular,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';

const Footer = () => {
  return (
    <Box padding={'4'} bg={'blackAlpha.900'} minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack align={['center', 'flex-start']} width={'full'}>
          <Heading children="All Rights Reserved" color={'white'} />
          <Heading
            children="@Vivek sharma"
            color={'yellow.400'}
            fontFamily={'body'}
            fontSize={'sm'}
          />
        </VStack>
        <HStack
          spacing={['2', '10']}
          justifyContent={'center'}
          color={'white'}
          fontSize={'50'}
        >
          <a
            href="https://www.youtube.com/channel/UCZhWgp-F_slAhfgfKLIqrYg"
            target="blank"
          >
            <TiSocialYoutubeCircular />
          </a>
          <a href="https://www.instagram.com/the_vivek.sh/" target="blank">
            <TiSocialInstagramCircular />
          </a>
          <a href="https://github.com/VivekSharma-32" target="blank">
            <DiGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
