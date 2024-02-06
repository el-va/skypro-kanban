import useUser from "../hooks/UseUser";
import { AppRoutes } from "../lib/AppRoutes";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const { user } = useUser();
  return user ? <Outlet /> : <Navigate to={AppRoutes.SIGNIN} />;
}
