# 2023 Updated JS

## Mutations

기존의 배열을 변경(Mutation) = 복사하여 새 배열을 반환하지 않음

```
arr.reverse();
arr.sort();
arr.splice();
```

=> 어떤 것이 Modified Copy되는 Method인지 헷갈림

### toReversed

```
const x = [1, 2, 3];
const y = [...x];
y.reverse();
y.push();
console.log(x); // [3, 2, 1, 0]
console.log(y); // [3, 2, 1, 0]
->
const arr = [1, 2, 3];
const reversed = arr.toReversed();
reversed.push(0)
console.log(arr); // [1, 2, 3]
console.log(reversed); // [3, 2, 1, 0]

```

### toSorted

```
const x = [1, 3, 2];
const y = x.sort();
console.log(x); // [1, 2, 3]
console.log(y); // [1, 2, 3]
->
const arr = [1, 3, 2];
const sorted = arr.toSorted();
console.log(arr); // [1, 3, 2]
console.lod(sorted); // [1, 2, 3]
```

### toSpliced

```
const a = ["a", "b", "c", "d"];
a.splice(1,2) // ["b", "c"]
console.log(a) // ["a", "d"]
->
const arr = ["a", "b", "c", "d"];
const newArr = arr.toSpliced(1,2) // ["a", "d"]
```

### with

```
const x = ["a", "b", "c", "x"];
x[3] = "d";
console.log(x); // ["a", "b", "c", "d"]
->
const arr = ["a", "b", "c", "x"];
const withArr = arr.with(3, "d");
console.log(arr); // ["a", "b", "c", "x"];
console.log(withArr); // ["a", "b", "c", "d"];
```

## findLast & findLastIndex

### find | findLast

주어진 판별 함수를 만족하는 ( 첫번째 | 마지막 ) 요소의 값을 반환

```
const array = [5, 12, 8, 130, 44];

const found1 = array.find(element => element > 10);
console.log(found1); // 12

const found2 = array.findLast((element) => element > 45);
console.log(found2); // 130

```

### findIndex | findLastIndex

주어진 판별 함수를 만족하는 배열의 ( 첫 번째 | 마지막 ) 인덱스를 반환하고, 요소가 존재하지 않으면 -1을 반환

```
const array = [5, 12, 8, 130, 44];

const found1 = array.findIndex(element => element > 10);
console.log(found1); // 1

const found2 = array.findLastIndex((element) => element > 45);
console.log(found2); // 3

```
