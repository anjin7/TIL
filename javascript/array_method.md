# Array Method

## 특정 값을 반환하는 기본 Method

#### isArray

배열인지 여부(true or false)를 반환

```
console.log(
  Array.isArray([1, 2, 3]),
  Array.isArray('123'),
  Array.isArray('123'.split(''))
);
// true false true
```

\* instanceof Array

```
const arrays = [
  [], [1, 2, 3], new Array(),
  // ⚠️ instanceof에서는 결과가 다름
  Array.prototype // 배열임
];

const notArrays = [
  1, 'abc', true, null, {}
];

for (const item of arrays) {
  console.log(
    item,
    Array.isArray(item),
    item instanceof Array
  );
}
```

#### at

주어진 인자를 인덱스로 값을 반환 (음수:뒤에서 접근)

```
const arr = [ a, b, c, d]

console.log(
  arr.at(1), arr.at(2), arr.at(-1), arr.at(-2)
);
// a b d c
```

#### includes

인자로 주어진 요소 유무 확인 (true or false)

```
const obj1 = { x: 1, y: 2 };
const obj2 = { x: 1, y: 2 };

const arr = [
  obj1,
  { x: 3, y: 4 }
];

console.log(
  arr.includes(obj1),
  arr.includes(obj2),
  arr.includes({ x: 1, y: 2 }),
  arr.includes({ x: 3, y: 4 })
);
// true false false false
```

#### indexOf, lastIndexOf

앞/뒤에서 첫 번째 값의 인덱스 반환 (없을 시 -1 반환)

```
const arr = [1, 2, 3, 2, 1];

console.log(
  arr.indexOf(2),
  arr.lastIndexOf(2),
  arr.indexOf(4)
);
// 1 3 -1
```

#### join

인자로 주어진 값으로 구분하여 요소들을 문자열로 연결하여 반환

```
const arr1 = ['a', 'b', 'c', 'd', 'e'];

console.log(
  arr1.join()
);
// 인자가 없다면 쉼표`,`
// a,b,c,d,e

console.log(
  arr1.join('')
);
// abcde
```

```
const arr2 = [
  1, true, null, undefined, '가나다', { x: 0 }, [1, 2, 3]
];
console.log(
  arr2.join(':')
);
// 1:true:::가나다:[object Object]:1,2,3
```

## 배열을 변경하는 기본 Method

#### push

배열 뒤에 값을 추가

```
const arr = [1, 2, 3];
const x = arr.push(4);

console.log(x, arr);
// 4 [1, 2, 3, 4]
```

#### unshift

배열 앞에 값을 추가

```
const arr = [5, 6, 7];
const x = arr.unshift(4);

console.log(x, arr);
// 4 [4, 5, 6, 7]
```

#### pop

배열 뒤에서 값을 제거하여 반환

```
const arr = [1, 2, 3, 4, 5];
const x = arr.pop();

console.log(x, arr);
// 5 [1, 2, 3, 4]
```

#### shift

배열 앞에서 값을 제거하여 반환

```
const arr = [1, 2, 3, 4, 5];
const x = arr.shift();

console.log(x, arr);
// 1 [2, 3, 4, 5]
```

## 고차함수 Method

## Spread & Destructuring
