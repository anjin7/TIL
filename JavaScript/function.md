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

일반 함수는 this를 새롭게 binding함
```
const city = {
  resorts: ["seoul", "pyeongchang", "seongnam"],
  print: function(delay=1000) {
    setTimeout(function() {
      console.log(this.resorts.jpin(","));
    }, delay);
  }
};

city.print(); // Cannot read property 'join' of defined 오류발생
```
이 코드는 오류가 발생하는데, this.resorts에서 join 메서드를 호출하려고 시도했기 때문
```
console.log(thid); // window{}
```
this를 콘솔에 찍어보면 window 객체임을 알 수 있음

이 것을 해결하기 위해서는 화살표 함수룰 사용하면 this의 영역이 제대로 유지됨

```
let city = {
  resorts: ["seoul", "pyeongchang", "seongnam"],
  print: function(delay=1000) {
    setTimeout(() => {
      console.log(this.resorts.join(","));
    }, delay);
  }
};

city.print();
```
항상 영역을 염두에 두자

화살표 함수는 새로운 this영역을 만들어내지 않음

