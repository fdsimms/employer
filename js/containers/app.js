import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { fetchEmployeesIfNeeded } from "../actions";
import Header from "../components/header";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchEmployeesIfNeeded());
  }

  render() {
    return (
      <div className="app">
        <Header />
      </div>
    );
  }
}

App.propTypes = {
  items: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { employees } = state;
  const {
    isFetching,
    lastUpdated,
    items
  } = employees || { isFetching: true };

  return {
    items,
    isFetching,
    lastUpdated
  };
}


export default connect(mapStateToProps)(App);
