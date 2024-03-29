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
import { loginUser, regUser } from "./Api";

function App() {
  let navigate = useNavigate();

  // const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
  const [user, setUser] = useState(localStorage.getItem("user"));
  async function setAuth(loginData) {
    await loginUser(loginData).then((data) => {
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(JSON.parse(localStorage.getItem("user")));
      navigate(AppRoutes.HOME);
    });
  }

  async function setReg(regData) {
    await regUser(regData).then((data) => {
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(JSON.parse(localStorage.getItem("user")));
      navigate(AppRoutes.HOME);
    });
  }

  function exit() {
    localStorage.removeItem("user");
    setUser(null);
    navigate(AppRoutes.SIGNIN);
  }

  // const [isAuth, setIsAuth] = useState(localStorage.getItem('token'));

  // function exitAuth() {
  //   localStorage.removeItem('token')
  //   setIsAuth(false);
  //   navigate(AppRoutes.SIGNIN)
  // }
  // function loginAuth() {
  //   localStorage.setItem('token', '123456')
  //   setIsAuth(localStorage.getItem('token'));
  //   navigate(AppRoutes.HOME)
  // }

  return (
    //     <Routes>
    //       <Route path={AppRoutes.HOME} element={<PrivateRoute isAuth={user}><MainPage /></ PrivateRoute >}></Route>
    //       <Route path={AppRoutes.EXIT} element={<PrivateRoute isAuth={user}><Exit exit={exit}/></ PrivateRoute >}></Route>
    //       <Route path={AppRoutes.CARD} element={<PrivateRoute isAuth={user}><CardPage /></ PrivateRoute >}></Route>

    //         <Route path={AppRoutes.SIGNIN} element={<SignIn setAuth={setAuth} />} />
    //         <Route path={AppRoutes.SIGNUP} element={<SignUp setReg={setReg} />} />
    //         <Route path={AppRoutes.NOT_FOUND} element={<NotFound />} />
    //     </Routes>

    // );
    // }
    /* <Routes>
<Route path={AppRoutes.HOME} element={<PrivateRoute isAuth={isAuth}><MainPage /></ PrivateRoute >}></Route>
<Route path={AppRoutes.EXIT} element={<Exit exitAuth={exitAuth} />}></Route>
<Route path={AppRoutes.CARD} element={<CardPage />}></Route>

  <Route path={AppRoutes.SIGNIN} element={<SignIn loginAuth={loginAuth} />} />
  <Route path={AppRoutes.SIGNUP} element={<SignUp loginAuth={loginAuth} />} />
  <Route path={AppRoutes.NOT_FOUND} element={<NotFound />} />
</Routes> */

    <Routes>
      <Route element={<PrivateRoute isAuth={user} />}>
        <Route path={AppRoutes.HOME} element={<MainPage />} />
        <Route path={AppRoutes.EXIT} element={<Exit exit={exit} />} />
        <Route path={AppRoutes.CARD} element={<CardPage />} />
      </Route>
      <Route path={AppRoutes.SIGNIN} element={<SignIn setAuth={setAuth} />} />
      <Route path={AppRoutes.SIGNUP} element={<SignUp setReg={setReg} />} />
      <Route path={AppRoutes.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}

export default App;
