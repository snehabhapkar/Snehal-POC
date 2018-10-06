import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import Search from '../src/components/search';
import stubData from './stubs/search-data.json';
import constantStub from '../src/ref-data/application-constants';

import './setup';
const defaultProps = {
	searchData: stubData.resultData,
	filterOptions: constantStub.FILTER_OPTIONS
}
let component

beforeEach(() => {
	component = mount(<Search {...defaultProps}/>);
})

test('should render', () => {
  const component = renderer.create(<Search {...defaultProps}/>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('should count hotel records', () => {
  const wrapper = component.find('.hotel-count')
  expect(wrapper.text()).toBe('2 hotels in Sydney');
});

test('should sort data in ascending order when sorted low to high', () => {
  const wrapper = component.find('.filter-data')
  wrapper.simulate('change', {target: {value: 'lowToHigh'}})
  expect(component.state().searchData).toEqual(stubData.lowToHigh);
});

test('should sort data in descending order when sorted high to low', () => {
  const wrapper = component.find('.filter-data')
  wrapper.simulate('change', {target: {value: 'highToLow'}})
  expect(component.state().searchData).toEqual(stubData.highToLow);
});

test('should render free cancellation element if freeCancellation true', () => {
  const wrapper = component.find('.item-cancellation')
  expect(wrapper.length).toEqual(1);
});


