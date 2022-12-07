# Number

## 자료형

1. interger, real, negative

2. infinity

```
// positive infinity
let x = 1 / 0;

// negative infinity
let y = -1 / 0;

let z = Infinity;
```

3. NaN (Not a Number)

`isNaN` : 숫자가 아니면 true
`Number.isNaN` : 숫자 자료형인데 숫자가 아니면 true

\* isNaN은 숫자로 형변환 후 판별 => 정확하지 않음

```
isNaN(undefined); //true
isNaN({}); //true

isNaN(true); //false
isNaN(null); //false
isNaN(""); //false
isNaN(" "); //false

isNaN("123abc"); // true
// parseInt("123abc") = 123
// Number("123abc") = NaN
```
