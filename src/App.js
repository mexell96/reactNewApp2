import React from "react";
import axios from "axios";
import Queries from "./components/Queries.jsx";

const api = "https://5f22f8cf0e9f660016d88b17.mockapi.io/";
const queriesAPI = `${api}queries`;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queries: [],
      warning: "",
    };
  }

  componentDidMount() {
    axios.get(queriesAPI).then(({ data }) => {
      console.log(data);
      this.setState({ queries: data }); // в queries кладём data
    });
  }

  componentDidUpdate() {
    console.log(this.state.queries);
    if (this.state.queries.length < 6 && this.state.queries.length !== 0) {
      this.setState({ warning: "You have deleted a lot of queries!!!!" });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.queries.length === nextState.queries.length) {
      return false;
    }
    return true;
  }

  handleClick = (e) => {
    const { queries } = this.state;
    const newQueries = [...queries];
    newQueries.pop();
    this.setState({ queries: newQueries });
  };

  render() {
    const { queries, warning } = this.state;
    return (
      <>
        <button onClick={this.handleClick}>Delete last query</button>
        <div>Queries count: {queries.length}</div>
        {!!warning && <p className="title">{warning}</p>}
        <ul>
          {queries.length > 0
            ? queries.map((query) => (
                <Queries
                  key={query.id}
                  query={query.query}
                  description={query.description}
                  link={query.link}
                />
              ))
            : "no queries"}
        </ul>
      </>
    );
  }
}

export default App;
