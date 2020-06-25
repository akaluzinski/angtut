export const bigIntNumeric  = BigInt (29030733419822848249);

console.log(bigIntNumeric);

export const doSomeCalc = async (num1, num2) => {
  if(num1 && num2){
    const math = await import('./math.js');
    console.log(math.add(num1, num2))
  }
}

export const obj = { a: { b: 10} }
