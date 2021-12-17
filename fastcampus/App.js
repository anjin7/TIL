import React, { Component } from 'react';

import Counter from './Counter.js';
import MyName from './MyName.js';
import './App.css';


class App extends Component {

  render() {
    const style = {
      backgroundColor: 'lightblue',
      color: 'grey',
      fontSize: '24pt',
      padding: '24px',
      
    }
    return(
      <>
        <MyName name="react"/>
        <Counter />
        <div style={style}>Hello World</div>
        <div>
          {
            1 + 1 === 2
            ? (<div>Right!</div>)
            : (<div>Wrong!!</div>)
          }
        </div>
      </>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
