/* function declaration */
const sum = (a: number, b: number) => a + b;
setInterval(() => console.log(sum(2, 3)), 1000);

/* Interfaces */
interface LabelValue {
  label: string;
  size: number;
}

interface SquareConfig {
  color? : string;
  width? : number;
}

interface Square extends SquareConfig, LabelValue {
  sideLength: number;
}

let square = <Square>{};
square.color = 'yellow';
square.width = 200;
square.sideLength = 25000;
square.size = 25;
square.label = 'ok';

setInterval(() => console.log(square, '>>>>>>>>>>>>>>>>>'), 1000);


/* ReadonlyArray type */
let ade: number[] = [1,2,3,4];
let ade1: ReadonlyArray<number> = [2,3,4,5,8];
ade = ade1 as number[];

function printLabel(labeledObj: LabelValue) {
  console.log(`The ${labeledObj.label} is ${labeledObj.size}`);
}

function createSquare(config: SquareConfig): { color: string, area: number} {
  let newSquare = { color: 'White', area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let myObj = { size: 10, label: "Size 10 Object" };
console.log(ade);
setInterval(() => console.log(createSquare({color: 'red'})), 1000);
setInterval(() => printLabel(myObj), 5000);
setInterval(() => console.log(ade1), 6000);
