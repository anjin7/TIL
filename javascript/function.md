# Function

## 1. 함수선언
```
functionName('a');

function functionName(parameter) {
  console.log(`함수! ${parameter}`);
}
```
이 코드는 호이스팅되어 작동함


## 2. 함수표현
```
functionName('a');

const functionName = function(parameter) {
  console.log(`함수! ${parameter}`);
}
```
이 코드는 TypeError가 발생함

Project에서 function이나 file을 import 할 때도 TypeError가 발생할 수 있음
-> 함수를 선언으로 refactoring하자


* return
```
const functionName = function(name, message) {
  return `${name}: ${message}`;
};
console.log(functionName('a', 'good'));
```


## 3. Default parameter
```
function functionName(name='a', activity='tennis') {
  console.log(`${name} likes playing ${activity}`);
}
```
디폴트 파라미터는 ES6에서 추가되었음

```
const defaultPerson = {
  name: {
    first: 'Elly',
    last: 'O',
  },
  favActivity: 'tennis',
};

function logActivity(p=defaultPerson){
  console.log(`${p.name.first} likes playing ${p.favActivity}`);
}
```

## 4. Arrow Function

* 객체 반환
```
const person = (firstName, lastName) => ({
  first: firstName,
  last: lastName,
});

console.log(person('Elly', 'O'))
```

### 화살표 함수의 영역
