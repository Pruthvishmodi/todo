import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import './style.css';

const container = document.getElementById('root');
const root = createRoot(container);

// App.getDerivedStateFromProps = () => {
//   console.log(document.getElementById('heading'));
//   console.log('getDerivedStateFromProps');
//   return {
//     message: 'I am calling you from outside',
//   };
// };

root.render(<App />);
