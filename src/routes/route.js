import Home from "../components/Home";
import Home1 from "../components/Home1";
import Login from "../components/Login"
const publicRoute = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/admin',
        component: Home1
    },
    {
        path: '/login',
        component: Login
    },
]
const privateRoute = [];

export { publicRoute, privateRoute };