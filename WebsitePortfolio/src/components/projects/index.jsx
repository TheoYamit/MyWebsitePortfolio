import React from 'react';
import './projects.css';
import { Flex, Grid, GridItem, Text, HStack, VStack, Box, Image, useBreakpointValue } from '@chakra-ui/react';
import project1cover from '../../assets/Project1/cover.png';
import project2cover from '../../assets/Project2/cover.png';
import project3cover from '../../assets/Project3/cover.png';
import chakraui from '../../assets/logos/chakraui.svg';
import css3 from '../../assets/logos/css3.svg';
import javascript from '../../assets/logos/javascript.svg';
import mysql from '../../assets/logos/mysql.svg';
import nodejs from '../../assets/logos/nodejs.svg';
import react from '../../assets/logos/react.svg';
import vitejs from '../../assets/logos/vitejs.svg';
import materialui from '../../assets/logos/materialui.svg';
import html5 from '../../assets/logos/html5.svg';
import langchain from '../../assets/logos/langchain.svg';
import pinecone from '../../assets/logos/pinecone.svg';
import python from '../../assets/logos/python.svg';
import streamlit from '../../assets/logos/streamlit.svg';
import tensorflow from '../../assets/logos/tensorflow.svg';
import kaggle from '../../assets/logos/kaggle.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';




const Projects = () => {
  const columnsForProject = useBreakpointValue({
    base: 'repeat(1, 1fr)',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)'
  })

  const textForProjectTitle = useBreakpointValue({
    base: '3xl',
    md: '2xl',
    lg: '3xl'
  })
  return (
    <>
      <Text fontFamily='proximanova bold' fontSize='6xl' textAlign='center' marginTop={30}> Projects </Text>
      <Grid templateColumns={columnsForProject} gap={6} className='lg:p-4 lg:pr-12 lg:pl-12 md:p-2 md:pr-6 md:pl-6 '>
        <GridItem backgroundColor='rgba(239, 239, 240, 0.9)' borderRadius='10px'>
          <VStack align='stretch'>
            <Image borderTopRightRadius={10} borderTopLeftRadius={10} src={project1cover} />
            <Text p={2} fontFamily='proximanova bold' fontSize={textForProjectTitle}>Interactive Shopping Website</Text>
            <Text p={2}> This project involved creating a website that users could shop items on. They would be able to sign up for an account,
              login to that account, and then browse the website for items. They are able to add items into their shopping cart...
            </Text>
            <HStack p={4} gap={10} wrap='wrap' justifyContent='start' alignItems='center'>
              <Image className='logo-size logo-pulse' src={nodejs} />
              <Image className='logo-size logo-pulse' src={mysql} />
              <Image className='logo-size logo-pulse' src={react} />
              <Image className='logo-size logo-pulse' src={vitejs} />
              <Image className='logo-size logo-pulse' src={javascript} />
              <Image className='logo-size logo-pulse' src={html5} />
              <Image className='logo-size logo-pulse' src={css3} />
              <Image className='logo-size logo-pulse' src={chakraui} />
              <Image className='logo-size logo-pulse' src={materialui} />
            </HStack>
            <HStack p={4} gap={1} justifyContent='end' alignItems='center'>
              <Text fontFamily='proximanova bold'> Read more</Text>
              <FontAwesomeIcon icon={faChevronRight} />
            </HStack>
          </VStack>
        </GridItem>

        <GridItem backgroundColor='rgba(239, 239, 240, 0.9)' borderRadius='10px'>
          <VStack align='stretch'>
            <Image borderTopRightRadius={10} borderTopLeftRadius={10} src={project2cover} />
            <Text p={2} fontFamily='proximanova bold' fontSize={textForProjectTitle}>Multiple PDF Chatbot</Text>
            <Text p={2}> I wanted to learn more about information retrieval with large language models. This involved
                chunking the text. I wanted to learn more about information retrieval with large language models. This involved
                chunking the text...
            </Text>
            <HStack p={4} gap={10} wrap='wrap' justifyContent='start' alignItems='center'>
              <Image className='logo-size logo-pulse' src={langchain} />
              <Image className='logo-size logo-pulse' src={pinecone} />
              <Image className='logo-size logo-pulse' src={python} />
              <Image className='logo-size logo-pulse' src={streamlit} />
              <Image className='logo-size logo-pulse' src={html5} />
              <Image className='logo-size logo-pulse' src={css3} />
              <div class='logo-size logo-pulse'></div>
              <div class='logo-size logo-pulse'></div>
              <div class='logo-size logo-pulse'></div>
            </HStack>

            <HStack p={4} gap={1} justifyContent='end' alignItems='center'>
              <Text fontFamily='proximanova bold'> Read more</Text>
              <FontAwesomeIcon icon={faChevronRight} />
            </HStack>
          </VStack>
        </GridItem>

        <GridItem backgroundColor='rgba(239, 239, 240, 0.9)' borderRadius='10px'>
        <VStack align='stretch'>
            <Image className='cover-size' borderTopRightRadius={10} borderTopLeftRadius={10} src={project3cover} />
            <Text p={2} fontFamily='proximanova bold' fontSize={textForProjectTitle}>AI Face Mask Detection</Text>
            <Text p={2}> This project involved creating a website that users could shop items on. They would be able to sign up for an account,
              login to that account, and then browse the website for items. They are able to add items into their shopping cart...
            </Text>
            <HStack p={4} gap={10} wrap='wrap' justifyContent='start' alignItems='center'>
              <Image className='logo-size logo-pulse' src={tensorflow} />
              <Image className='logo-size logo-pulse' src={kaggle} />
            </HStack>
            <HStack p={4} gap={1} justifyContent='end' alignItems='center'>
              <Text fontFamily='proximanova bold'> Read more</Text>
              <FontAwesomeIcon icon={faChevronRight} />
            </HStack>
          </VStack>
        </GridItem>

      </Grid>
    </>

  );
};

export default Projects;