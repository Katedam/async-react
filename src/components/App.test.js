import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';


jest.mock('../services/rickAndMortyApi.js');

describe('App', () => {
  it('Snapshot matches App', () => {
    const tree = renderer.create(
      <App />
    ).toJSON();
  
    expect(tree).toMatchSnapshot();
  });
});
