import React, {Component} from 'react';

export class Counter extends Component {

  static defaultProps = { //если из пропс не придет другое значение initialStateOfCounter
    initialStateOfCounter: 400, // то применится 400
  };

  constructor(props) {
    super(props);
    this.state = {
      counter: props.initialStateOfCounter,
    };
  }

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decrementCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter - 1,
    }));
  };

  render() {
    console.log(this.props)//то, что пришло из Апп - initialStateOfCounter и ф-ция props
    return this.props.children({
      incrementCounter: this.incrementCounter,
      decrementCounter: this.decrementCounter,
      counter: this.state.counter,
    });
  }
}