import { ListPage } from "./components/ListPage/ListPage";
import { HomePage } from "./routes/HomePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./routes/Layout/Layout";
import { SinglePage } from "./routes/SinglePage/SinglePage";
import { ProfilePage } from "./components/ProfilePage/ProfilePage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },

        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
