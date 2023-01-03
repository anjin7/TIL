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
