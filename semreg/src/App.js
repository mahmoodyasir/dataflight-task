import { BrowserRouter as Router, Routes,Route, createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from "./Components/HomePage";
import Registration from "./Components/Registration";
import Main from "./Components/Layout/Main";
import Login from "./Components/Login";
function App() {

    const rounter = createBrowserRouter([
        {
            path: "/",
            element: <Main/>,
            children: [
                {
                    path: "/",
                    element: <Login/>,
                },
                {
                    path: "/login",
                    element: <Login/>,
                },
                {
                    path: '/registration',
                    element: <Registration/>
                }
            ]
        }
    ])

  return (
    <div className="">
        <RouterProvider router={rounter}>

        </RouterProvider>
    </div>
  );
}

export default App;
