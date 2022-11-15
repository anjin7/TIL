# TypeScript?

## Type

### Basic type

number string boolean
number[] string[] boolean[]
undefined null
any (= escape typescript )

### Opitional type

```
age?:number
```

=> number or undefined

- Alias

  ```
  const Player = {
    name: string
    age?: number
  }
  const playerMaker =(name:string): Player => ({name})
  ```

  type을 할당

### readonly type

```
const age: readonly number[] = [1, 2];
```

=> 추가 삭제 변경 모두 불가능
수정 할 수 없도록 만드는 속성
\*js에는 없는 기능

### TypeScript Only

- unknown : type을 미리 알지 못 할때 사용

  ```
  let a:unknown;
  if(typeof a === "number"){
    let b = a + 1;
  }
  ```

- void : return하는 값이 없는 function

  ```
  function hello(){
    console.log('x')
  }
  ```

- never : 작동하지 않는 function

  ```
  function hello():never{
  }
  ```
