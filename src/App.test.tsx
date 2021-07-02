import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

test('App.tsx', () => {
  expect(shallow(<App />)).toMatchSnapshot();
});
