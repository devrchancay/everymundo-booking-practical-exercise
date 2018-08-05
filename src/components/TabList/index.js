import React, { Component } from 'react';

import Tab from './Tab';

class TabList extends Component {
  state = {
    active: 0,
  };
  render() {
    return (
      <ul className="flex w-full list-reset">
        {this.props.items &&
          this.props.items.map((item, index) => {
            return (
              <Tab key={index} active={this.state.active === index} {...item} />
            );
          })}
      </ul>
    );
  }
}

export default TabList;
