import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import './style.css';
import { ThemeProvider } from './context/theme';
import { TodoProvider } from './context/todo';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
root.render(
  <ThemeProvider>
    <TodoProvider>
      <App />
    </TodoProvider>
  </ThemeProvider>
);

// App.getDerivedStateFromProps = () => {
//   console.log(document.getElementById('heading'));
//   console.log('getDerivedStateFromProps');
//   return {
//     message: 'I am calling you from outside',
//   };
// };

root.render(<App />);
