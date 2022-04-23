import { Box, Heading, Text } from '@chakra-ui/react';

export function Header() {
  return (
    <Box
      as='section'
      color='gray.50'
      bg='purple.600'
      pt={{ base: '60px', lg: '90px' }}
      pb='198px'
      px='8'
      textAlign={{ base: 'left', lg: 'center' }}
    >
      <Heading fontWeight='extrabold' fontSize={{ base: '3xl', lg: '5xl' }}>
        Simple pricing for your business
      </Heading>
      <Text fontWeight='medium' fontSize={{ base: 'lg', lg: '2xl' }} pt='4'>
        Plans that are carefully crafted to suit your business.
      </Text>
    </Box>
  );
}
