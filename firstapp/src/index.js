import React from 'react'; /// create the components
import ReactDOM from 'react-dom/client';/// gives the tools to show componemet

import App from './App';  // UI component u created


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);


