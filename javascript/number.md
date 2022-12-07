# Number

## 자료형

### 1. interger, real, negative

### 2. infinity

```
// positive infinity
let x = 1 / 0;

// negative infinity
let y = -1 / 0;

let z = Infinity;
```

### 3. NaN (Not a Number)

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

## 연산자

### 산술 연산자

`+, -, *, /, %, **`

1. 이항

```
+ : 더하기
- : 빼기
* : 곱하기
/ : 나누기
% : 나머지
** : 제곱
```

2. 단항

```
a++ : a +1
++a : +1 a
a-- : a -1
--a : -1 a
+a : 값 그대로
-a : 양음 반전
```

3. 할당

```
a += b : a = a + b
a -= b : a = a - b
a *= b : a = a * b
a /= b : a = a / b
a %= b : a = a % b
a **= b : a = a ** b
```
