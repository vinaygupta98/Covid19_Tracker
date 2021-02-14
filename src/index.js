import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import   Data from "./data";
import Chart from "./chart"

ReactDOM.render(<>
<Data/>
<App/>
  <Chart/>
</>
,
  document.getElementById('root')
);