# Math

### 수학에 관련된 기능을 가진 빌트인 객체

\- 정적 프로터피와 메서드만 제공

\- Number 타입만 지원 (BigInt 사용 불가)

## 정적 property

#### Math.E

오일러의 상수이며 자연로그의 밑. 약 2.718.

#### Math.LN2

2의 자연로그. 약 0.693.

#### Math.LN10

10의 자연로그. 약 2.303.

#### Math.LOG2E

밑이 2인 로그 E. 약 1.443.

#### Math.LOG10E

밑이 10인 로그 E. 약 0.434.

#### Math.PI

원의 둘레와 지름의 비율. 약 3.14159.

#### Math.SQRT1_2

½의 제곱근. 약 0.707.

#### Math.SQRT2

2의 제곱근. 약 1.414.

## 정적 Method

#### Math.abs(x)

숫자의 절댓값을 반환

#### Math.sqrt(x)

숫자의 제곱근을 반환

#### Math.cbrt(x)

숫자의 세제곱근을 반환합니다.

#### Math.ceil(x)

인수보다 크거나 같은 수 중에서 가장 작은 정수를 반환 `(버림)`

#### Math.floor(x)

인수보다 작거나 같은 수 중에서 가장 큰 정수를 반환 `(올림)`

#### Math.round(x)

숫자에서 가장 가까운 정수를 반환 `(반올림)`

#### Math.max([x[, y[, …]]])

0개 이상의 인수에서 제일 큰 수를 반환합니다.

#### Math.min([x[, y[, …]]])

0개 이상의 인수에서 제일 작은 수를 반환합니다.

#### Math.pow(x, y)

x의 y 제곱을 반환합니다.

#### Math.random()

0과 1 사이의 난수를 반환합니다.

```

Math.exp(x)
E^x 를 반환합니다. x는 인수이며 E 는 오일러 상수(2.718...) 또는 자연로그의 밑입니다.

Math.expm1(x) (en-US)
exp(x)에서 1을 뺀 값을 반환합니다.

Math.fround(x)
인수의 가장 가까운 단일 정밀도 표현을 반환합니다.

Math.hypot([x[, y[, …]]]) (en-US)
인수의 제곱합의 제곱근을 반환합니다.

Math.imul(x, y)
두 32비트 정수의 곱을 반환합니다.

Math.log(x)
숫자의 자연로그(e를 밑으로 하는 로그, 즉 ln) 값을 반환합니다.

Math.log1p(x) (en-US)
숫자 x에 대해 1 + x의 자연로그(e를 밑으로 하는 로그, ln) 값을 반환합니다.

Math.log10(x) (en-US)
숫자의 밑이 10인 로그를 반환합니다.

Math.log2(x)
숫자의 밑이 2인 로그를 반환합니다.

Math.sign(x)
x의 양의 수인지 음의 수인지 나타내는 부호를 반환합니다.

Math.sin(x)
숫자의 사인 값을 반환합니다.

Math.sinh(x)
숫자의 쌍곡사인 값을 반환합니다.

Math.tan(x)
숫자의 탄젠트 값을 반환합니다.

Math.tanh(x)
숫자의 쌍곡탄젠트 값을 반환합니다.

Math.toSource() Non-standard
문자열 "Math"를 반환합니다.

Math.trunc(x)
숫자의 정수 부분을 반환합니다.

Math.cos(x) (en-US)
숫자의 코사인 값을 반환합니다.

Math.cosh(x) (en-US)
숫자의 쌍곡코사인 값을 반환합니다.

Math.acos(x)
숫자의 아크코사인 값을 반환합니다.

Math.acosh(x) (en-US)
숫자의 쌍곡아크코사인 값을 반환합니다.

Math.asin(x) (en-US)
숫자의 아크사인 값을 반환합니다.

Math.asinh(x) (en-US)
숫자의 쌍곡아크사인 값을 반환합니다.

Math.atan(x) (en-US)
숫자의 아크탄젠트 값을 반환합니다.

Math.atanh(x) (en-US)
숫자의 쌍곡아크탄젠트 값을 반환합니다.

Math.atan2(y, x) (en-US)
인수 몫의 아크탄젠트 값을 반환합니다.

Math.clz32(x) (en-US)
주어진 32비트 정수의 선행 0 개수를 반환합니다.

```
