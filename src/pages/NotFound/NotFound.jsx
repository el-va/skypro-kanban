import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/AppRoutes";

export default function NotFound() {
  return (
    <div className="wrapper">
      <div className="container-signup">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Страница не найдена</h2>
            </div>
            <form className="modal__form-login" id="formLogUp" action="#">
              <button
                className="modal__btn-signup-ent _hover01"
                id="SignUpEnter"
              >
                <Link to={AppRoutes.HOME}>На главную</Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
