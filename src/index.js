import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { newsData, teamsData } from './data/data';

ReactDOM.render(
  <React.StrictMode>
    <App newsData={newsData} teamsData={teamsData} />
  </React.StrictMode>,
  document.getElementById('root')
);

