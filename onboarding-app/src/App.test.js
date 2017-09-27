import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import nock from 'nock';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('fetch initial something', () => {
  const scope = nock("https://api.github.com")
  .get("/search/users?q=ondrej")
  .reply(200, "domain matched");
})

it('don\'t fetch something', () => {
  const scope = nock("https://api.github.com")
  .get("/search/users?")
  .reply(422);
})
