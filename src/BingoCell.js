import React, { useState } from 'react';
import { Grid, GridItem, Center } from '@chakra-ui/react';

const BingoCell = ({ isPicked }) => {
  const [bingoNumber, setBingoNumber] = useState();

  const randomNumGenerator = (minNum, maxNum, tileId) => {
    let randNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    return randNum;
  };

  // needs to check if Clicked to prevent num changing more than once ??

  const handleClick = () => {
    if (!isPicked) {
      setBingoNumber(randomNumGenerator(1, 100));
    }
    console.log('isPicked ', isPicked);
  };

  return (
    <GridItem
      onClick={() => handleClick()}
      w="100%"
      h="50"
      fontWeight="bold"
      color="whiteAlpha.900"
      border="white"
      backgroundColor="whiteAlpha.400"
    >
      <Center backgroundColor="white" color="red">
        {bingoNumber}
      </Center>
    </GridItem>
  );
};

export default BingoCell;
