import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { fetchEmployeesIfNeeded } from "../actions";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchEmployeesIfNeeded());
  }

  render() {
    const { items, isFetching } = this.props;

    return (
      <div className="app">
        { items[0] && items[0].username }
        { items.length }
        { String(isFetching) }
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
