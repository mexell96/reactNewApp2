import React from "react";
import axios from "axios";
import User from "./components/User";

const api = "https://600bdbcf38fd25001702cc2a.mockapi.io/";
const usersAPI = `${api}users`;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      warning: "",
    };
  }

  componentDidMount() {
    axios.get(usersAPI).then(({ data }) => {
      console.log(data);
      this.setState({ users: data }); // в users кладём data
    });
  }

  componentDidUpdate() {
    console.log(this.state.users);
    if (this.state.users.length < 6 && this.state.users.length !== 0) {
      this.setState({ warning: "You have deleted a lot of users!!!!" });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.users.length === nextState.users.length) {
      return false;
    }
    return true;
  }

  handleClick = (e) => {
    const { users } = this.state;
    const newUsers = [...users];
    newUsers.pop();
    this.setState({ users: newUsers });
  };

  render() {
    const { users, warning } = this.state;
    return (
      <>
        <button onClick={this.handleClick}>Delete last user</button>
        <div>Users count: {users.length}</div>
        {!!warning && <p className="title">{warning}</p>}
        <ul>
          {users.length > 0
            ? users.map((user) => (
                <User
                  key={user.id}
                  name={user.name}
                  avatar={user.avatar}
                  info={user.info}
                />
              ))
            : "no users"}
        </ul>
      </>
    );
  }
}

export default App;
