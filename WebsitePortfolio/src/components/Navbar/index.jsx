import React from 'react';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'
import { Text, Button } from '@chakra-ui/react'


const Navbar = () => {

    return (
      <>
        <Wrap align='center' spacing="20px">
          <WrapItem>
            <Button borderRadius='20px' border='none' boxShadow="lg"> About Me </Button>
          </WrapItem>
          <WrapItem>
            <Button borderRadius='20px' border='none' boxShadow="lg"> Projects </Button>
          </WrapItem>
          <WrapItem>
            <Button borderRadius='20px' border='none' boxShadow="lg"> Links </Button>
          </WrapItem>
        </Wrap>
      </>
    );
}

export default Navbar;