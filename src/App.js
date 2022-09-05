import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

import Bingo from './Bingo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Bingo />
    </ChakraProvider>
  );
}

export default App;
