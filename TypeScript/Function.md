# Function

## Call Signature

Call(=Function) Signature
: function type, arguments type, return type

```
type Add = (a:number, b:number) => number;

const add:Add = (a, b) => a+b;
```

함수의 매개변수와 반환 값의 타입을 모두 type으로 미리 선언

=> React에서 함수로 props를 보낼 때, 어떻게 작동할지 미리 설계 가능

## Overloading

동일한 이름에 매개 변수와 매개 변수 타입 또는 리턴 타입이 다른 여러 버전의 함수를 만드는 것

Function(=Method) Overloading은 직접 작성하기보다 외부 라이브러리에 자주 보이는 형태로, 하나의 함수가 복수의 Call Signature를 가질 때 발생
