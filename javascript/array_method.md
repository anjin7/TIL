# Array Method

## 특정 값을 반환하는 기본 Method

- ### isArray

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
  // instanceof에서는 결과가 다름
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

- ### at

주어진 인자를 인덱스로 값을 반환 (음수:뒤에서 접근)

```
const arr = [ a, b, c, d]

console.log(
  arr.at(1), arr.at(2), arr.at(-1), arr.at(-2)
);
// a b d c
```

- ### includes

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

- ### indexOf, lastIndexOf

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

- ### join

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

- ### push

배열 뒤에 값을 추가

```
const arr = [1, 2, 3];
const x = arr.push(4);

console.log(x, arr);
// 4 [1, 2, 3, 4]
```

- ### unshift

배열 앞에 값을 추가

```
const arr = [5, 6, 7];
const x = arr.unshift(4);

console.log(x, arr);
// 4 [4, 5, 6, 7]
```

- ### pop

배열 뒤에서 값을 제거하여 반환

```
const arr = [1, 2, 3, 4, 5];
const x = arr.pop();

console.log(x, arr);
// 5 [1, 2, 3, 4]
```

- ### shift

배열 앞에서 값을 제거하여 반환

```
const arr = [1, 2, 3, 4, 5];
const x = arr.shift();

console.log(x, arr);
// 1 [2, 3, 4, 5]
```

- ### splice

원하는 위치에 요소(들)을 추가 및 삭제(2개 이상의 인자를 받음)

```
const arr = [1, 2, 3, 4, 5, 6, 7];

// 2번 인덱스부터 2개 요소 제거
arr.splice(2, 2);
console.log(arr);
// [4, 5]

// 1번 인덱스부터 3개 요소 제거 후 '가', '나', '다' 추가
arr.splice(1, 3, '가', '나', '다');
console.log(arr);
// [4, '가', '나', '다]
```

- ### fill

배열을 특정 값으로 채움

```
// 중간의 빈 값도 채움
const arr1 = [1, 2, , , 4, 5];
arr1.fill(7);

console.log(arr1);
// [7, 7, 7, 7, 7, 7]
```

- ### reverse

배열의 순서를 뒤집음

```
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
// [7, 6, 5, 4, 3, 2, 1]
```

## 새 배열을 반환하는 Method

\* 원본 배열을 수정하지 않음

\* 얕은 복사

- ### concat

배열에 다른 배열이나 값을 이어붙인 결과를 반환

```
const arr1 = [1, 2, 3];
const arr2 = ['a', 'b', 'c'];
const arr3 = arr1.concat(arr2);

console.log(arr3);
// [1, 2, 3, 'a', 'b', 'c']
// 원본 배열은 변화 없음
```

- ### slice

인자로 주어진 범주의 값을 잘라 반환(1~2개 인자를 받음)

```
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arr2 = arr1.slice(3);
const arr3 = arr1.slice(3, 7);

console.log(arr2, arr3);
// [4, 5, 6, 7, 8, 9] [4, 5, 6, 7]
// 원본 배열은 변화 없음
```

- ### flat

인자로 주어진 깊이만큼 배열을 펼쳐 반환

```
const orgArr = [
  1, 2,
  [3, 4],
  [5, [6, [7, 8]]]
];

// 인자가 없으면 1을 넣은 것과 같음
const arr0 = orgArr.flat();
const arr1 = orgArr.flat(1);
const arr2 = orgArr.flat(2);
const arr3 = orgArr.flat(3);

console.log(arr0); // [1, 2, 3, 4, 5, [6, [7, 8]]]
console.log(arr1); // [1, 2, 3, 4, 5, [6, [7, 8]]]
console.log(arr2); // [1, 2, 3, 4, 5, 6, [7, 8]]
console.log(arr3); // [1, 2, 3, 4, 5, 6, 7, 8]
```

## 고차함수 Method
