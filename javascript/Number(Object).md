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
const num1 = Number('123');     // number 123
const num2 = Number('-123.45'); // number -123.45
const num3 = Number(true);      // number 1
const num4 = Number(false);     // number 0
const num5 = Number(null);      // number 0
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
