# Spread & Destructuring

## Spread

```
const arr1 = ['B', 'C'];
const arr2 = ['D'];
const arr3 = ['E'];

const arr4 = ['A', ...arr1, ...arr2, ...arr3, 'F']

console.log(arr4);       // ['A', 'B', 'C', 'D', 'E', 'F']
```
