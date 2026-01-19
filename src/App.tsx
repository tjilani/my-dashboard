import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import BooksOverview from './pages/BooksOverview'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/books',
    element: <BooksOverview />
  }
])


function App() {
  return <RouterProvider router={router} />
}

export default App
