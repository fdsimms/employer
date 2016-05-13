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
    let index1,
        index2;

    if (isFetching) {

    } else {
      index1 = <EmployeesIndex employees={items.slice(0, 5)} />;
      index2 = <EmployeesIndex employees={items.slice(5)} />;
    }

    return (
      <div className="app">
        <Header />
        <main>
          <div className="employees-blurb">
            At Employer, we value our amazing turnover rate. Go ahead,
            hit refresh and check it out. You won't recognize a single
            employee, because we've already hired a new crew.
          </div>
          <div className="employee-indices">
            {index1}
            {index2}
          </div>
        </main>
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
