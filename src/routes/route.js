import Home from "../components/Home";
import Home1 from "../components/Home1";
import Login from "../components/Login"
import TypeCoffe from "../views/admin/TypeCoffee";
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
    {
        path: '/admin/typecoffee',
        component: TypeCoffe
    },
]
const privateRoute = [];

export { publicRoute, privateRoute };