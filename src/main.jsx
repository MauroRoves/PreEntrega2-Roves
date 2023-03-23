import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root'
/* import ItemDetailContainer from './components/ItemDetailContainer'; */
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemRoot from './routes/item';



//REACT ROUTER
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/category/:id",
    element: <Root />,
  },
  {
    path: "/item/:id",
    element: <ItemRoot/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
