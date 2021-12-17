import React, { Component } from 'react';

class MyName extends Component {
  static defaultProps  = {
    name: '기본이름'
  }

  render() {
    const style ={
      backgroundColor: 'lightblue',
      padding: '16px',
      fontSize: '24px'
    }
    
    return (
      <div style={style}>
        안녕하세요 제이름은 <b>{this.props.name}</b>입니다
      </div>
    );
  }
}

export default MyName;