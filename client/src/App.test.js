import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import NavBar from './Components/NavBar';
import PlayersCard from './Components/PlayersCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('renders Nav Bar without crashing', () => {
  render(<NavBar/>);
});

test('renders Nav Bar title without crashing', () => {
  const { getByText } = render(<NavBar/>);
  getByText(/List of Women's World Cup players ranked by search interest from Google Trends, June-July 2019/i);
});
