# Function

1. 함수선언
```
functionname(a);

function functionname(parameter) {
  console.log(`함수! ${parameter}`);
}
```
이 코드는 호이스팅되어 작동함

2. 함수표현
```
functionname(a);

const functionname = function(parameter) {
  console.log(`함수! ${parameter});
}
```
이 코드는 TypeError가 발생함

Project에서 function이나 file을 import 할 때도 TypeError가 발생할 수 있음
-> 함수를 선언으로 refactoring하자
