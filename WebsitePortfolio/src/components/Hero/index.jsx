import React from 'react';
import './hero.css';
import { HStack, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import profile from '../../assets/profile.png';

const Hero = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row items-center justify-between
                  lg:p-4 lg:pr-12 lg:pl-12 
                  md:p-2 md:pr-6 md:pl-6 
                  p-4'> 
        <div className='flex flex-col items-center md:items-start mb-4 md:mb-0'> 
          <div className='large-text-hero text-3xl sm:text-4xl md:text-4xl lg:text-8xl'>Theodore Yamit</div>
          <div className='small-text-hero text-base sm:text-lg md:text-2xl lg:text-4xl text-center md:text-left'>
            I am an aspiring computer scientist interested in AI and medicine.
          </div>
          <HStack marginTop={5} spacing={4} justifyContent={{ base: 'center', md: 'start' }}> 
            <button className='buttons-hero'>
              <HStack>
                <Text>My Projects</Text>
                <FontAwesomeIcon icon={faChevronRight} />
              </HStack>
            </button>
            <button className='buttons-hero-about'>
              <HStack>
                <Text>About me</Text>
                <FontAwesomeIcon icon={faUser}/>
              </HStack>
            </button>
          </HStack>
        </div>
        <div className='flex justify-center md:justify-end w-full md:w-auto'> 
          <img src={profile} className='rounded-md w-7/12 sm:w-5/12 md:w-8/12 lg:w-10/12' /> 
        </div>
      </div>
    </>
  );
}

export default Hero;
