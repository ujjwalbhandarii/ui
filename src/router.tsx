import { createBrowserRouter } from 'react-router-dom';

export const routerRoutes = createBrowserRouter([
  {
    path: '/',
    element: (
      <main className='ml-4 flex h-24 border-2 border-gray-300 p-3 text-gray-700 shadow-md'></main>
    ),
  },
]);
