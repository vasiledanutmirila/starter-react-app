import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const tachyonsLink = document.createElement('link');
tachyonsLink.rel = 'stylesheet';
document.head.appendChild(tachyonsLink);
tachyonsLink.href = "https://unpkg.com/tachyons@4/css/tachyons.min.css";

const cssLink = document.createElement('link');
cssLink.rel = 'stylesheet';
document.head.appendChild(cssLink);
cssLink.href = "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"

document.body.style.touchAction = 'none';

const root = ReactDOM.createRoot(document.getElementById('root'));
const rootElement = document.getElementById('root');
rootElement.className = 'h-100';

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
