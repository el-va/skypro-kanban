// import { PopExitPop, PopExitBlock, PopExitContainer, PopExitTtl, PopExitFormGroup, PopExitYes, PopExitYesA, PopExitNo, PopExitNoA } from "./PopExit.styled";

// import { useNavigate } from "react-router-dom";
// import { AppRoutes } from "../../lib/Approutes";
import { Link } from "react-router-dom";
import useUser from "../../hooks/UseUser";
import { AppRoutes } from "../../lib/AppRoutes";

export default function PopExit() {

  const {logout}=useUser()
  // const navigate = useNavigate();

  // function exitNo(e) {
  //   e.preventDefault();
  //   navigate(AppRoutes.HOME);
  // }

  return (
    //   <PopExitPop>
    //   <PopExitContainer>
    //     <PopExitBlock>
    //       <PopExitTtl>
    //         <h2>Выйти из аккаунта?</h2>
    //       </PopExitTtl>
    //       <PopExitFormGroup id="formExit" action="#">
    //         <PopExitFormGroup>
    //           <PopExitYes><PopExitYesA href="modal/signin.html">Да, выйти</PopExitYesA> </PopExitYes>
    //           <PopExitNo><PopExitNoA href="main.html">Нет, остаться</PopExitNoA> </PopExitNo>
    //         </PopExitFormGroup>
    //       </PopExitFormGroup>
    //     </PopExitBlock>
    //   </PopExitContainer>
    // </PopExitPop>

    <div className="pop-exit" id="popExit">
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form className="pop-exit__form" id="formExit" action="#">
            <div className="pop-exit__form-group">
              <button
                onClick={(event) => {
                  event.preventDefault();
                  logout();
                }}
                className="pop-exit__exit-yes _hover01"
                id="exitYes"
              >
                {/* <a href="modal/signin.html">Да, выйти</a>  */}
                {/* <Link to={AppRoutes.SIGNIN}>Да, выйти</Link>/ */}
                Да, выйти
              </button>
              <button className="pop-exit__exit-no _hover03" id="exitNo">
                {/* <a onClick={exitNo}>Нет, остаться</a> */}
                <Link to={AppRoutes.HOME}>Нет, остаться</Link> 
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
