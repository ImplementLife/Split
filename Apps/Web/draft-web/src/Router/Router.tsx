import LogIn from "../Components/Pages/LogIn";
import Main from "../Components/Pages/Main";

export const publicRoutes = [
    {path: '/login', component: LogIn, exact:true}
]

export const privateRoutes = [
    {path: '/main', component: Main, exact:true}
]