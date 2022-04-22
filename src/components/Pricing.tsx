import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';

export function Pricing() {
  return (
    <Flex textAlign='center'>
      <Box bg='#F0EAFB' p='60px'>
        <Text fontSize='24px' fontWeight='800'>
          Premium PRO
        </Text>
        <Heading as='h3' fontSize='60px' mt='16px'>
          $329
        </Heading>
        <Text color='#171923' fontSize='18px' fontWeight='500' mt='8px'>
          billed just once
        </Text>
        <Button colorScheme='purple' size='lg' w='282px' mt='24px'>
          Get Started
        </Button>
      </Box>
    </Flex>
  );
}
