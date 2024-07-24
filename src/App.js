// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './Utils/Store';
import Heads from './components/Heads';
import Body from './components/Body';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from "./components/MainContainer";
import WatchPage from './components/WatchPage';

const  appRouter =  createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"watch",
        element:<WatchPage/>
      },

  ]
}])


function App() {
  return (
    <Provider store={store}>
      <div>
        <Heads />
          <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}


export default App;
