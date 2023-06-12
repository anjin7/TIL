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
