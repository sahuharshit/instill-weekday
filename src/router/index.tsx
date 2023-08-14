import { RouteObject, useRoutes } from 'react-router-dom';
import { ROUTES } from '../constants/endpoint';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/notFound';

const allRoutes: RouteObject[] = [
  {
    path: ROUTES.APP_ROOT,
    element: <Dashboard />,
  },
  {
    path: '/*',
    element: <NotFound />,
  },
];

export default function Router() {
  const route = useRoutes(allRoutes);
  return route;
}
