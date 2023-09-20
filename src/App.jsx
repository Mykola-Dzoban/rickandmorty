import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./components/HomeLayout";
import Error from "./components/Error";
import Characters from "./components/Characters";
import Episodes from "./components/Episodes";
import Locations from "./components/Locations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Episodes />,
      },
      {
        path: "characters",
        element: <Characters />,
      },
      {
        path: "locations",
        element: <Locations />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
