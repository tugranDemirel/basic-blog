import {
    createBrowserRouter,
    RouterProvider,
    Route
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Home page</div>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/login',
        element: <Login/>
    },
])


function App() {
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
