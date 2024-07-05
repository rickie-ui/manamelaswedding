import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
import './index.css';
import Home from './pages/Home.jsx';
import Story from './pages/Story.jsx';
import Navbar from './components/Navbar.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Accommodation from './pages/Accomodation.jsx';
import Registry from './pages/Registry.jsx';
import Schedule from './pages/Schedule.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'Story',
        element: <Story />,
      },
      {
        path: 'Accomodation',
        element: <Accommodation />,
      },
      {
        path: 'Registry',
        element: <Registry />,
      },
      {
        path: 'Schedule',
        element: <Schedule />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
