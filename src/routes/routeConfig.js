// src/routes/routeConfig.js
import Home from '../pages/Home';
import HallOfFame from '../pages/HallOfFame';
import Betrayers from '../pages/Betrayers/Betrayers';
import NotFound from '../pages/NotFound';
import Coaches from '../pages/Coaches';
import Merchandise from '../pages/Merchandise/Merchandise';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/hall-of-fame', element: <HallOfFame /> },
  { path: '/betrayers', element: <Betrayers /> },
  { path: '/coaches', element: <Coaches />},
  { path: '/merchandise', element: <Merchandise />},
  { path: '*', element: <NotFound /> },
];

export default routes;