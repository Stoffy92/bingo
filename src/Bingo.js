import React, { useState, useEffect } from 'react';
import { Grid, GridItem, Center } from '@chakra-ui/react';
import BingoCell from './BingoCell';

// Bingo component
const Bingo = () => {
  // reset bingo
  // reset bingo needs to reset tiles

  // state for each tile ??

  useEffect(() => {
    console.log('func ran');
    generateTiles();
  }, []);

  const reset = () => {
    generateTiles();
  };

  // build UI for bingo grid
  const generateTiles = () => {
    console.log('gen tiles ran');
    let tiles = [];

    for (let tile = 0; tile < 25; tile++) {
      tiles.push(
        <GridItem
          w="100%"
          h="100%"
          fontWeight="bold"
          color="whiteAlpha.900"
          bg="red.500"
          border="white"
          key={tile}
        >
          {tile === 12 ? (
            <GridItem>
              <Center color="white">FREE</Center>
            </GridItem>
          ) : (
            <BingoCell />
          )}
        </GridItem>
      );
    }

    return (
      <Grid templateColumns="repeat(5, 1fr)" className="bingo__tile_container">
        {tiles}
      </Grid>
    );
  };

  const bingoLetters = () => {
    let letters = ['B', 'I', 'N', 'G', 'O'];
    <Grid templateColumns="repeat(5, 1fr)" className="bingo__tile_container">
      {letters.map((id, letter) => {
        return (
          <GridItem
            w="100%"
            h="50"
            fontWeight="bold"
            color="whiteAlpha.900"
            bg="blue.500"
            border="white"
            key={id}
          >
            {letter}
          </GridItem>
        );
      })}
    </Grid>;
  };

  return (
    <div className="bingo__container">
      hello from bingo{' '}
      <button onClick={() => reset()} style={{ backgroundColor: 'red' }}>
        reset
      </button>
      {bingoLetters()}
      {generateTiles()}
    </div>
  );
};

export default Bingo;
