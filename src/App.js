import React from "react";
import ClickerCounter from "./ClickerCounter";
class Lorem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <>
        <ClickerCounter number={this.state.counter} />
        <button onClick={this.handleClick}>counter</button>
      </>
    );
  }
}

export default Lorem;
