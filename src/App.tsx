import { Box, Stack } from '@chakra-ui/react';

// To use HStack, VStack, remove the direction prop
function App() {
  return (
    <div className='App'>
      <Stack spacing='24px' direction='row'>
        <Box bg='green' w='100px' h='200px'>
          item1
        </Box>
        <Box bg='blue' w='100px' h='200px'>
          item2
        </Box>
        <Box bg='red' w='200px' h='100px'>
          item3
        </Box>
        <Box bg='tomato' w='100px' h='200px'>
          item4
        </Box>
      </Stack>
    </div>
  );
}

export default App;
