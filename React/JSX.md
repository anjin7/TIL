# JSX

js확장 문법

리액트 엘리먼트를 생성함

## JSX란?

리액트에서는 본질적으로 렌더링 로직이 UI로직( 이벤트가 처리되는 방식, 시간에 따라 state가 변하는 방식, 화면에 표시하기 위해 데이터가 준비되는 방식 등 )과 연결된다는 사실을 받아들임

리액트에서는 별도의 파일에 마크업과 로직을 넣어 기술을 인위적으로 분리하는 대신, 둘 다 포함하는 "컴포넌트"라고 부르는 느슨하게 연결된 유닛으로 관심사를 분리함

## JSX에 표현식 포함하기

```
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

```
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;  }
  return <h1>Hello, Stranger.</h1>;
}
```

## JSX 속성 정의

속성에 따옴표를 이용해 문자열 리터럴을 정의할 수 있음

```
const element = <div tabIndex="0"></div>;
```

중괄호를 이용해 어트리뷰트에 js표현식을 삽입할 수 있음

```
const element = <img src={user.avatarUrl}></img>;
```

## JSX 자식 정의

JSX 태그는 자식을 포함할 수 있음

## JSX는 주입 공격을 방지

JSX에 사용자 입력을 삽입하는 것은 안전함

기본적으로 리액트DOM은 JSX에 삽입된 모든 값을 렌더링하기 전에 이스케이프 하므로, 애플리케이션에서 명시적으로 작서되지 않은 내용은 주입되지 않음

모든 항목은 렌더링되기 전에 문자열로 변환됨

이러한 특징으로 인해 XSS(cross-site-scripting)공격을 방지 할 수 있음

## JSX는 객체를 표현함

Babel은 JSX를 React.createElement( ) 호출로 컴파일함

```
// 주의: 다음 구조는 단순화되었습니다
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```

이러한 객체를 "React 엘리먼트"라고 하며, 화면에서 보고 싶은 것을 나타내는 표현

리액트는 이 객체를 읽어서 DOM을 구성하고 최신 상태로 유지하는데 사용함

# JSX 이해하기

## 리액트 엘리먼트의 타입 지정하기

JSX 태그의 첫 부분은 리액트 엘리먼트의 타입을 결정함

대문자로 시작하는 JSX 태그는 컴포넌트를 지정함

이 태그들은 같은 이름을 가진 변수들을 직접 참조함

## 리액트가 스코프 내에 존재해야함

JSX는 React.createElement를 호출하는 코드로 컴파일 되기 때문에 리액트 라이브러리 역시 JSX와 같은 스코프 내에 존재해야함

```
import React from 'react';
import CustomButton from './CustomButton';

function WarningButton() {
  // return React.createElement(CustomButton, {color: 'red'}, null);
  return <CustomButton color="red" />;
}
```

js 번들러를 사용하지 않고 <script> 태그를 통해 리액트를 불러왔다면 리액트는 전역 변수로 존재하기 때문에 별도로 불러올 필요가 없음

## JSX 타입을 위한 점 표기법 사용

JSX 내에서도 점 표기법을 사용하여 리액트 컴포넌트를 참조할 수 있음

이 방법은 하나의 모듈에서 복수의 리액트 컴포넌트들을 export하는 경우에 편리하게 사용 가능

```
import React from 'react';

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}
```

## 사용자 정의 컴포넌트는 반드시 대문자로 시작

엘리먼트가 소문자로 시작하는 경우에는 `<div>` 나 `<span>` 같은 내장 컴포넌트를 뜻하며 'div', 'span'과 같은 문자열 형태로 React.createElement에 전달됨

`<Foo />`와 같이 대문자로 시작하는 타입들은 React.createElement(Foo)의 형태로 컴파일 되며 js 파일내에 사용자가 정의했거나 import한 컴포넌트를 가리킴

## 실행 중에 타입 선택하기

리액트 엘리먼트 타입에 일반적인 표현식은 사용할 수 없음

만약 엘리먼트 타입을 지정할 때 일반적인 표현식을 사용하고자 하면 대문자로 시작하는 변수에 배정한 후 사용할 수 있음

```
import React from 'react';
import { PhotoStory, VideoStory } from './stories';

const components = {
  photo: PhotoStory,
  video: VideoStory
};

function Story(props) {
  // 올바른 사용법입니다! 대문자로 시작하는 변수는 JSX 타입으로 사용할 수 있습니다.
  const SpecificStory = components[props.storyType];
  return <SpecificStory story={props.story} />;
}
```

## JSX 안에서의 prop 사용

### JavaScript Expressions as Props

if 구문과 for 루프는 js표현식이 아니기 때문에 JSX안에서 그대로 사용할 수 없음

```
function NumberDescriber(props) {
  let description;
  if (props.number % 2 == 0) {
    description = <strong>even</strong>;
  } else {
    description = <i>odd</i>;
  }
  return <div>{props.number} is an {description} number</div>;
}
```

### 문자열 리터럴

문자열 리터럴은 prop으로 넘겨줄 수 있음

문자열 리터럴을 넘겨줄 때, 그 값은 HTML 이스케이프 처리가 되지 않음

### Props의 기본값은 "True"

prop에 어떤 값도 넘기지 않을 경우, 기본값은 true

일반덕으로 prop에 대한 값을 전달하지 않는 것을 권장 ⇒ **ES6 object shorthand**와 헷갈릴수 있음

### 속성 펼치기

prop에 해당하는 객체를 이미 가지고 있다면 ...를 "전개" 연산자로 사용해 전체 객체를 그대로 넘겨줄 수 있음

```
function App1() {
  return <Greeting firstName="Ben" lastName="Hector" />;
}

function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;}
```

두 컴포넌트는 동일

전개 연산자는 유용하지만 불필요한 prop을 컴포넌트에 넘기거나 유효하지 않은 HTML 속성들을 DOM에 넘기기도함

## JSX에서 자식 다루기

여는 태그와 닫는 태그가 있는 JSX 표현에서 두 태그 사이의 내용은 props.chidren이라는 특수한 prop으로 넘겨지는데 넘기는 방법은 여러가지가 있음

### 문자열 리터럴

여는 태그와 닫는 태그 사이에 문자열 리터럴을 넣을 수 있고 이때 props.chidren은 그 문자열이 됨

이는 HTML 내장 엘리먼트에 유용함

JSX는 각 줄의 처음과 끝에 있는 공백을 제거함 빈줄도 제거함

태그에 붙어있는 개행도 제거되며 문자열 리터럴 중가에 있는 개행은 한개의 공백으로 대체됨

### JSX를 자식으로 사용하기

JSX엘리먼트를 자식으로 넘겨줄 수 있음 중첩된 컴포넌트를 보여줄 때 유용함

```
render() {
  // 리스트 아이템들을 추가적인 엘리먼트로 둘러쌀 필요 없습니다!
  return [
    // key 지정을 잊지 마세요 :)
    <li key="A">First item</li>,
    <li key="B">Second item</li>,
    <li key="C">Third item</li>,
  ];
}
```

### js 표현식을 자식으로 사용하기

{ }으로 감싸서 js 표현식도 자식으로 넘길 수 있음

```
function Item(props) {
  return <li>{props.message}</li>;
}

function TodoList() {
  const todos = ['finish doc', 'submit pr', 'nag dan to review'];
  return (
    <ul>
      {todos.map((message) => <Item key={message} message={message}
 />)}
    </ul>
   );
}
```

### 함수를 자식으로 사용하기

보통 JSX에 삽입된 js표현식은 문자열, React 엘리먼트 혹은 이들의 배열로 환산됨

하지만 props.chidren은 다른 prop들과 마찬가지로 리액트가 렌더링 할 수 있는 데이터의 형태뿐만 아니라 어떤 형태의 데이터도 넘겨질 수 있음

직접 만든 컴포넌트에 넘겨지는 자식들은 렌더되기 전에 리액트가 이해할 수 있는 형태로 변환된다면 어떤것이든 넘겨질 수 있음( 일반적이지는 않지만 사용할 수는 있음 )

### boolean, null, undefined는 무시됨

유효한 자식이지만 그저 렌더링이 되지 않을 뿐

⇒ 조건부 렌더링 할 때 유용함

한가지 주의할 점은 0 과같은 falsy한 값들은 리액트가 렌더링한다는 점

false, true, null, undefined 같은 값을 출력하고 싶다면 문자열로 전환해야함
