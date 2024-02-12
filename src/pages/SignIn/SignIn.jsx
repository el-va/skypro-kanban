import { AppRoutes } from "../../lib/AppRoutes";
import { useState } from "react";
import { loginUser } from "../../Api";
import useUser from "../../hooks/UseUser";
// import "./signin.css";
import {
  ContainerSign,
  ModalBlockSign,
  ModalBtnEnterSign,
  ModalFormGroupSign,
  ModalFormGroupSignLink,
  ModalFormGroupSignP,
  ModalFormSign,
  ModalInputSign,
  ModalSign,
  ModalTtlSign,
  WrapperSign,
} from "./Sign.styled";

export default function SignIn() {
  const { login } = useUser();

  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
  });

  function setAuth(loginData) {
    loginUser(loginData).then((data) => {
      login(data.user);
    });
  }

  function onLoginChange(event) {
    setLoginData({
      ...loginData,
      login: event.target.value,
    });
  }

  function onPasswordChange(event) {
    setLoginData({
      ...loginData,
      password: event.target.value,
    });
  }

  return (
    <WrapperSign>
      <ContainerSign>
        <ModalSign>
          <ModalBlockSign>
            <ModalTtlSign>Вход</ModalTtlSign>
            <ModalFormSign id="formLogIn" action="#">
              <ModalInputSign
                type="text"
                name="login"
                id="formlogin"
                placeholder="Логин"
                value={loginData.login}
                onChange={onLoginChange}
              />

              <ModalInputSign
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                value={loginData.password}
                onChange={onPasswordChange}
              />
              <ModalBtnEnterSign
                id="btnEnter"
                onClick={(event) => {
                  event.preventDefault();
                  setAuth(loginData);
                }}
              >
                Войти
              </ModalBtnEnterSign>
              <ModalFormGroupSign>
                <ModalFormGroupSignP>
                  Нужно зарегистрироваться?
                </ModalFormGroupSignP>
                <ModalFormGroupSignLink to={AppRoutes.SIGNUP}>
                  Регистрируйтесь здесь
                </ModalFormGroupSignLink>
              </ModalFormGroupSign>
            </ModalFormSign>
          </ModalBlockSign>
        </ModalSign>
      </ContainerSign>
    </WrapperSign>
  );
}
