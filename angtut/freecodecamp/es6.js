//Freeze

const freezeObj = () => {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.error(ex);
  }
  return MATH_CONSTANTS.PI;
};
const PI = freezeObj();

const increment = (number, value = 1) => number + value;
const sum = (...args) => args.reduce((a, b) => a + b, 0);

class Thermostat {
  set temperature(temp) {
    this.temp = temp;
  }

  get temperature() {
    return this.temp;
  }

  constructor(temp) {
    this.temp = 5/9 * (temp - 32);
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const { today: { low: lowToday, high: highToday} } = LOCAL_FORECAST;

const removeFirstTwo = list => {
  const [,,...arr] = list;
  return arr;
};
const arr = removeFirstTwo([1,2,3,4,5,6,7,8,9,10]);

const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = true;
  if(responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
}).then(result => console.log(result))
.error(error => console.log(error));
