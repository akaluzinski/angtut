let numTimesClicked = 0;

function win() {
  alert('You win!');
  reset();
}

function reset() {
  numTimesClicked = 0;
}

export default function click() {
  numTimesClicked++;
  if (numTimesClicked === 3)
    win();
};



