import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { UglyThingsContextProvider } from './Components/UglyThingsContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UglyThingsContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UglyThingsContextProvider>
);
