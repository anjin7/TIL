# Data Type

## Primitive Data Types

**담백하게 값 하나만 담는 단순 자료형**

`typeof` 연산자

### Boolean

\- true or false : 상반된 둘 중 하나의 값을 담을 수 있음

\- 직접 할당되기보다는 반환값으로 프로그램 곳곳에서 활용됨

```
const a = 1 > 2;
const b = 1 < 2;

console.log(a, typeof a);     // false 'boolean'
console.log(b, typeof b);     // true 'boolean'
```

### Number

\- 자바스크립트에는 정수와 실수의 구분이 없음 (정수도 실수로 처리)

\- 정수는 2^53 - 1까지 안정적으로 표현 가능 (더 큰 정수는 BigInt로)

### String

\- "글자"

\- 큰따옴표, 작은따옴표, 또는 백틱으로 둘러싸인 텍스트 데이터

\- 유니코드 문자 - 전 세계의 모든 문자 표현 가능

\- `typeof`의 반환값은 문자열

### Undefined

\- 값이 부여되지 않은 상태라는 의미

\- **undefined도 값임** (많은 다른 언어들과 다른 점)

\- 아무 것도 반환하지 않는 구문 - undefined 반환

```
let x;
console.log(typeof x);
```

### Null

\- 의도적인 빈 값을 의미

\- **null 역시 값임** ("비어있다"란 의미의 값)

\- object(객체) 등이 들어있거나 반환되어야 하지만 없을 때 주로 사용

객체 생성이 실패한 경우 등에 대신 반환

\* 주의! typeof가 object를 반환 초기 오류 (객체는 원시타입이 아님)
