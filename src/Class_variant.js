import React from "react";
import Site from "./Site";

// function Lorem(props) {
//   console.log(props);

//   const myCustomProps = { ...props, text: "new props" };
//   console.log(myCustomProps);

//   const style = { color: "green", fontSize: "24px" };

//   return (
//     <React.Fragment>
//       <div>Lorem ipsum dolor sit.</div>
//       <h1 style={style}>
//         <p>{myCustomProps.text}</p>
//       </h1>
//       <Site name="Google" />
//       <Site name="Yandex" />
//       <Site name="VK" />
//     </React.Fragment>
//   );
// }

class Lorem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Marco",
      counter: 0,
    };
  }

  componentDidMount() {
    // setInterval(() => this.setState({ name: "Max" }), 5000);
    console.log(`Mounted times: ${this.state.counter + 1}`);
  }

  componentDidUpdate() {
    console.log(`Updates times: ${this.state.counter + 1}`);
  }

  handleClick = () => {
    console.log(this.state, "First");
    this.setState((state) => ({ counter: state.counter + 1 }));
    console.log(this.state, "Second");
  };

  render() {
    return (
      <React.Fragment>
        {/* <Site name={this.state.name} /> */}
        <Site name="Google" />
        <Site name="Yandex" />
        <Site name="VK" />
        {/* <p onClick={this.handleClick.bind(this)}> */}
        <p onClick={this.handleClick}>counter: {this.state.counter}</p>
      </React.Fragment>
    );
  }
}

export default Lorem;
