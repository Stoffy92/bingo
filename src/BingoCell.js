import React, { useState } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

const BingoCell = () => {
  const [bingoNumber, setBingoNumber] = useState();
  const [picked, setPicked] = useState(false);

  const randomNumGenerator = (minNum, maxNum, tileId) => {
    let randNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    return randNum;
  };

  return (
    <GridItem
      onClick={() => setBingoNumber(randomNumGenerator(1, 100))}
      w="100%"
      h="50"
      fontWeight="bold"
      color="whiteAlpha.900"
      bg="red.500"
      border="white"
    >
      {bingoNumber}
    </GridItem>
  );
};

export default BingoCell;
