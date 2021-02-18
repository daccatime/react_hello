
import React, {Component} from 'react';


class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

class App extends Component {
  render() {
    return (
    <Welcome name= {"crytodash1"} />
  );
    }
}

export default App;
