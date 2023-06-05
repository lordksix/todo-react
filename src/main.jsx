import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import '@/styles/app.scss';

import TodoApp from '@/components/TodoApp';

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/todo-react/">
      <TodoApp />
    </BrowserRouter>
  </React.StrictMode>
);
