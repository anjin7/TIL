# Array

#### 일반적으로 다른 언어 배열의 특징 (전형적)

```
- 한 배열에는 같은 자료형의 데이터만 포함 가능
- 데이터의 메모리 주소가 연속으로 나열됨
- 접근은 빠름, 중간요소의 추가나 제거는 느림
```

#### 자바스크립트 배열의 특징

```
- 배열의 형태와 동작을 흉내내는 특수 객체
- 한 배열에 다양한 자료형의 데이터가 들어갈 수 있음
- 연속나열이 아님 (엔진에 따라 요소들의 타입이 동일하면 연속 배열하기도 함)
- 접근은 상대적으로 느림 (일반 객체보다는 빠름), 중간요소의 추가나 제거는 빠름
- 특정 자료형 전용 배열도 있음 - 더 빠름
```

## Array 생성

### Literal

```
const arr1 = [];
const arr2 = [1,2,3];
```

### Function

```
const arr1 = new Array(3);
// arr1.length가 3인 빈(undefined) 배열

const arr2 = new Array(1,2,3);
// console.log(arr2);
// [1,2,3]

const arr3 = new Array('ABC');
// console.log(arr3);
// [ABC]
```

### Method

#### of

인자가 하나여도 이를 요소로 갖는 배열 생성

```
const arr1 = Array.of(3);
// console.log(arr1);
// [3]
```

#### from

배열, 유사배열객체, 이터러블을 인자로 받아 배열 반환

```
const arr1 = Array.from([1,2,3]);
const arr2 = Array.from({
  '0' : true,
  '1' : false,
  '2' : null,
});
```

\* Array.from은 얕은 복사 - 1단계 깊이만 복사

```
const arr1 = [1, 2, 3];
const arr2 = Array.from(arr1);
arr2.push(4);
arr1[0] = 0;

// console.log(arr1, arr2);
// [0,2,3] [1,2,3,4]
```

## Array Method

### 특정 값을 반환하는 기본 Method

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

인자로 주어진 요소 유무 확인

#### indexOf, lastIndexOf

앞/뒤에서 첫 번째 값의 인덱스 반환
(없을 시 -1 반환)

#### join

인자로 주어진 값으로 구분하여 요소들을 문자열로 연결하여 반환

### 배열을 변경하는 기본 Method

### 고차함수 Method

## Spread & Destructuring
