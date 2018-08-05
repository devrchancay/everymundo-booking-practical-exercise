import React from 'react';
import { render } from 'enzyme';

import data from '../../components/TabList/data';
import TabList from '../../components/TabList';

describe('TabList', () => {
  it('Counting the initial elements', () => {
    const wrapper = render(<TabList items={data} />);
    expect(wrapper.find('li')).toHaveLength(4);
  });

  it('Only one active tab', () => {
    const wrapper = render(<TabList items={data} />);
    expect(wrapper.find('.active')).toHaveLength(1);
  });

  it('List of empty tabs', () => {
    const wrapper = render(<TabList items={null} />);
    expect(wrapper.find('li')).toHaveLength(0);
  });

  it('All tabs should have icons', () => {
    const wrapper = render(<TabList items={data} />);
    expect(wrapper.find('li .ico')).toHaveLength(4);
  });
});
