import { Link, useNavigate } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import {
  // CategoriesP,
  // CategoriesTheme,
  // CategoriesThemeP,
  // CategoriesThemes,
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
import { AppRoutes } from "../../lib/AppRoutes";
import { useState } from "react";
import { addTask } from "../../Api";

export default function PopNewcard() {
  const [selected, setSelected] = useState(null);

  const [newCard, setNewCard] = useState({
    title: "",
    topic: "",
    description: "",
  });

  const navigate = useNavigate();

  function onBtnSubmit() {
    const cardData = {
      ...newCard,
      data: selected,
    };
    console.log(cardData);
    addTask({cardData});
    navigate(AppRoutes.HOME);

    // addTask(cardData).then((data) => {
    //   setNewCard(data);
    //   navigate(AppRoutes.HOME);
    // });
  }

  return (
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
                    value={newCard.title}
                    onChange={(event) =>
                      setNewCard({ ...newCard, title: event.target.value })
                    }
                  />
                </FormNewBlock>
                <FormNewBlock>
                  <SubttlLabel htmlFor="textArea">Описание задачи</SubttlLabel>
                  <FormNewArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={newCard.description}
                    onChange={(event) =>
                      setNewCard({
                        ...newCard,
                        description: event.target.value,
                      })
                    }
                  ></FormNewArea>
                </FormNewBlock>
              </PopNewCardForm>
              <Calendar selected={selected} setSelected={setSelected} />
            </PopNewCardWrap>
            {/* <div className="pop-new-card__categories categories">
              <CategoriesP>Категория</CategoriesP>
              <CategoriesThemes> */}
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
            {/* 
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
            </div> */}

            <div className="prod_checbox">
              <div className="radio-toolbar">
                <input
                  type="radio"
                  id="radio1"
                  name="radios"
                  value="Web Design"
                  onChange={(event) =>
                    setNewCard({ ...newCard, topic: event.target.value })
                  }
                />
                <label htmlFor="radio1">Web Design</label>

                <input
                  type="radio"
                  id="radio2"
                  name="radios"
                  value="Research"
                  onChange={(event) =>
                    setNewCard({ ...newCard, topic: event.target.value })
                  }
                />
                <label htmlFor="radio2">Research</label>

                <input
                  type="radio"
                  id="radio3"
                  name="radios"
                  value="Copywriting"
                  onChange={(event) =>
                    setNewCard({ ...newCard, topic: event.target.value })
                  }
                />
                <label htmlFor="radio3">Copywriting</label>
              </div>
            </div>

            <button
              onClick={onBtnSubmit}
              className="form-new__create _hover01"
              id="btnCreate"
            >
              Создать задачу
            </button>
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </PopPopNewCard>
  );
}
