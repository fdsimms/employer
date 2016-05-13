import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { fetchEmployeesIfNeeded } from "../actions";
import EmployeesIndex from "../components/employeesIndex";
import Header from "../components/header";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchEmployeesIfNeeded());
  }

  render() {
    const { isFetching, items } = this.props;
    let toRender;
    if (isFetching) {

    } else {
      toRender = <EmployeesIndex employees={items} />;
    }

    return (
      <div className="app">
        <Header />
        {toRender}
      </div>
    );
  }
}

App.propTypes = {
  items: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { employees } = state;
  const {
    isFetching,
    items
  } = employees || { isFetching: true };

  return {
    items,
    isFetching
  };
}


export default connect(mapStateToProps)(App);
