# JS Quiz

```
console.log(
  (![] + [])[+[]] +
  (![] + [])[+!+[]] +
  ([![]] + [][[]])[+!+[] + [+[]]] +
  (![] + [])[!+[] + !+[]]
);
// fail
```

##

```
console.log(5 - "1");
// 4
```

연산자 '-'에 의한 강제변환

=> 5 - 1 = 4

##

```
console.log(5 + "1");
// "51"
```

연산자 '+'에 의해

=> "5" + "1" = "51"

##

```
console.log([] + {});
// [object Object]
```

연산자 '+'에 의해

[] => 0

{} => [object Object]

```
console.log({} + []);
// 0
```

연산자 '+'에 의해

{} => {</>} => { //nothing }

[] => 0

##

```
console.log(true+true+true)
// 3
```

boolean 과 연산자가 만나면 true=1, false=0

##

```
function f(){
  try {
    return 1;
  } catch {
    return 2;
  } finally {
    return 3;
  }
}
// 3
```

함수 내부에서 try block이 1을 return하려고 시도하지만,

finally block은 예외 발생 여부와 관계없이 항상 실행되고 try block의 return을 재정의 할 수 있는 권한도 가지고 있음

##

```
console.log(1.0000000000000001.toString());
// 1
```

JS에서는 16자리가 넘는 소수를 정확하게 처리 할 수 없음 => 반올림

```
console.log(0.1+0.2 === 0.3);
// false
```

이진법으로 정확하게 표현할 수 없는 소수는 실제 그 소수보다 약간 크게됨

-> 더했을때도 약간 큰 수가 되므로 같지 않음

##

```
console.log(true==1)
// true

console.log(true===1)
// false
```

##

```
console.log("b" + "a" + +"a" + "a")
// baNaNa
```

+"a" => 숫자로 변환하려고 하지만 숫자가 아니므로 => NaN
