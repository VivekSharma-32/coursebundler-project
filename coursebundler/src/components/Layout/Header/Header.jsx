import React from 'react';
import { ColorModeSwitcher } from './../../../ColorModeSwitcher';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { RiDashboard2Fill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const LinkButton = ({ url = '/', title = 'Home', onClose }) => (
  <Link onClick={onClose} to={url}>
    <Button variant={'ghost'}>{title}</Button>
  </Link>
);

const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const isAuthenticated = true;

  const user = {
    role: 'admin',
  };

  const logoutHandler = () => {
    console.log('Logout');
    onClose();
  };
  return (
    <>
      <ColorModeSwitcher />
      <Button
        colorScheme="yellow"
        width={'12'}
        height={'12'}
        rounded={'full'}
        position={'fixed'}
        top={'6'}
        left={'6'}
        onClick={onOpen}
        zIndex={'overlay'}
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader borderBottomWidth={'1px'}>
              COURSE BUNDLER
            </DrawerHeader>
            <DrawerBody>
              <VStack spacing={'4'} alignItems={'flex-start'}>
                <LinkButton onClose={onClose} url="/" title="Home" />
                <LinkButton
                  onClose={onClose}
                  url="/courses"
                  title="Browse All Courses"
                />
                <LinkButton
                  onClose={onClose}
                  url="/request"
                  title="Request A Course"
                />
                <LinkButton
                  onClose={onClose}
                  url="/contact"
                  title="Contact Us"
                />
                <LinkButton onClose={onClose} url="/about" title="About" />

                <HStack
                  justifyContent={'space-evenly'}
                  position={'absolute'}
                  bottom={'2rem'}
                  width={'80%'}
                >
                  {isAuthenticated ? (
                    <>
                      <VStack>
                        <HStack>
                          <Link onClick={onClose} to="/profile">
                            <Button variant={'ghost'} colorScheme="yellow">
                              Profile
                            </Button>
                          </Link>
                          <Link to="/logout">
                            <Button variant={'ghost'} onClick={logoutHandler}>
                              <RiLogoutBoxLine style={{ margin: '4px' }} />
                              Logout
                            </Button>
                          </Link>
                        </HStack>
                        {user && user.role === 'admin' && (
                          <Link onClick={onClose} to="/admin/dashboard">
                            <Button colorScheme="purple" variant={'ghost'}>
                              <RiDashboard2Fill style={{ margin: '4px' }} />
                              DashBoard
                            </Button>
                          </Link>
                        )}
                      </VStack>
                    </>
                  ) : (
                    <>
                      <Link onClick={onClose} to="/login">
                        <Button colorScheme="yellow">Login</Button>
                      </Link>

                      <p>OR</p>

                      <Link onClick={onClose} to="/register">
                        <Button colorScheme="yellow">Sign Up</Button>
                      </Link>
                    </>
                  )}
                </HStack>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Header;
