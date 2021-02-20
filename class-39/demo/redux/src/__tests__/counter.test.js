/*
  Functional Component Tests:

  When testing components, we're primarily concerned that they
  render the proper markup given a set of props

  Should a component invoke an action or method on some interaction,
  simulate that, and then assert both on the state of state as
  well as the updated DOM
*/

import React from 'react';
import { Provider } from 'react-redux';
import Counter from '../components/counter.js';

import createStore from '../store';

describe('Counter component', () => {
  it('contains a span with the current count', () => {
    let store = createStore();
    let component = mount(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    expect(component.find('span.counter').exists()).toBeTruthy();
    expect(component.find('span.counter').text()).toEqual('0');
  });

  it('changes the view and state when the increment action is dispatched', () => {
    let store = createStore();
    let component = mount(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    let increment = component.find('button.increment');
    increment.simulate('click');

    expect(component.find('span.counter.positive').exists()).toBeTruthy();
    expect(component.find('span.counter').text()).toEqual('1');
  });

  it('changes the view and state when the decrement action is dispatched', () => {
    let store = createStore();
    let component = mount(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    let decrement = component.find('button.decrement');
    decrement.simulate('click');

    expect(component.find('span.counter.negative').exists()).toBeTruthy();
    expect(component.find('span.counter').text()).toEqual('-1');
  });

  it('changes the view and state when the reset action is dispatched', () => {
    let store = createStore();
    let component = mount(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    let reset = component.find('button.reset');
    let increment = component.find('button.increment');
    increment.simulate('click');
    increment.simulate('click');
    increment.simulate('click');

    expect(component.find('span.counter.positive').exists()).toBeTruthy();
    expect(component.find('span.counter').text()).toEqual('3');

    reset.simulate('click');
    expect(component.find('span.counter').exists()).toBeTruthy();
    expect(component.find('span.counter.positive').exists()).toBeFalsy();
    expect(component.find('span.counter.negative').exists()).toBeFalsy();
    expect(component.find('span.counter').text()).toEqual('0');
  });
});
