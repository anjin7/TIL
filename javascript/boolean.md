# Boolean

true or false 

* " "를 쓰지 않도록 주의


## Truthy || Falsy

### falsy한 값
- undefined
- null
- false
- 0
- NaN
- '' (빈문자열)

### truthy한 값 (falsy 이외의 모두)
- 모든 객체(Object) [valueOf() 메서드를 호출했을 때 false를 반환하는 객체도 truthy]
- 배열(Array) [빈 배열도 truethy]
- " " (공백만 있는 문자열)
- 문자열 "false"