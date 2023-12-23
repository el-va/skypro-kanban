import { PopExitBlock, PopExitContainer, PopExitFormGroup, PopExitTtl } from "./PopExit.styled";

export default function PopExit() {
  return (
    <PopExit>
      <PopExitContainer>
        <PopExitBlock>
          
          <PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTtl>

          <form action="#">
            <PopExitFormGroup>
              <button className="pop-exit__exit-yes _hover01" id="exitYes">
                <a href="modal/signin.html">Да, выйти</a>{" "}
              </button>
              <button className="pop-exit__exit-no _hover03" id="exitNo">
                <a href="main.html">Нет, остаться</a>{" "}
              </button>
            </PopExitFormGroup>
          </form>
        </PopExitBlock>
      </PopExitContainer>
    </PopExit>
  );
}
