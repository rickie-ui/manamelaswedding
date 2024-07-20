import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
import './index.css';
import Home from './pages/Home.jsx';
import Story from './pages/Story.jsx';
import Gallery from './pages/Gallery.jsx';
import Navbar from './shared/Navbar.jsx';
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
        path: 'story',
        element: <Story />,
      },
      {
        path: 'accomodation',
        element: <Accommodation />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      {
        path: 'registry',
        element: <Registry />,
      },
      {
        path: 'schedule',
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
