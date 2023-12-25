import { PopExitPop, PopExitBlock, PopExitContainer, PopExitTtl, PopExitFormGroup, PopExitYes, PopExitYesA, PopExitNo, PopExitNoA } from "./PopExit.styled";


export default function PopExit() {
  return (
      <PopExitPop>
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTtl>
          <form className="pop-exit__form" id="formExit" action="#">
            <PopExitFormGroup>
              <PopExitYes><PopExitYesA href="modal/signin.html">Да, выйти</PopExitYesA> </PopExitYes>
              <PopExitNo><PopExitNoA href="main.html">Нет, остаться</PopExitNoA> </PopExitNo>
            </PopExitFormGroup>
          </form>
        </PopExitBlock>
      </PopExitContainer>
    </PopExitPop>
  )
}