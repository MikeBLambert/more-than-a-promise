// WHAT IS A GENERATOR?
// function you can exit and re-enter;
// iterator/iterable protocol

// WHAT DOES IT RETURN?

// WHAT IS YIELD?

// PASSING ARGUMENTS

// WHAT IS YIELD*?

function* myGenerator(num) {
  yield num;
  const secondYield = yield num * 2;
  yield num * secondYield;
}

function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
}

function* generatorGenerator() {
  yield* myGenerator(5);
  yield* helloWorldGenerator();
}

function* arrayGenerator(arr) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i];
  }
}

function* concatinatorator(firstArray, secondArry) {
  yield* arrayGenerator(firstArray);
  yield* arrayGenerator(secondArry);
}

const fruit = ['apples', 'bananas', 'peaches'];
const cars = ['big car', 'little car'];

const concat = concatinatorator(fruit, cars);
