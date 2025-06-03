// src/routes/routeConfig.js
import Home from '../pages/Home';
import HallOfFame from '../pages/HallOfFame';
import Betrayers from '../pages/Betrayers/Betrayers';
import NotFound from '../pages/NotFound';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/hall-of-fame', element: <HallOfFame /> },
  { path: '/betrayers', element: <Betrayers /> },
  { path: '*', element: <NotFound /> },
];

export default routes;