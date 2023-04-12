# Hook

## 특징

-선택적 사용

-하위 호환성

-현재 사용 가능

React 16.8버전부터 새롭게 추가됨

컴포넌트 사이에서 상태로직 재사용

복잡한 컴포넌트 이해 가능

⇒이미 존재하는 코드와 나란히 함께 작동함으로써 점진적으로 적용



함수형 컴포넌트에서 React state와 생명주기 기능을 "연동"할 수 있게 해주는 함수

class안에서 동작하지 않고 class대신 React를 사용할 수 있게 해주는것

## State Hook

### useState

현재의 state값과 이 값을 업데이트하는 함수를 쌍으로 제공

이 함수를 이벤트 핸들러나 다른 곳에서 호출 할 수 있음

class의 this.setState와 비슷하지만 이전 state와 새로운 state를 합치지 않는다는 차이점

인자로 초기 state값을 하나 받음

- 여러 state변수 선언하기

배열구조분해 문법은 useState로 호출된 state변수 들을 다른 변수명으로 할당할 수 있게 해줌

대신에 매번 렌더링 할때 useState가 사용된 순서대로 실행됨

## Effect Hook

### useEffect

Side effect(또는 effects): 컴포넌트 안에서 데이터를 가져오거나 구독하고 DOM을 직접 조작

다른 컴포넌트에 영향을 줄 수도 있고, 렌더링 과정에서는 구현할 수 없는 작업

이러한 side effect를 수행할 수 있게 해줌

useEffect를 사용하면 DOM을 바꾼 뒤에 "effect"함수를 실행함

Effect함수를 해제할 필요가 있다면 해제하는 함수를 반환(optional)

여러개의 effect함수 사용 가능

## Hook 사용규칙

- **최상위(at the top level)**에서만 호출 → 반복문, 조건문, 중첩된 함수 내에서 실행X
- **React 함수 컴포넌트 내**에서만 호출  → 일반 js함수에서는 호출X

## 커스텀 Hook

상태관련 로직을 컴포넌트 간에 재사용을 하고 싶을 때

state 그 자체가 아니라 상태관련 로직을 재사용하는 방법

각각의 Hook는 완전히 독립된 state를 가짐

심지어 한 컴포넌트 안에서 같은 custom Hook를 두번 쓸 수도 있음

## 다른 내장 Hook

### useContext

컴포넌트를 중첩하지 않고도 React context를 구독할 수 있게 해줌

### useReducer

복잡한 컴포넌트들의 state를 reducer로 관리할 수 있게 해줌