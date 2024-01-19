import { Link } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import {
  CategoriesP,
  // CategoriesTheme,
  // CategoriesThemeP,
  CategoriesThemes,
  // PopNewCardCalendar,
  SubttlLabel,
} from "../Common/Common.styled";
import {
  FormNewArea,
  FormNewBlock,
  // FormNewCreate,
  FormNewInput,
  PopNewCardBlock,
  // PopNewCardCategories,
  PopNewCardClose,
  PopNewCardContainer,
  PopNewCardContent,
  PopNewCardForm,
  PopNewCardTtl,
  PopNewCardWrap,
  PopPopNewCard,
} from "./PopNewCard.styled";
import { AppRoutes } from "../../lib/Approutes";

export default function PopNewcard( {addCards}) {
  return (
    // <div class="prod_checbox">
    //     <div class="radio-toolbar">
    //         <input type="radio" id="radio1" name="radios" value="Стандатный" checked>
    //         <label for="radio1">Стандатный</label>

    //         <input type="radio" id="radio2" name="radios" value="Морозостойкий">
    //         <label for="radio2">Морозостойкий</label>

    //         <input type="radio" id="radio3" name="radios" value="Паростойкий">
    //         <label for="radio3">Паростойкий</label>
    //     </div>
    // </div>

    // css
    // .prod_checbox strong {font-size: 14px;
    //     color: #333;
    //     display: inline-block;
    //     margin-right: 10px;
    //     letter-spacing: 0.5px;}

    // .radio-toolbar input[type="radio"] {
    //     display: none;
    // }

    // .radio-toolbar label {
    //     display: inline-block;
    //     padding: 2px 9px;
    //     cursor: pointer;
    //     border: 1px solid #DAD0FF;
    // }

    // .radio-toolbar input[type="radio"]:checked+label {
    //     background-color: #d0ffb7;
    //     border: 1px solid #1CA92E;
    // }

    // .radio-toolbar label:hover {
    //     background-color: #d0ffb7;
    //     border: 1px solid #1CA92E;
    // }

    <PopPopNewCard id="popNewCard">
      <PopNewCardContainer>
        <PopNewCardBlock>
          <PopNewCardContent>
            <PopNewCardTtl>Создание задачи</PopNewCardTtl>
            <PopNewCardClose href="#">
              <Link to={AppRoutes.HOME}>&#10006;</Link>
              </PopNewCardClose>
            <PopNewCardWrap>
              <PopNewCardForm id="formNewCard" action="#">
                <FormNewBlock>
                  <SubttlLabel htmlFor="formTitle">Название задачи</SubttlLabel>
                  <FormNewInput
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </FormNewBlock>
                <FormNewBlock>
                  <SubttlLabel htmlFor="textArea">Описание задачи</SubttlLabel>
                  <FormNewArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></FormNewArea>
                </FormNewBlock>
              </PopNewCardForm>
              <Calendar />
            </PopNewCardWrap>
            <div className="pop-new-card__categories categories">
              <CategoriesP>Категория</CategoriesP>
              <CategoriesThemes>
                {/* <CategoriesThemes>
                <CategoriesTheme $themeColor="orange">
                  <CategoriesThemeP>Web Design</CategoriesThemeP>
                </CategoriesTheme>
                <CategoriesTheme $themeColor="green">
                  <CategoriesThemeP>Research</CategoriesThemeP>
                </CategoriesTheme>
                <CategoriesTheme $themeColor="purple">
                  <CategoriesThemeP>Copywriting</CategoriesThemeP>
                </CategoriesTheme>
              </CategoriesThemes> */}

                <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
                <div className="categories__theme _green">
                  <p className="_green">Research</p>
                </div>
                <div className="categories__theme _purple">
                  <p className="_purple">Copywriting</p>
                </div>
              </CategoriesThemes>
            </div>
            <button onClick={addCards} className="form-new__create _hover01" id="btnCreate">
              Создать задачу
            </button>
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </PopPopNewCard>
  );
}
