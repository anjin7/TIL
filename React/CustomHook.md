# Custom Hook

컴포넌트 로직을 함수로 뽑아내서 재사용함

## Custom Hook 추출하기

두개의 자바스크립트 함수에서 같은 로직을 공유하고자 할 때, 또다른 함수로 분리

⇒ 컴포넌트와 Hook 또한 함수이므로 같은 방법으로 분리 가능

**Custom Hook은 use로 시작하는 js함수**

**Custom Hook은 다른 Hook을 호출 할 수 있음**

### 예시

```
import { useState, useEffect } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}
```

React 컴포넌트와는 다르게 Custom Hook은 특정한 시그니처가 필요하지 않음

무엇을 인수도 받을지 필요하다면 무엇을 반환해야 하는지를 사용자가 결정

이름은 반드시 use로 시작 → 한눈에 Hook규칙이 적용되는지 파악하기 위해

## Custom Hook 이용하기

### 예시

```
function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
};

function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}
```

⇒ 본래의 예시와 동일

### Custom Hook은 반드시 use로 시작되어야함

Hook규칙의 위반 여부를 자동으로 체크하기 위해

### 같은 Hook을 사용하는 두개의 컴포넌트는 state를 공유하지 않음

상태 관련 로직 (구독을 설정하고 현재 변수값을 기억하는 것)을 재사용 하는 메커니즘이지만

사용자 Hook를 사용할 때마다 그 안의 state와 effect는 완전히 독립적임

### Custom Hook이 독립된 state를 받는 방법

각각의 Hook에 대한 호출은 독립된 state를 받음

useState와 useEffect를 여러번 호출하여 state를 받은 것과 동일함

## useYourImagination( )

사용자 정의 Hook은 이전 리액트 컴포넌트에서는 불가능했던 로직공유의 유연성을 제공함

Custom Hook을 만들어 폼 다루기, 애니메이션, 선언형 구독, 타이머, 그 외에 생각하지 않은 부분까지 훨씬 다양한 쓰임새에 적용 할 수 있음

또한 리액트의 내장된 기능만큼이나 사용하기 쉬운 Hook을 만들 수 있음

너무 이른 단계에서 로직을 뽑아내려고 하지 않는 것이 좋음

함수 컴포넌트가 할 수 있는 일이 더 다양해졌기 때문에 반드시 Hook으로 분리해야만 하는것은 아님

하지만 동시에 커스텀 Hook이 복잡한 로직을 단순한 인터페이스 속에 숨길 수 있도록 하거나 복잡하게 뒤엉킨 컴포넌트를 풀어내도록 돕는 경우를 찾아내는 것을 권장함