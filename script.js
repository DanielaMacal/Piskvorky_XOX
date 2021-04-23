// 'use strict';

// let naTahu = 'circle';
// const hrajeHrac = document.querySelector('.hraje-hrac');

// document.querySelectorAll('.playBtn__btn').forEach((btn) => {
//   btn.addEventListener('click', () => {
//     if (naTahu === 'circle') {
//       btn.classList.add('playBtn__btn--circle');
//       hrajeHrac.src = 'img/circle.svg';
//       naTahu = 'cross';
//       button.target.disabled = true;
//     } else {
//       btn.classList.add('playBtn__btn--cross');
//       hrajeHrac.src = 'img/cross.svg';
//       naTahu = 'circle';
//       button.target.disabled = true;
//     }
//   });
// });

'use strict';

let naTahu = 'circle';
const hrajeHrac = document.querySelector('.hraje-hrac');

document.querySelectorAll('.playBtn__btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (naTahu === 'circle') {
      btn.classList.add('playBtn__btn--circle');
      hrajeHrac.src = 'img/circle.svg';
      naTahu = 'cross';
      button.target.disabled = true;
    } else {
      btn.classList.add('playBtn__btn--cross');
      hrajeHrac.src = 'img/cross.svg';
      naTahu = 'circle';
      button.target.disabled = true;
    }
  });
});
