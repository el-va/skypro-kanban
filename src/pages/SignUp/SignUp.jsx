import { AppRoutes } from "../../lib/AppRoutes";
import { useState } from "react";
import {
  ContainerSign,
  ModalBlockSign,
  ModalBtnEnterSign,
  ModalFormGroupSign,
  ModalFormGroupSignLink,
  ModalFormGroupSignP,
  ModalFormSign,
  ModalInputSign,
  ModalInputSignPass,
  ModalSign,
  ModalTtlSign,
  WrapperSign,
} from "../SignIn/Sign.styled";

export default function SignUp({ setReg }) {
  const [regData, setRegData] = useState({
    login: "",
    name: "",
    password: "",
  });

  function onLoginChange(event) {
    setRegData({
      ...regData,
      login: event.target.value,
    });
  }

  function onNameChange(event) {
    setRegData({
      ...regData,
      name: event.target.value,
    });
  }

  function onPasswordChange(event) {
    setRegData({
      ...regData,
      password: event.target.value,
    });
  }

  return (
    <WrapperSign>
      <ContainerSign>
        <ModalSign>
          <ModalBlockSign>
            <ModalTtlSign>Регистрация</ModalTtlSign>
            <ModalFormSign id="formLogUp" action="#">
              <ModalInputSign
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
                value={regData.name}
                onChange={onNameChange}
              />
              <ModalInputSign
                type="text"
                name="login"
                id="loginReg"
                placeholder="Логин"
                value={regData.login}
                onChange={onLoginChange}
              />
              <ModalInputSignPass
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
                value={regData.password}
                onChange={onPasswordChange}
              />
              <ModalBtnEnterSign
                id="SignUpEnter"
                onClick={(event) => {
                  event.preventDefault();
                  setReg(regData);
                }}
              >
                Зарегистрироваться
              </ModalBtnEnterSign>
              <ModalFormGroupSign>
                <ModalFormGroupSignP>
                  Уже есть аккаунт?
                  <ModalFormGroupSignLink to={AppRoutes.SIGNIN}>
                    Войдите здесь
                  </ModalFormGroupSignLink>
                </ModalFormGroupSignP>
              </ModalFormGroupSign>
            </ModalFormSign>
          </ModalBlockSign>
        </ModalSign>
      </ContainerSign>
    </WrapperSign>
  );
}
