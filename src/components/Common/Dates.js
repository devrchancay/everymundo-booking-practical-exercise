import React, { Component } from "react";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

class ArrowElement extends Component {
  state = {
    type: false
  };
  toggleInput() {
    this.setState(state => ({
      type: !state.type
    }));

    if (!this.state.type) {
      this.props.setDefaultDates(this.props.outBoundFlight, null);
    } else {
      this.props.setDefaultDates(
        this.props.outBoundFlight,
        moment().add(8, "days")
      );
    }
  }
  render() {
    return (
      <div className="cursor-pointer flight-container flex">
        <span
          onClick={() => {
            this.toggleInput();
          }}
          className={`flight-in ${this.state.type ? "bg-red" : "bg-white"}`}
        >
          <span className={`flight-in ${this.state.type ? "active" : ""}`} />
        </span>
        <span
          onClick={() => {
            this.toggleInput();
          }}
          className={`flight-out ${!this.state.type ? "bg-red" : "bg-white"}`}
        >
          <span className={`flight-in ${!this.state.type ? "active" : ""}`} />
        </span>
      </div>
    );
  }
}

export const WrapperDatePicker = ({
  outBoundFlight,
  returnFlight,
  setDefaultDates,
  setFocusedInput,
  focusedInput
}) => (
  <DateRangePicker
    startDate={outBoundFlight}
    startDateId="START_DATE"
    startDatePlaceholderText="Outbound flight"
    endDate={returnFlight}
    endDateId="END_DATE"
    orientation="horizontal"
    endDatePlaceholderText="Return flight"
    onDatesChange={({ startDate, endDate }) => {
      setDefaultDates(startDate, endDate);
    }}
    focusedInput={focusedInput}
    onFocusChange={focusedInput => {
      setFocusedInput(focusedInput);
    }}
    customArrowIcon={
      <ArrowElement
        outBoundFlight={outBoundFlight}
        setDefaultDates={setDefaultDates}
      />
    }
  />
);

class Dates extends Component {
  componentDidMount() {
    this.props.setDates();
  }

  render() {
    const {
      outBoundFlight,
      returnFlight,
      focusedInput
    } = this.props.booking.dates;
    const { setFocusedInput, setDefaultDates } = this.props;

    return (
      <WrapperDatePicker
        focusedInput={focusedInput}
        setFocusedInput={setFocusedInput}
        setDefaultDates={setDefaultDates}
        outBoundFlight={outBoundFlight}
        returnFlight={returnFlight}
      />
    );
  }
}

export default Dates;
