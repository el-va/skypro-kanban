import { Link } from "react-router-dom";
import {
  CategoriesP,
  CategoriesTheme,
  // CategoriesThemeDown,
  CategoriesThemeP,
  // PopNewCardCalendar,
  StatusP,
  // StatusTheme,
  // StatusThemeP,
  SubttlLabel,
} from "../Common/Common.styled";
import PopExit from "../PopExit/PopExit";
import {
  FormBrowseFormArea,
  FormBrowseFormBlock,
  PopBrowseBlock,
  // PopBrowseBtnBg,
  // PopBrowseBtnBgA,
  // PopBrowseBtnBor,
  // PopBrowseBtnBorA,
  // PopBrowseBtnBrowse,
  // PopBrowseBtnEditHide,
  // PopBrowseBtnGroup,
  PopBrowseContainer,
  // PopBrowseContent,
  PopBrowseForm,
  PopBrowseTopBlock,
  PopBrowseTtl,
  // PopBrowseWrap,
  PopPopBrowse,
  Status,
  StatusThemeHide,
  StatusThemes,
} from "./PopBrowse.styled";
import { AppRoutes } from "../../lib/Approutes";
import Calendar from "../Calendar/Calendar";

export default function PopBrowse() {
  return (
    <PopPopBrowse id="popBrowse">
      <PopBrowseContainer>
        <PopBrowseBlock>
          <div className="pop-browse__content">
            <PopBrowseTopBlock>
              <PopBrowseTtl>Название задачи</PopBrowseTtl>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </PopBrowseTopBlock>
            <Status>
              <StatusP>Статус</StatusP>
              <StatusThemes>
                <StatusThemeHide>
                  <p>Без статуса</p>
                </StatusThemeHide>
                <div className="status__theme _gray">
                  <p className="_gray">Нужно сделать</p>
                </div>
                <StatusThemeHide>
                  <p>В работе</p>
                </StatusThemeHide>
                <StatusThemeHide>
                  <p>Тестирование</p>
                </StatusThemeHide>
                <StatusThemeHide>
                  <p>Готово</p>
                </StatusThemeHide>
              </StatusThemes>
            </Status>
            <div className="pop-browse__wrap">
              <PopBrowseForm id="formBrowseCard" action="#">
                <FormBrowseFormBlock>
                  <SubttlLabel htmlFor="textArea01">
                    Описание задачи
                  </SubttlLabel>
                  <FormBrowseFormArea
                    name="text"
                    id="textArea01"
                    readonly
                    placeholder="Введите описание задачи..."
                  ></FormBrowseFormArea>
                </FormBrowseFormBlock>
              </PopBrowseForm>
              <Calendar />
            </div>
            <div className="theme-down__categories theme-down">
              <CategoriesP>Категория</CategoriesP>
              <CategoriesTheme $themeColor="orange">
                <CategoriesThemeP>Web Design</CategoriesThemeP>
              </CategoriesTheme>
            </div>

            <div className="pop-browse__btn-browse ">
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03">
                  <a href="#">Редактировать задачу</a>
                </button>
                <button className="btn-browse__delete _btn-bor _hover03">
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button className="btn-browse__close _btn-bg _hover01">
                {/* <a href="#">Закрыть</a> */}
                <Link to={AppRoutes.HOME}>Закрыть</Link>
              </button>
            </div>
            <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">
                  <a href="#">Сохранить</a>
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                  <a href="#">Отменить</a>
                </button>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button className="btn-edit__close _btn-bg _hover01">
                <a onClick={PopExit}>Закрыть</a>
              </button>
            </div>
          </div>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopPopBrowse>
  );
}

//         <PopBrowseBtnBrowse>
//           <PopBrowseBtnGroup>
//             {/* <button className="btn-browse__edit _btn-bor _hover03"> */}
//             <PopBrowseBtnBor>
//               <PopBrowseBtnBorA href="#">
//                 Редактировать задачу
//               </PopBrowseBtnBorA>
//             </PopBrowseBtnBor>
//             {/* <button className="btn-browse__delete _btn-bor _hover03"> */}
//             <PopBrowseBtnBor>
//               <PopBrowseBtnBorA href="#">Удалить задачу</PopBrowseBtnBorA>
//             </PopBrowseBtnBor>
//           </PopBrowseBtnGroup>
//           <PopBrowseBtnBg>
//             <PopBrowseBtnBgA href="#">Закрыть</PopBrowseBtnBgA>
//           </PopBrowseBtnBg>
//         </PopBrowseBtnBrowse>
