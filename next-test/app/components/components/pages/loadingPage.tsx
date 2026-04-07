import { Box, Container, Text } from '@chakra-ui/react'
import React from 'react'

export const LoadingPage = () => {
  return (
    <Container className='flex flex-col items-center justify-center size-full'>
          <Box className='bg-blue-700 rounded-md size-12 animate-pulse flex items-center justify-center'>
              <Text className='text-white text-3xl'>f</Text>
          </Box>
    </Container>
  )
}
