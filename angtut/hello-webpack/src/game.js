import {bigIntNumeric, doSomeCalc, obj} from './es2020_demo'

let numTimesClicked = 0;

function isXMLHttpRequestEnabled(){
  return typeof globalThis.XMLHttpRequest === 'function';
}

console.log(isXMLHttpRequestEnabled());

console.log(doSomeCalc(6,7));
// console.log(obj.a?.b);

function win() {
  alert(bigIntNumeric);
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
