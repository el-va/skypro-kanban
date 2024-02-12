import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import PrivateRoute from "./pages/PrivateRoute";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import CardPage from "./pages/CardPage/CardPage";
import NotFound from "./pages/NotFound/NotFound";
import Exit from "./pages/Exit/Exit";
import AddCardPage from "./pages/AddCardPage/AddCardPage";
import { AppRoutes } from "./lib/AppRoutes";
import EditCard from "./pages/EditCard/EditCard";

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path={AppRoutes.HOME} element={<MainPage />}>
          <Route path={AppRoutes.ADD_CARD} element={<AddCardPage />} />
          <Route path={AppRoutes.EXIT} element={<Exit />} />
          <Route path={AppRoutes.CARD} element={<CardPage />} />
          <Route path={AppRoutes.EDIT_CARD} element={<EditCard />} />
        </Route>
      </Route>

      <Route path={AppRoutes.SIGNIN} element={<SignIn />} />
      <Route path={AppRoutes.SIGNUP} element={<SignUp />} />
      <Route path={AppRoutes.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}

export default App;
