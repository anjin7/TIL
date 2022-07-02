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
