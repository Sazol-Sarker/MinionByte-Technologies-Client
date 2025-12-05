import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../Components/ErrorPage/ErrorPage";


const router=createBrowserRouter([
{
    path:"/",
    errorElement:<ErrorPage></ErrorPage>,
    element:<Main></Main>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/about",
            element:<About></About>
        },
        {
            path:"/contact",
            element:<Contact></Contact>
        }
    ]
}
]);

export default router;