import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

// Bingo component
const Bingo = () => {
  // reset bingo
  const reset = () => {
    return <button style={{ backgroundColor: 'red' }}> reset</button>;
  };

  const randomNumGenerator = tileId => {
    console.log('func called', tileId);
  };
  // build UI for bingo grid
  const generateTiles = () => {
    let tiles = [];

    for (let tile = 0; tile < 25; tile++) {
      tiles.push(
        <GridItem
          onClick={() => {
            randomNumGenerator(tile);
          }}
          w="100%"
          h="10"
          bg="blue.500"
          key={tile}
        >
          {tile === 12 ? 'FREE' : tile}
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
      hello from bingo {reset()}
      {generateTiles()}
    </div>
  );
};

export default Bingo;
