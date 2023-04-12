# Spread & Destructuring

## Spread

```
const arr1 = ['B', 'C'];
const arr2 = ['D'];
const arr3 = ['E'];

const arr4 = ['A', ...arr1, ...arr2, ...arr3, 'F']

console.log(arr4);       // ['A', 'B', 'C', 'D', 'E', 'F']
```

### 활용

\- 배열을 다수의 인자들로 펼침

\- concat보다 가독성있는 배열 결합

\- 배열의 `얕은 복사`

\- push, unshift 대신 사용

\- 원본배열을 유지한 채 일정부분만 연결하여 복사

## Destructuring

### 문법

```
const arr = [1, 2, 3];
const [x, y, z] = arr;

console.log(x, y, z);              // 1 2 3
```

```
const arr = [1, 2, 3];

const [a, b, c, d = 4, e = 5] = arr;
console.log(a, b, c, d, e);         // 1 2 3 4 5
```

### 활용

```
const players = [
  { name: '순이', score: 91 },
  { name: '정환', score: 65 },
  { name: '윤수', score: 72 },
  { name: '철웅', score: 88 },
  { name: '지우', score: 98 },
  { name: '세아', score: 40 }
];

// 배열 중 첫 3개만 가져옴
function logTop3 ([first, second, third]) {
  console.log(
    `1등은 ${first}!! 2등과 3등은 ${second}, ${third}입니다.`
  );
}

logTop3(
  [...players]    // 원본의 얕은 복사본을 정렬
  .sort((a, b) => b.score - a.score)
  .map(({name}) => name)
);
// 1등은 지우!! 2등과 3등은 순이, 철웅입니다.

// 원본의 순서 변경하지 않음
console.log(players);
```
