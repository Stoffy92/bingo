import React, { useState } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import BingoCell from './BingoCell';

// Bingo component
const Bingo = () => {
  // reset bingo
  // reset bingo needs to reset tiles

  // state for each tile ??

  // const [bingoNumber, setBingoNumber] = useState();
  // const [picked, setPicked] = useState(false);

  // const reset = () => {
  //   return setBingoNumber();
  // };

  // const randomNumGenerator = (minNum, maxNum, tileId) => {
  //   let randNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  //   return randNum;
  // };

  // const handleClick = tileId => {
  //   let tile = {
  //     tileId: tileId,
  //     picked: true,
  //     number: setBingoNumber(randomNumGenerator(1, 100, tileId)),
  //   };
  //   console.log('handleClick', tile);
  //   return tile;
  // };

  // build UI for bingo grid
  const generateTiles = () => {
    let tiles = [];

    for (let tile = 0; tile < 25; tile++) {
      tiles.push(
        <GridItem
          // onClick={() => handleClick(tile)}
          w="100%"
          h="50"
          fontWeight="bold"
          color="whiteAlpha.900"
          bg="red.500"
          border="white"
          key={tile}
        >
          {tile === 12 ? 'FREE' : <BingoCell />}
        </GridItem>
      );
    }

    return (
      <Grid templateColumns="repeat(5, 1fr)" className="bingo__tile_container">
        {tiles}
      </Grid>
    );
  };

  return (
    <div className="bingo__container">
      hello from bingo{' '}
      {/* <button onClick={() => reset()} style={{ backgroundColor: 'red' }}>
        reset
      </button> */}
      {generateTiles()}
    </div>
  );
};

export default Bingo;
