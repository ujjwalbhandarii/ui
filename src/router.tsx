import { createBrowserRouter } from 'react-router-dom';

import { HomePage } from '@/features';

export const routerRoutes = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
]);
