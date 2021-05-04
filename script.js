'use strict';

let naTahu = 'circle';
const hrajeHrac = document.querySelector('.hraje-hrac');

document.querySelectorAll('.playBtn__btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (naTahu === 'circle') {
      btn.classList.add('playBtn__btn--circle');
      hrajeHrac.src = 'img/cross.svg';
      naTahu = 'cross';
    } else {
      btn.classList.add('playBtn__btn--cross');
      hrajeHrac.src = 'img/circle.svg';
      naTahu = 'circle';
    }
    if (isWinningMove(btn)) {
      setTimeout(() => {
        if (naTahu === 'cross') {
          confirm('Kolečko vyhrává! Spustit novou hru?');
          location.reload();
        } else {
          confirm('Křížek vyhrává! Spustit novou hru?');
          location.reload();
        }
      });
    }
  });
});

const getSymbol = (field) => {
  // Název třídy přizpůsob tvému kódu.
  if (field.classList.contains('playBtn__btn--cross')) {
    return 'circle';
  } else if (field.classList.contains('playBtn__btn--circle')) {
    return 'cross';
  }
};

const boardSize = 10; // 10x10
const fields = document.querySelectorAll('.playBtn__btn'); // Selektor pozměň tak, aby odpovídal tvému kódu.

const getField = (row, column) => fields[row * boardSize + column];

const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < fields.length && field !== fields[fieldIndex]) {
    fieldIndex++;
  }

  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};

const symbolsToWin = 5;
const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;
  let y;

  let inRow = 1; // Jednička pro právě vybrané políčko
  // Koukni doleva
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  // Koukni doprava
  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;
  // Koukni nahoru
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  // Koukni dolu
  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }

  let inDigiDown = 1; // Jednička pro právě vybrané políčko
  // Koukni zekšá nahoru doleva
  i = origin.column;
  y = origin.row;
  while (i > 0 && y > 0 && symbol === getSymbol(getField(y - 1, i - 1))) {
    inDigiDown++;

    i--;
    y--;
  }

  // Koukni zekšá dolů doprava
  i = origin.column;
  y = origin.row;
  while (
    i < boardSize - 1 &&
    y < boardSize - 1 &&
    symbol === getSymbol(getField(y + 1, i + 1))
  ) {
    inDigiDown++;
    i++;
    y++;
  }

  if (inDigiDown >= symbolsToWin) {
    return true;
  }

  let inDigiUp = 1; // Jednička pro právě vybrané políčko
  // Koukni zekšá dolů doleva
  i = origin.column;
  y = origin.row;
  while (
    i > 0 &&
    y < boardSize - 1 &&
    symbol === getSymbol(getField(y + 1, i - 1))
  ) {
    inDigiUp++;

    i--;
    y++;
  }

  // Koukni zekšá nahoru doprava
  i = origin.column;
  y = origin.row;
  while (
    i < boardSize - 1 &&
    y < 0 &&
    symbol === getSymbol(getField(y + 1, i - 1))
  ) {
    inDigiUp++;
    i++;
    y--;
  }

  if (inDigiUp >= symbolsToWin) {
    return true;
  }

  return false;
};
