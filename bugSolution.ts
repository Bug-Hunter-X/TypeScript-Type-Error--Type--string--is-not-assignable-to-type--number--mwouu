function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: any, b: any): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both inputs must be numbers.');
  }
  return a + b;
}

let result1 = addSafe(10, 20); // Works correctly
let result2 = addSafe("hello", 20); // Throws an error

//Alternative approach with default values
function addSafeDefault(a: any, b: any): number {
  const numA = typeof a === 'number' ? a : 0;
  const numB = typeof b === 'number' ? b : 0;
  return numA + numB;
}

let result3 = addSafeDefault(10, 20); // Works correctly
let result4 = addSafeDefault("hello", 20); // Returns 20