import React, { Component } from "react";
import Direction from "../Common/Direction";
import Dates from "../Common/Dates";
import Passenger from "../Common/Passenger";
import Links from "../Common/Links";
class TabContent extends Component {
  componentDidMount() {
    this.props.fetchLocations();
  }

  changeLocation(input, value) {
    this.props.setLocationInput(input, value);
  }

  onSubmit(evt) {
    evt.preventDefault();
    const { from, to } = this.props.booking.locations;
    const { adult, infant, child } = this.props.booking.passengers;
    const { outBoundFlight, returnFlight } = this.props.booking.dates;

    if (!to) {
      alert("Location to required");
    } else {
      this.props.buildUrl({
        from,
        to,
        adult,
        infant,
        child,
        outBoundFlight,
        returnFlight
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className="flex flex-col bg-gray ml-1 p-8">
          <div className="flex flex-col md:flex-row justify-between w-full">
            <div className="w-full my-1 md:my-0 md:w-1/3 mx-1 flex relative">
              {this.props.booking.locations.data.length > 0 && (
                <Direction
                  onChangeInput={this.changeLocation.bind(this)}
                  to={this.props.booking.locations.to}
                  from={this.props.booking.locations.from}
                  items={this.props.booking.locations.data}
                />
              )}
            </div>
            <div className="w-full my-1 md:my-0 md:w-1/3 mx-1 relative">
              <Dates {...this.props} />
            </div>
            <div className="w-full my-1 md:my-0 md:w-1/3 mx-1 relative">
              <Passenger {...this.props} />
            </div>
          </div>
          <div className="flex w-full py-4 ">
            <div className="hidden md:block w-2/3">
              <div className="flex w-full pt-4">
                <Links />
              </div>
            </div>
            <div className="px-0 w-full md:w-1/3 md:px-1">
              <button
                onSubmit={() => {}}
                type="submit"
                className="w-full button-find"
              >
                Find
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default TabContent;
