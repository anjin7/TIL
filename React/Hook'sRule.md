# Hook 규칙

## 최상위(at the Top Level)에서만 Hook을 호출해야함

**반복문, 조건문 혹은 중첩된 함수 내에서 호출X**

대신 early return이 실행되기 전에 항상 리액트 함수의 최상위에서 Hook을 호출해야함

이 규칙을 따르면 컴포넌트가 렌더링 될 때마다 항상 동일한 순서로 Hook이 호출되는 것이 보장됨

이러한 점은 useState와 useEffect가 여러번 호출 되는 중에도 Hook의 상태를 올바르게 유지 할 수 있도록 해줌

## 오직 리액트 함수 내에서 Hook을 호출해야함

**일반적인 js함수에서 호출X**

→React 함수 컴포넌트에서 Hook호출

→Custom Hook에서 호출

이 규칙을 지키면 컴포넌트의 모든 상태 관련 로직을 소스코드에서 명확하게 보이도록 할 수 있음

### ESLint 플러그인

이 두가지 규칙을 강제하는 Eslint-plugin-react-hooks 라는 ESLint플러그인이 출시됨

Create React App에 기본적으로 포함되어 있음