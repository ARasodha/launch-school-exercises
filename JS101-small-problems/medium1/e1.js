// E1 Rotation (Part 1):
// My Solution:
function rotateArray(array) {

  if (!Array.isArray(array)) {
    return undefined;
  }
  if (array.length === 0) {
    return [];
  }

  return array.slice(1).concat(array[0]);
}
console.log(rotateArray([7, 3, 5, 2, 9, 1]));
console.log(rotateArray(['a', 'b', 'c']));
console.log(rotateArray(['a']));
console.log(rotateArray([1, 'a', 3, 'c']));
console.log(rotateArray([{
    a: 2
  },
  [1, 2], 3
]));
console.log(rotateArray([]));
console.log(rotateArray());
console.log(rotateArray(1));
let array = [1, 2, 3, 4];
console.log(rotateArray(array));
console.log(array);

// rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
// rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
// rotateArray(['a']);                    // ["a"]
// rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
// rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
// rotateArray([]);                       // []
//
// // return `undefined` if the argument is not an array
// rotateArray();                         // undefined
// rotateArray(1);                        // undefined
//
//
// // the input array is not mutated
// let array = [1, 2, 3, 4];
// rotateArray(array);                    // [2, 3, 4, 1]
// array;                                 // [1, 2, 3, 4]
