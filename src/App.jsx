import "./App.css";
import { AppRoutes } from "./lib/Approutes";
import { Routes, Route, useNavigate } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import PrivateRoute from "./pages/PrivateRoute";
import { useState } from "react";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import CardPage from "./pages/CardPage/CardPage";
import NotFound from "./pages/NotFound/NotFound";
import Exit from "./pages/Exit/Exit";


function App() {

  let navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(localStorage.getItem('token'));

  function exitAuth() {
    localStorage.removeItem('token')
    setIsAuth(false);
    navigate(AppRoutes.SIGNIN)
  }
  function loginAuth() {
    localStorage.setItem('token', '123456')
    setIsAuth(localStorage.getItem('token'));
    navigate(AppRoutes.HOME)
  }
  
  return (

    <Routes>
      <Route path={AppRoutes.HOME} element={<PrivateRoute isAuth={isAuth}><MainPage /></ PrivateRoute >}></Route>
      <Route path={AppRoutes.EXIT} element={<PrivateRoute isAuth={isAuth}><Exit exitAuth={exitAuth} /></ PrivateRoute >}></Route>
      <Route path={AppRoutes.CARD} element={<PrivateRoute isAuth={isAuth}><CardPage /></ PrivateRoute >}></Route>
    
        <Route path={AppRoutes.SIGNIN} element={<SignIn loginAuth={loginAuth} />} />
        <Route path={AppRoutes.SIGNUP} element={<SignUp loginAuth={loginAuth} />} />
        <Route path={AppRoutes.NOT_FOUND} element={<NotFound />} />
    </Routes>

);
}
/* <Routes>
<Route path={AppRoutes.HOME} element={<PrivateRoute isAuth={isAuth}><MainPage /></ PrivateRoute >}></Route>
<Route path={AppRoutes.EXIT} element={<Exit exitAuth={exitAuth} />}></Route>
<Route path={AppRoutes.CARD} element={<CardPage />}></Route>

  <Route path={AppRoutes.SIGNIN} element={<SignIn loginAuth={loginAuth} />} />
  <Route path={AppRoutes.SIGNUP} element={<SignUp loginAuth={loginAuth} />} />
  <Route path={AppRoutes.NOT_FOUND} element={<NotFound />} />
</Routes> */
  

//     <Routes>
//       <Route element={<PrivateRoute />}>
//         <Route path={AppRoutes.HOME} element={<MainPage />} />
//         <Route path={AppRoutes.EXIT} element={<Exit  />} />
//         <Route path={AppRoutes.CARD} element={<CardPage />} />
//         </Route>
//     <Route path={AppRoutes.SIGNIN} element={<SignIn  />} />
//     <Route path={AppRoutes.SIGNUP} element={<SignUp  />} />
//     <Route path={AppRoutes.NOT_FOUND} element={<NotFound />} />
// </Routes>
//   )
// }

export default App;