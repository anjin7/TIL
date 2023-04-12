# useEffect

데이터 가져오기, subscription 설정하기, 수동으로 리액트 컴포넌트의 DOM 수정하기 등의 기능 

= side effects

## 정리(Clean-up)를 이용하지 않는 Effects

리액트가 DOM을 업데이트 한 뒤 추가로 코드를 실행해야 하는 경우

### 예시

```
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;  
});

return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

### useEffect가 하는 일은

리액트에게 컴포넌트가 렌더링 이후에 어떤 일을 수행해야하는지 지시

리액트는 우리가 넘긴 함수를 기억했다가 DOM업데이트를 수행한 이후에 불러냄

데이터를 가져오거나 다른 명령형API를 불러낼 수 있음

### useEffect를 컴포넌트 안에서 불러내는 이유는

내부에 둠으로써 effect를 통해 state변수(또는 그 어떤 prop에도)에 접근 할 수 있게 됨

함수 범위 안에 존재하기 때문에 특별한 API없이도 값을 얻을 수 있음

### useEffect는 렌더링 이후 매번 수행되나

기본적으로 첫번째 렌더링과 이후의 모든 업데이트에서 수행됨 (필요에 맞게 수정할 수 있음)

마운팅과 업데이트라는 방식으로 생각하는 대신,

  effect를 렌더링 이후 발생하는 것으로 생각하는 편이 쉬움

리액트는 effect가 수행되는 시점에 이미 DOM이 업데이트 되었음을 보장함

## 정리(Clean-up)를 사용하는 Effects

외부 데이터에 **구독(subscription)을 설정해야하는 경우**

메모리 누수가 발생하지 않도록 정리하는 것이 중요

### 예시

```
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // effect 이후에 어떻게 정리(clean-up)할 것인지 표시합니다.
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```

### effect에서 함수를 반환하는 이유는

effect를 위한 추가적인 정리 메커니즘

모든 effect는 정리를 위한 함수를 반환 할 수 있음

구독(subscription)의 추가와 제거를 위한 로직을 가까이 묶어둘 수 있게 함

구독의 추가와 제거가 모두 하나의 effect를 구성함

### 리액트가 effect를 정리(Clean-up)하는 시점은 정확히 언제

리액트는 컴포넌트가 마운트 해제되는 때에 정리를 실행

하지만 effect는 한번이 아니라 렌더링이 실행되는 때마다 실행됨

=리액트가 다음차례의 effect를 실행하기 전에 이전의 렌더링에서 파생된 effect 또한 정리하는 이유

⇒ 버그를 방지하는데에 도움이 됨

 // 성능저하 문제가 발생할 경우 effect를 건너뛰는 방법