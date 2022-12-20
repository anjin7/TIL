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

### new 없이 사용하면 생성자로서가 아닌 Number 함수는 주어진 인자를 숫자로 변환하여 반환

```
const num1 = Number('123');     // number 123
const num2 = Number('-123.45'); // number -123.45
const num3 = Number(true);      // number 1
const num4 = Number(false);     // number 0
const num5 = Number(null);      // number 0
```
