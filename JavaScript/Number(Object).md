# Number

## 생성자 함수

\* 인자가 없을 시 0

```
const numObj1 = new Number();
const numObj2 = new Number(123);
const numObj3 = new Number(-123.45);

console.log(numObj1, numObj2, numObj3);
// Number {0} Number {123} Number {-123.45}
console.log(
  numObj1.valueOf(),
  numObj2.valueOf(),
  numObj3.valueOf()
);
// 0 123 -123.45
```

```
// 특정 숫자값으로 인식되는 것
console.log(
  new Number('-123.4567'),
  new Number('Infinity'),
  new Number(true),
  new Number(false)
);
// Number {-123.4567} Number {Infinity} Number {1} Number {0}


// NaN
console.log(
  new Number('1/2'),
  new Number('123ABC'),
  new Number('ABC'),
  new Number('{a: 1, b: 2}'),
  new Number([1, 2, 3])
);
```

#### new 없이 사용하면 생성자로서가 아닌 Number 함수는 주어진 인자를 숫자로 변환하여 반환

```
const num1 = Number('123');      // number 123
const num2 = Number('-123.45');  // number -123.45
const num3 = Number(true);       // number 1
const num4 = Number(false);      // number 0
const num5 = Number(null);       // number 0
```

## Static Property

#### Number.EPSILON

두 개의 표현 가능한 숫자 사이의 최소 간격

#### Number.prototype

Number 객체에 속성을 추가

#### Number.NaN

"Not a Number"(숫자가 아님)을 나타내는 특별한 값

##

#### Number.MAX_SAFE_INTEGER

JavaScript에서 안전한 최대 정수 (2^53 - 1)

#### Number.MIN_SAFE_INTEGER

JavaScript에서 안전한 최소 정수 (-(2^53 - 1))

##

#### Number.MAX_VALUE

표현 가능한 가장 큰 양수

#### Number.MIN_VALUE

표현 가능한 가장 작은 양수 (즉, 0보다 크지만 0에 가장 가까운 양수)

##

#### Number.NEGATIVE_INFINITY

음의 무한대를 나타내는 특수한 값 오버플로우 시 반환

#### Number.POSITIVE_INFINITY

양의 무한대를 나타내는 특수한 값 오버플로우 시 반환

## Static Method

```
Number.isNaN()

주어진 값이 NaN인지 확인

Number.isFinite()

주어진 값이 유한수 인지 확인
```

```
Number.isInteger()

주어진 값이 정수인지 확인

Number.isSafeInteger()

주어진 값이 안전한 정수(-(2^53 - 1)과 2^53 - 1 사이의 정수)인지 확인
```

```
Number.parseFloat(string)
전역 객체 parseFloat()와 동일한 값

Number.parseInt(string, [radix])
전역 객체 parseInt()와 동일한 값
```

## Instance Method

#### toExponential

지수 표기법으로 나타내는 `문자열`을 반환

```
// 인자로 자릿수 제한
console.log(
  (123.456789).toExponential(2),
  (123.456789).toExponential(4),
  (123.456789).toExponential(6)
);
// 1.23e+2 1.2346e+2 1.234568e+2
```

#### toFixed

최대 인자값으로 주어진 정수(0~20)만큼 소수점 이하를 `반올림`하여 `문자열`로 반환

```
console.log(
  // 인자가 없으면 0을 받은 것과 같음
  (111.234567).toFixed(),      // 111
  (111.234567).toFixed(0),     // 111
  (111.234567).toFixed(1),     // 111.2
  (111.234567).toFixed(2),     // 111.23
  // 반올림
  (111.234567).toFixed(3),     // 111.235
  (111.234567).toFixed(4)      // 111.2346
);
```

#### toPrecision

반올림과 지수 표기법을 사용하여 `문자열` 반환

```
// 인자가 정수부 자릿수보다 적으면 지수로
console.log(
  (1234.56789).toPrecision(1),     // 1e+3
  (1234.56789).toPrecision(2),     // 1.2e+3
  (1234.56789).toPrecision(3)      // 1.23e+3
);

// 반올림
console.log(
  (1234.56789).toPrecision(4),     // 1235
  (1234.56789).toPrecision(6),     // 1234.57
  (1234.56789).toPrecision(8)      // 1234.5679
);
```

#### toString

\- `문자열` 값 반환

\- 인자 2~36 가 주어지면 해당 수의 진수로 표현

```
console.log(
  (11).toString(),       // 11
  (11).toString(2),      // 1011
  (11).toString(8),      // 13
  (11).toString(16)      // b
);
```
