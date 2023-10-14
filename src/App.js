import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Home from './pages/Home'
import About from './pages/About'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home></Home>,
    },
    {
      path: "about",
      element:<About/>,
    },
  ]);
  

  return (
      <RouterProvider router={router} />
  );
}

export default App;
