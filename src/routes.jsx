import App from "./App";
import Home from "./pages/home/home";
import First from "./pages/first/first";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/first",
        element: <First />,
      },
    ],
  },
];

export default routes;
