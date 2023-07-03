# Dart

```
https://dartpad.dev/
```

Flutter uses Dart's JIT(Just-In-Time) on development and AOT(Ahead-Of-Time) on production.

**JIT** : JS

**AOT** : C, C++, RUST, Go

## main함수

main함수는 모든 Dart 프로그램의 Entry point

main 함수에서 쓴 코드가 호출 (만약 main이 없다면 실행이 되지 않음)

dart는 자동으로 **세미콜론**을 붙여주지 않기 때문에 직접 붙여야 함

일부러 세미콜론을 안 쓸 때가 있기 때문

```
void main(){
print("hello world");
}
```

## 변수 선언

```
void main() {
var name = "pizza"; // 방법 1
String name = "chicken"; // 방법 2
name = "chicken ";
}
```

function이나 method 내부에 지역변수를 선언할 때는 var

class에서 변수나 property를 선언할 때는 타입을 지정

### Dynamic 타입

여러가지 타입을 가질 수 있는 변수에 쓰임 (변수의 타입을 알 수 없을 때 주로 사용)

변수를 선언할 때 dynamic을 쓰거나 값을 지정하지 않으면 dynamic

```
void main(){
dynamic name;
var name2;
}
```

### Null Safety

개발자가 null 값을 참조할 수 없도록 하는 것

String? name 은 String 또는 null

기본적으로 모든 변수는 non-nullable(null이 될 수 없음)

```
void main() {
String? name = "hello";
name = null;
}
```

### final 변수

final변수는 수정할 수 없음 ( js의 const와 비슷 )

```
void main() {
final name = "pizza";
name = "ham"; // 수정 불가

final String username = "tony";
name = "steve"; // 수정 불가
}
```

### late 변수

데이터 없이 먼저 변수를 생성하고 나중에 데이터를 넣을 때

flutter로 data fecthing을 할 때 유용

late 변수를 만들고, API에 요청을 보낸 뒤

API에서 값을 보내주면 그 응답값을 late변수에 넣어 사용

```
void main() {
late final String name;

print(name); // name 변수에 접근 불가
}
```

### const 변수

dart에서 const는 compile-time constant ( js에서의 const와 다름 )

_값이 API로부터 오거나 사용자가 화면에서 입력해야 하는 값이라면_ => final이나 var

**const** : 컴파일 시점에 바뀌지 않는 값 (상수)

**final** : 컴파일 시점에 바뀌는 값 (API에서 받아온 값, 사용자 입력값)

```
void main() {
const name = "tony";
final username = fetchAPI();
}
```

## Data type

거의 대부분의 타입들이 객체로 이루어져 있음 (함수도 객체) => `dart = 객체지향 언어`

```
void main() {
String name = "tony";
bool isPlay = true;     // boolean
int age = 10;           // integer
double money = 52.55;
num x = 12;             // integer or double
num y = 1.2;
}
```

### List

```
void main() {
List<int> numbers = [1, 2, 3];
var number2 = [4, 5, 6];
}
```

**collection if** 와 **collection for**를 지원

#### Collection if

It allows us to run an `if` while constructing a list

### Collection for

조건문(if) 및 반복(for)을 사용하여 컬렉션을 구축하는 데 사용할 수 있는 collection if / collection for

It allows us to run a `for` loop while constructing a list

```
void main(){
var giveMeSix = true;
int case1 = [
1,
2,
3,
4,
5,
if(giveMeSix) 6,
];

if(giveMeSix){
case1.add(6);
}
}
```

### 변수 삽입

1. 단순 삽입은 따옴표 내부에 $변수명
2. 변수를 계산하여 삽입하는 법은 ${계산식}

\* $ 그대로 표시는 escape문자 \\$

\* String 내부에 따옴표 사용은 \\' 혹은 \\"를 사용하거나 다른 따옴표로 String 열고 닫기

### Maps

key와 value를 연결하는 Object

```
var food = Map();
food['korean'] = 'kimbap';
food['japanese'] = 'takoyaki';
//
// var food = {
//   'korean' : 'kimbap',
//   'japanese' : 'takoyaki'
// };

```

```
void main(){
  List<Map<String, Object>> players = [
    {'name': 'tony', 'xp': 999.999},
    {'name': 'stark', 'xp': 999.999},
  ]
}
// object 이면 any
// 추천하지는 않는 방법 -> class로 대체
```

### Sets

Set에 속한 모든 아이템들이 유니크 할 때 사용

```
Dart Set -> JS Set
Dart Set -> Python Set

Dart List -> JS Array
Dart List -> Python List
```

```
void main(){
  var numbers = {1, 2, 3, 4};

  // List
  // var numbers = [1, 2, 3, 4];
}
```

## Function

함수도 object 타입이 Function
=> 함수를 변수에 할당하거나 다른 함수에 인수로 전달할 수 있음

### Named parameters

기본값을 제공하지 않거나 Named parameters를 필수로 표시하지 않으면 기본값은 null

```
// 하나 => (return할 내용)
// 둘 이상 => return

String sayHello({
String name,
int age,
String country
}) => return "Hello $name, age: $age, country $country";

void main(){
  print(sayHello({
    name: "tony",
    age: 17,
    country: "korea",
    });
  );
}
```

### Optional, Positional parameter

Optional

\- parameter 타입 뒤에 `?`

\- []를 통해 optional값으로 지정 (호출 시 null을 명시적으로 할당하는지)

```
String sayHello(
String name,
int age,
// default value
[String? country = "korea"],
) => return "Hello $name, age: $age, country $country";

void main(){
  print(sayHello({
    name: "tony",
    age: 17,
    country: "korea",
    });
  );
}
```

### QQ Operator

\- **QQ question operator**

?? 연산자를 이용하면 왼쪽 값이 null인지 체크

-> **null이 아니면 왼쪽 값**을 리턴 / **null이면 오른쪽 값**을 리턴

```
void main() {
String? name;
name ??= "tony";
name = null;
name ??= "js";
print(name); // js
}
```

### TypeDef

**Type Definition**

자료형에 사용자가 원하는 alias를 붙일 수 있음

```
List reverseListOfNumbers(List list) {
var reversed = list.reversed;
return reversed.toList();
}
```

-> typedef 이용

```
typedef ListOfInts = List;

ListOfInts reverseListOfNumbers(ListOfInts list) {
var reversed = list.reversed;
return reversed.toList();
}
```

## Class

property를 선언할 때는 타입을 사용해서 정의

```
class Player {
final String name = 'tony';
final int age = 27;
void sayName(){
// class 안에서 this 쓰지 않는 것을 권장
print("Hi my name is $name")
}
}

void main(){
// new를 꼭 붙이지 않아도 됨
var player =Player();
}
```

### constructor

생성자(constructor)함수는 클래스 이름과 같아야 함

```
class Player {

  late final String name;
  late final int age;

  Player(this.name, this.age);
}

void main(){
  var player = Player("tony", 15);
}

```

For the class constructor we don't have to use the constructor keyword.

### Named Constructor Parameters

클래스가 거대해질 경우 인자가 많은 생성자 함수를 만드는 것은 비효율적

**해결방법**

\ 1. 중괄호 {}

\ 2. name parameter

\* 변수가 null일 수도 있기 때문에 required를 이용하거나 default 값 설정

### Named Constructors

만약 생성자(constructor) 함수를 여러개 만들고 싶다면

콜론(:)을 사용하면 특별한 생성자 함수를 생성

-> dart에게 객체를 초기화하라고 명령

### Cascade Notation

argument의 value들을 바꾸고 싶을 때 조금 더 편리하게 `..`를 이용

```
void main() {
var player = Player(name : 'nico', xp : 1600, team : 'red');
player.name = 'hi';
player.xp = 1450;
player.team = 'blue;

=>

var player = Player(name : 'nico', xp : 1600, team : 'red')
..name = 'hi'
..xp = 1450
..team = 'blue;

}
```

### Enum

Enumerated Type => 실수하지 않도록 도와주는 type

enum type의 변수들은 해당 enum type에 생성된 값들 중에서만 값이 할당될 수 있음

### Abstract Class

다른 클래스들이 직접 구현해야 하는 필드와 메소드들을 모아놓은 클래스

\- 객체를 생성할 수 없음

\- 추상 클래스를 상속받는 클래스는 추상 클래스의 메소드를 구현해야 함

**The difference between a class and an abstract class**

-> We can't create an instance of an abstract class

### Inheritance

상속을 하고 super를 이용해 부모 클래스의 생성자를 호출할 수 있음

@override를 이용해 부모 클래스의 객체를 받아올 수 있음

### Mixins

Mixin은 생성자가 없는 클래스

상속 할 때 extends를 하지 않고 `with`를 사용

여러 클래스에 재사용이 가능

```
Extend / With

extend를 하면 확장한 그 클래스는 부모 클래스가 되지만
with는 부모의 인스턴스 관계

=> mixin 내부의 프로퍼티와 메소드들을 가져오는 것
```

```
Mixin / Interface

 Mixin은 클래스에 코드를 적용하는 데 사용되고,
 Interface는 클래스나 객체가 가져야 하는 기능의 규격을 정의하는 데 사용
```

### super

To call the constructor of the class we are extending from
