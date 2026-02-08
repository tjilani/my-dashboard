import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavigationLayout from "./pages/NavigationLayout";
import Home from "./pages/Home";
import BooksOverview from "./pages/BooksOverview";
import ErrorPage from "./pages/ErrorPage";
import BookDetail from "./pages/BookDetail";
import CSSOverview from "./pages/CSSOverview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavigationLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/books",
        element: <BooksOverview />,
      },
      {
        path: "/books/:id",
        element: <BookDetail />,
      },
      {
        path: "/css",
        element: <CSSOverview />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
