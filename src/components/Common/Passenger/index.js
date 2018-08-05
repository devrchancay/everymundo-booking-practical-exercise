import React, { Component } from "react";
import Chooser from "./Chooser";

class Passenger extends Component {
  componentDidMount() {
    this.props.fetchTypePassenger();
  }

  toogleChooser() {
    this.props.toggleInput();
  }

  increment(key) {
    this.props.incrementPassenger(key);
    this.props.calculateTotal();
  }

  decrement(key) {
    const min = key === "adult" ? 1 : 0;
    if (this.props.booking.passengers[key] > min) {
      this.props.decrementPassenger(key);
      this.props.calculateTotal();
    }
  }

  render() {
    return (
      <Chooser
        toogleChooser={this.toogleChooser.bind(this)}
        increment={this.increment.bind(this)}
        decrement={this.decrement.bind(this)}
        isOpen={this.props.booking.passengers.isOpen}
        passengers={this.props.booking.passengers}
      />
    );
  }
}

export default Passenger;
