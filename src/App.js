import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Grandpa from "./Components/Grandpa/Grandpa";
import Home from "./Components/Home/Home";
import Orders from "./Components/Orders/Orders";
import Main from "./Layouts/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", loader: () => fetch("tshirts.json"), element: <Home /> },
        {
          path: "/orders",

          element: <Orders />,
        },
        {
          path: "/grandpa",
          element: <Grandpa />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
