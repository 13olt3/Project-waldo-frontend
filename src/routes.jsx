import App from "./App";
import Home from "./pages/home/home";
import First from "./pages/first/first";
import FirstPreround from "./pages/firstPreround/firstPreround";
import Scoreboard from "./pages/scoreboard/scoreboard";

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
      {
        path: "/firstpreround",
        element: <FirstPreround />,
      },
      {
        path: "/scoreboard",
        element: <Scoreboard />,
      },
    ],
  },
];

export default routes;
