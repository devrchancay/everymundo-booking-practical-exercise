import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import TabList from "./components/TabList";
import TabContent from "./components/TabContent";
import data from "./components/TabList/data";
import * as actionsCreators from "./actions/actionsCreators";
import "./App.css";

const mapStateToProps = state => ({
  booking: state.booking
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...actionsCreators.booking
    },
    dispatch
  );

class App extends Component {
  render() {
    return (
      <div>
        {this.props.booking.loading && (
          <div className="flex justify-center items-center z-20 bg-lightDark absolute pin-t pin-l w-full h-full">
            <div className="w-1/2 h-1/2">
              <h1 className="text-white text-center">
                We're almost ready for takeoff
              </h1>
            </div>
          </div>
        )}
        <TabList items={data} />
        <TabContent {...this.props} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
