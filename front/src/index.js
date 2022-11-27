import React from 'react';
import ReactDOM from 'react-dom/client';
import "./reset.css";
import router from './router';
import { RouterProvider } from 'react-router-dom';

import App from './component/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);


