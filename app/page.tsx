'use client'

import Image from 'next/image'
import { ChakraProvider,Flex, Box, useColorMode, useColorModeValue, Text, Heading, Input, Button, Center } from '@chakra-ui/react'

const Home = () => {
  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue ("gray.200", "gray.800")

  return (
    <ChakraProvider>
      <Flex  height="100vh" alignItems="center" justifyContent="center">
        <Flex direction= "column" background={formBackground} p={12} rounded={6}>
          <Heading mb={6} alignItems="center" alignContent="center" justifyContent="center"> Log in </Heading>
          <Input placeholder="kyalosteve@gmail.com"  variant="filled" mb={3} type="email"></Input>
          <Input placeholder="*********" variant="filled" mb={6} type="password"></Input>
          <Button mb={6} colorScheme='orange'>Log in</Button>
          <Button onClick= {toggleColorMode} >Change Color Mode</Button>
        </Flex>
      
      </Flex> 
    </ChakraProvider>
     
  )
}

export default Home
  