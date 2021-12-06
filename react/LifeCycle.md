# LifeCycle API

- LifeCycle API
    
    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/96e0a8f7-c2d0-4755-8f7c-6802e96bf9b5/KakaoTalk_20210805_131115719.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/96e0a8f7-c2d0-4755-8f7c-6802e96bf9b5/KakaoTalk_20210805_131115719.jpg)
    

### 마운트

-컴포넌트의 인스턴스가 생성되어 DOM 상에 삽입될때에 순서대로 호출됨

**constructor( )**

static getDerivedStateFromProps( )

**render( )**

**componentDidMount( )**

### 업데이트

-props 또는 state가 변경되면 갱신. 컴포넌트가 다시 렌더링될 때 순서대로 호출됨

static getDerivedStateFromProps( )

shouldComponentUpdate( )

**render( )**

getSnapshotBeforeUpdate( )

**componentDidUpdate( )**

### 마운트 해제(언마운트)

-컴포넌트가 DOM 상에서 제거될 때 호출됨

**componentWillUnmount( )**

### 오류처리

-자식 컴포넌트를 렌더링하거나, 자식 컴포넌트가 생명주기 메서드를 호출하거나, 또는 자식 컴포넌트가 생성자 메서드를 호출하는 과정에서 오류가 발생했을 때 호출됨

static getDerivedStateFromError( )

componentDidCatch( )

## render( )

반드시 구현되어야하는 유일한 메서드

다음중 하나가 반환되어야함

- **리액트 엘리먼트** ; JSX를 사용하여 생성
- **배열과 Fragment** ; 여러개의 엘리먼트
- **Portal** ; 별도의 DOM 하위 트리에 자식 엘리먼트를 렌더링
- **Boolean 또는 null** ; 아무것도 렌더링하지 않음

render( )함수는 순수해야함 

즉, 컴포넌트의 state를 변경하지 않고, 호출될 때마다 동일한 결과를 반환해야하며, 브라우저와 직접 상호작용하지 않음

## constructor( )

메서드를 바인딩하거나 state를 초기화하는 작업이 없다면, 해당 리액트 컴포넌트에는 생성자를 구현하지 않아도 됨

리액트 컴포넌트의 생성자는 해당 컴포넌트가 마운트되기 전에 호출됨

React.Component를 상속한 컴포넌트의 생성자를 구현할때에는 다른 구문에 앞서 super(props)를 호출해야 함