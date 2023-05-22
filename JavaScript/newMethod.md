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
const x = [1,2,3];
const y = [...x];
y.reverse();
y.push();
console.log(x); // [3,2,1,0];
console.log(y); // [3,2,1,0];
->
const arr = [1,2,3];
const reversed = arr.toReversed();
reversed.push(0)
console.log(arr) // [1,2,3];
console.log(reversed) // [3,2,1,0]

```

### toSorted

### toSpliced

### with

### findLast & findLastIndex
