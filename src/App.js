import { Component } from 'react';
import { connect } from "react-redux";
import { increment, decrement } from './utils/Counter';

class App extends Component {
  render () {
    return (
      <div>
        <button onClick={increment}>
          +
        </button>

        <span style={{padding: 20}}>
          {this.props.count}
        </span>

        <button onClick={decrement}>
          -
        </button>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    count: state.counter.count
  }
}

export default connect(mapStateToProps)(App);