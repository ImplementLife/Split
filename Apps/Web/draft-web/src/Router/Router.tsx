import LogIn from "../Components/LogIn";
import Main from "../Components/Main";

export const publicRoutes = [
    {path: '/login', component: LogIn, exact:true}
]

export const privateRoutes = [
    {path: '/main', component: Main, exact:true}
]