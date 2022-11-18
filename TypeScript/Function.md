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

\*js으로 compile되지 않음
\*function을 구현하는 것은 아님

## Overloading

동일한 이름의 매개 변수와 매개 변수 타입 또는 리턴 타입이 다른 여러 버전의 함수를 만드는 것

Function(=Method) Overloading은 직접 작성하기보다 외부 라이브러리에 자주 보이는 형태로, 하나의 함수가 복수의 Call Signature를 가질 때 발생

## Polymorphimsm

arguments return값에 대하여 type에 따라 그에 상응하는 type를 가짐

- generics와 any의 차이
  => type에 대한 정보를 잃지 않으므로 전달할 수 있다는 점

### Generics

재사용 가능한 컴포넌트를 만들기 위해 사용하는 기법
단일 타입이 아닌 다양한 타입에서 작동할 수 있는 컴포넌트를 생성

```
type SuperPrint = <T>(a:T[]) => T
const superPrint: SuperPrint = (a) => a[0]

const a = superPrint([1,2,3,4]) // a:number[] // a:Array<number>
const b = superPrint([true, false, true]) // b:boolean[] // b:Array<boolean>
const c = superPrint(["a", "b", "c"]) // c:string[] // c:Array<string>
```

```
type A = Array<number>

let a:A =[1,2,3,4]
```

```
type Prepend = <T>(items: T[], item: T) => T[];

const prepend: Prepend = (items, item) =>  [item, ...items]
```
