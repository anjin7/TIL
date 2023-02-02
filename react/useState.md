# useState

## state 변수 선언하기

```
import React, { useState } from 'react';

function Example() {
  // 새로운 state 변수를 선언하고, 이것을 count라 부르겠습니다.
const [count, setCount] = useState(0);
```

### useState를 호출하는 것은

state변수를 선언하는것

아무 이름으로 지어도됨

state변수는 React에 의해 사라지지 않음

### useState의 인자로 넘겨주어야 하는것은

state의 초기값

객체일 필요는 없고 숫자 타입과 문자타입을 가질 수 있음

### useState가 반환하는 것은

**state변수**와 해당 변수를 갱신할 수 있는 **함수**

## state가져오기

```
<p>You clicked {count} times</p>
```

## state 갱신하기

```
  <button onClick={() => setCount(count + 1)}>`

    Click me
  </button>
```

### 예시

```
1:  import React, { useState } from 'react';
2:
3:  function Example() {
4:    const [count, setCount] = useState(0);
5:
6:    return (
7:      <div>
8:        <p>You clicked {count} times</p>
9:        <button onClick={() => setCount(count + 1)}>
10:         Click me
11:        </button>
12:      </div>
13:    );
14:  }
```

여러개의 state변수를 사용하지 않아도 됨

state를 갱신하는 것은 병합하는 것이 아니라 **대체하는것**
