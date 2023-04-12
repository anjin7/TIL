# Conditional Rendering

리액트에서는 원하는 동작을 캡슐화하는 컴포넌트를 만들 수 읶음

이렇게하면 애플리케이션의 상태에 따라서 컴포넌트 중 몇개만을 렌더링 할 수 있음

리액트에서 조건부 렌더링은 js에서의 조건 처리와 같이 동작함

if나 조건부 연산자와 같은 js 연산자를 현재 상태를 나타내는 엘리먼트를 만드는데 사용하면 리액트는 현재 상태에 맞게 UI를 업데이트 할 것

```
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
```

## 엘리먼트 변수

엘리먼트를 저장하기 위해 변수를 사용할 수 있음

출력이 다른 부분은 변하지 않은 채로 컴포넌트의 일부를 조건부로 렌더링 할 수 있음

## 논리 &&연산자로 If를 인라인으로 표현하기

JSX에서는 중괄호를 이용해서 표현식을 포함 할 수 있음 

→ 그 안에 js의 논리연산자 &&를 사용하면 쉽게 엘리먼트를 조건부로 넣을 수 있음

```
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
);
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);
```

js에서 true && expression 뒤의 엘리먼트 조건이 true일때 출력됨

## 조건부 연산자로 If-Else구문 인라인으로 표현하기

condition ? true : false 를 사용하여 조건부 렌더링

```
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      {isLoggedIn
        ? <LogoutButton onClick={this.handleLogoutClick} />
        : <LoginButton onClick={this.handleLoginClick} />
      }
    </div>
  );
}
```

js와 마찬가지로 가독성이 좋다고 생각되는 방식을 선택하면 됨

조건이 너무 복잡하다면 컴포넌트를 분리하는 것도 방법

## 컴포넌트가 렌더링하는 것을 막기

가끔 다른 컴포넌트에 의해 렌더링될 때 컴포넌트 자체를 숨기고 싶을때 렌더링 결과를 출력하는 대신 null을 반환