import React from 'react';
import './navbar.css';
import { Flex, Spacer, Image, Box, Wrap } from '@chakra-ui/react'
import { Text, Button } from '@chakra-ui/react';
import logo from '../../assets/logo.svg'


const Navbar = () => {

  return (
    <>
      <div class='flex p-6 pl-12 pr-12 justify-between items-center'>
        <Image src={logo} />
        <Wrap>
          <Text fontFamily='proximanova regular' borderRadius='20px' border='none'> About Me </Text>
          <Spacer />
          <Text fontFamily='proximanova regular' borderRadius='20px' border='none'> Projects </Text>
          <Spacer />
          <Text fontFamily='proximanova regular' borderRadius='20px' border='none'> Links </Text>
        </Wrap>
      </div>
    </>
  );
}

export default Navbar;