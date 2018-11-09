import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './assets/css/style.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 

ReactDOM.render(
  <App />,
    document.getElementById('app')
);

export default App;
