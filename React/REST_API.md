# REST API

## 1. REST API의 탄생

Representational State Transfer

## 2. REST 구성

**RESOURCE(자원)** - URI

**Verb(행위)** - HTTP METHOD

**Representations(표현)**

## 3. REST의 특징

**1) Uniform (유니폼 인터페이스)**

URI로 지정한 리소스에 대한 조작을 한정적인 인터페이스로 수행하는 아키텍처 스타일

**2) Stateless (무상태성)**

상태정보를 따로 저장하고 관리하지 않음

세션정보나 쿠키정보를 별도로 저장하고 관리하지 않기 때문에 API 서버는 들어오는 요청만을 단순히 처리하면 됨

그렇기 때문에 서비스의 자유도가 높아지고 서버에서 불필요한 정보를 관리하지 않음으로써 구현이 단순해짐

**3) Cacheable (캐시 가능)**

HTTP라는 기존 웹표준을 그대로 사용하기 때문에, 웹에서 사용하는 기존 인프라를 그대로 활용이 가능

따라서 HTTP가 가진 캐싱 기능이 적용 가능

HTTP 프로토콜 표준에서 사용하는 Last-Modified태그나 E-Tag를 이용하면 캐싱 구현이 가능

**4) Self-descriptiveness (자체 표현 구조)**

REST API 메세지만 보고도 이를 쉽게 이해할 수 있는 자체 표현 구조로 되어있음

**5) Client - Sever 구조**

REST 서버는 API 제공, 클라이언트는 사용자 인증이나 컨텍스트(세션, 로그인 정보)등을 직접 관리하는 구조로 각각의 역할이 확실히 구분되기 때문에 클라이언트와 서버에서 개발해야 할 내용이 명확해지고 서로간 의존성이 줄어듦

**6) 계층형 구조**

REST 서버는 다중 계층으로 구성될 수 있으며 보안, 로드 밸런싱, 암호화 계층을 추가해 구조상의 유연성을 둘 수 있고 PROXY, 게이트웨이 같은 네트위크 기반의 중간매체를 사용할 수 있게 함

## 4. REST API 디자인 가이드

REST API 설계시 가장 중요한 항목

1. **URI는 정보의 자원을 표현 해야함**
2. **자원에 대한 행위는 HTTP Method( GET, POST, PUT, DELETE )로 표현**

### 4-1. REST API 중심 규칙

1. URI는 정보의 자원을 표현해야 함

자원을 표현하는데 중점을 두어야함 ( 행위에 대한 표현X )

2. 자원에 대한 행위는 HTTP Method로 표현

### 4-2. URI 설계 시 주의할 점

1. 슬래시 구분자(/)는 계층관계를 나타내는데 사용

2. URI 마지막 문자로 슬래시를 포함하지 않음

3. 하이픈(-)은 URI 가독성을 높이는데 사용

4. 밑줄(\_)은 URI에 사용하지 않음

5. URI 경로에는 소문자가 적합

6. 파일 확장자는 URI에 포함시키지 않음

### 4-3. 리소스 간의 관계를 표현하는 방법

```
/리소스명/리소스 ID/관계가 있는 다른 리소스명

ex)    GET : /users/{userid}/devices (일반적으로 소유 ‘has’의 관계를 표현할 때)
```

관계명이 복잡하다면 서브 리소스에 명시적으로 표현

### 4-4. 자원을 표현하는 Collection과 Document

도큐먼트는 단순히 문서로 이해해도 되고, 한 객체라고 이해해도 됨

컬렉션은 문서들의 집합, 객체들의 집합이라고 이해하면 쉬움

두가지 모두 리소스라고 표현 할 수 있으며 URI에 표현됨

**예시**

```
http:// restapi.example.com/sports/soccer/players/13
```

sports라는 컬렉션과 soccer라는 도큐먼트로 표현, players 컬렉션과 13이라는 도큐먼트

⇒ **컬렉션은 복수**로 사용

좀 더 직관적인 REST API를 위해서 단수 복수를 지켜주면 좀 더 이해하지 쉬움

## 5. HTTP응답 상태 코드

잘 설계된 REST API는 URI만 잘 설계된 것이 아닌 그 리소스에 대한 응답을 잘 내어주는 것까지 포함되어야 함

정확한 응답의 상태코드만으로도 많은 정보를 전달할 수 있기 때문

### 상태코드

**200** : 클라이언트의 요청을 정상적으로 수행함

**201** : 클라이언트가 어떠한 리소스 생성을 요청, 해당 리소스가 성공적으로 생성됨

(POST를 통한 리소스 생성 작업시)

**400** : 클라이언트의 요청이 부적절 할 경우

**401** : 클라이언트가 인증되지 ㅇ낳은 상태에서 보호된 리소스를 요청했을때 사용하는 응답 코드

(로그인하지 않은 유저가 로그인했을때, 요청 가능한 리소스를 요청했을때)

**403** : 유저 인증 상태와 관계 없이 응답하고 싶지 않은 리소스를 클라이언트가 요청했을 때

(403보다는 400이나 404를 사용할 것을 권고, 403 자체가 리소스가 존재한다는 뜻이기 때문에)

**405** : 클라이언트가 요청한 리소스에서는 사용 불가능한 Method를 이용했을 경우

**301** : 클라이언트가 요청한 리소스에 대한 URI가 변경 되었을 때

(응답 시 Location header에 변경된 URI를 적어주어야함)

**500** : 서버에 문제가 있을 경우
