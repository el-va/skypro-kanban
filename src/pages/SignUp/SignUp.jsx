import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/Approutes";
import { useState } from "react";

export default function SignUp({ setAuth }) {

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
      login: event.target.value,
    });
  }

  function onPasswordChange(event) {
    setRegData({
      ...regData,
      password: event.target.value,
    });
  }

  return (
    <div className="wrapper">
      <div className="container-signup">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Регистрация</h2>
            </div>
            <form className="modal__form-login" id="formLogUp" action="#">
              <input
                className="modal__input first-name"
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
                value={regData.name}
                onChange={onNameChange}
              />
              <input
                className="modal__input login"
                type="text"
                name="login"
                id="loginReg"
                placeholder="Логин"
                value={regData.login}
                onChange={onLoginChange}
              />
              <input
                className="modal__input password-first"
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
                value={regData.password}
                onChange={onPasswordChange}
              />
              <button
                className="modal__btn-signup-ent _hover01"
                id="SignUpEnter"
                onClick={(event) => {
                  event.preventDefault();
                  setAuth(regData);
                }}
              >
				Зарегистрироваться
                {/* <a href="../main.html">Зарегистрироваться</a> */}
                {/* <Link to={AppRoutes.HOME}>Зарегистрироваться</Link> */}
              </button>
              <div className="modal__form-group">
                <p>
                  Уже есть аккаунт?
                  {/* <a href="signin.html">Войдите здесь</a> */}
                  <Link to={AppRoutes.SIGNIN}>Войдите здесь</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
