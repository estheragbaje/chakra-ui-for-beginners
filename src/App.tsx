import { Box, Button, Text } from '@chakra-ui/react';

function App() {
  return (
    <div className='App'>
      <Box
        bg='green'
        h='300px'
        w='300px'
        margin='auto'
        mt='32px'
        textAlign='center'
      >
        <Text fontSize='32px'>This is a style props example</Text>
        <Button
          mt='32px'
          colorScheme='red'
          _hover={{ background: 'blue' }}
          _focus={{ background: 'yellow', color: 'black' }}
        >
          Click me
        </Button>
      </Box>
    </div>
  );
}

export default App;
