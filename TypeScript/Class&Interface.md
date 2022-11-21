# Classes & Interfaces

## Abstract Class

abstract class는 다른 class가 상속받을 수 있지만 직접 새로운 instants를 만들 수는 없음

```
abstract class User{
  constructor(
    private firstname:string,
    private lastname:string,
    public nickname:string
  ){
    abstract getNickname():void
  }
}

// Abstract Method는 Abstract Class를 상속받는 클래스들이 반드시 구현(implement)해야하는 Method
class Player extends User{
  getNickname(){
    console.log(this.nickname)
  }
}
```

- public : 모든 클래스에서 접근 가능
- private : 해당 클래스 내에서만 접근 가능 (자식 클래스에서도 접근 불가)
- protected : 해당 클래스와 자식 클래스에서 접근 가능

## Interface

Object의 type을 특정해주기 위해 사용

```
interface Person {
  firstName: string;
  lastName: string;
}
```

`*` JavaScript로 compile되지않음

```
 Abstract Class는 이를 상속할 각 객체들의 공통점을 찾아 추상화시켜 놓은 것으로,
 상속 관계를 타고 올라갔을 때 같은 부모 클래스를 상속하며 부모 클래스가 가진 기능들을 구현해야 할 경우에 사용함.
 그리고 Interface는 상속 관계를 타고 올라갔을 때 다른 조상 클래스를 상속하더라도,
 같은 기능이 필요할 경우에 사용함. Class와 별도로 구현 객체가 같은 동작을 한다는 것을 보장하기 위해 사용
```

### Implements

class가 특정 interface를 충족시키는지 확인
충족x => Error

### Type Alias vs Interface

Type Alias에서 Interface의 거의 모든 기능을 사용할 수 있으나,
Type에서는 다시 열어서 새 속성을 추가하는 것이 불가능

`*`선언병합 : Declaration Merging

=> 개인의 취향에 따라서 선택하여 사용

```
type PlayerA = {
  name: string
}
type PlayerAA = PlayerA & {
  lastName: string
}
const playerA: PlayerAA = {
  name: "Hong"
  lastName: "Gildong"
}

/////

interface PlayerB {
  name: string
}
interface PlayerB {
  lastName: string
}
interface PlayerB extend PlayerBB {
  health: number
}
const playerB: PlayerBB ={
  name:"Hong"
  lastName: "Gildong"
  health: 1
}
```

- abstract class를 대신하여 상속

```
type PlayerA = {
  firstName:string
}
interface PlayerB {
  firstNamr: string
}
class User implements PlayerA{
  constructor(
    public firstName:string
  ){}
}
class User implements PlayerB{
  constructor(
    public firstName:string
  ){}
}
```
