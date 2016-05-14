import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { fetchEmployeesIfNeeded } from "../employeeActions";
import EmployeesIndex from "../components/employeesIndex";
import Header from "../components/header";
import ModalContainer from "./modalContainer";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchEmployeesIfNeeded());
  }

  render() {
    const { isFetching, items, modal } = this.props;
    let index1,
        index2,
        spinner;

    if (isFetching) {
      spinner = <i className="fa-spin spinner fa-cog fa"></i>;
    } else {
      index1 = <EmployeesIndex employees={items.slice(0, 5)} />;
      index2 = <EmployeesIndex employees={items.slice(5)} />;
    }

    return (
      <div className="app">
        <ModalContainer employeeId={modal.employeeId}/>
        <Header />
        <main>
          <p className="employees-blurb">
            At Employer, we value our amazing turnover rate. Go ahead,
            hit refresh and check it out. You won't recognize a single
            employee, because we'll have hired a new crew by then. And feel
            free to swap two employees' jobs by dragging and dropping.
            They'll love that.
          </p>
          <div className="employee-indices">
            {spinner}
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
  modal: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { employees, modal } = state;
  const {
    isFetching,
    items
  } = employees || { isFetching: true };

  return {
    items,
    modal,
    isFetching
  };
}

const appWithContext = DragDropContext(HTML5Backend)(App);
export default connect(mapStateToProps)(appWithContext);
