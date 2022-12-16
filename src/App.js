import './App.css';
import React, { Component } from 'react';
import Image from './Component/Profile/ProfilePhoto';
import Fullname from './Component/Profile/FullName';
import Address from './Component/Profile/Address';


class App extends Component {
   render () {
    return (
    <div className="App">
      <Image></Image>
      <Fullname></Fullname>
      <Address></Address>
    </div>
  );
}
}

export default App;
