import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EditTask, deleteTask } from "../../Api";
import { AppRoutes } from "../../lib/AppRoutes";
import {
  FormNewArea,
  FormNewBlock,
  FormNewInput,
  PopNewCardBlock,
  PopNewCardClose,
  PopNewCardContainer,
  PopNewCardContent,
  PopNewCardForm,
  PopNewCardTtl,
  PopNewCardWrap,
  PopPopNewCard,
} from "../../components/PopNewcards/PopNewCard.styled";
import { SubttlLabel } from "../../components/Common/Common.styled";
import Calendar from "../../components/Calendar/Calendar";

export default function EditCard({ id }) {
  const [selected, setSelected] = useState(null);

  const [editingCard, setEditingCard] = useState({
    title: "",
    topic: "",
    description: "",
  });

  const navigate = useNavigate();

  function onBtnEdit() {
    const cardData = {
      ...editingCard,
      data: selected,
    };
    // console.log(cardData);
    // EditTask({ cardData });
    // navigate(AppRoutes.HOME);

    EditTask(cardData).then((data) => {
      setEditingCard(data);
      navigate(AppRoutes.HOME);
    });
  }

  // попыталась сделать редактирование, изменив код выше, но не сработало:

  // const { tasks } = useTask();
  // const taskId = tasks?.find((taskItem) => taskItem._id === id);

  // const [selected, setSelected] = useState(null);

  // const [editingTask, setEditingTask] = useState({
  //   title: taskId.title,
  //   topic: taskId.topic,
  //   status: taskId.status,
  //   description: taskId.description,
  //   date: taskId.date,
  // });

  // const navigate = useNavigate();

  // function onBtnEdit() {
  //   const cardTaskData = {
  //     ...editingTask,
  //     data: selected,
  //   };

  //   EditTask(cardData).then((data) => {
  //     setEditingTask(data);
  //     navigate(AppRoutes.HOME);
  //   });
  // }

  return (
    <PopPopNewCard id="popNewCard">
      <PopNewCardContainer>
        <PopNewCardBlock>
          <PopNewCardContent>
            <PopNewCardTtl>Редактирование задачи</PopNewCardTtl>
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
                    value={editingCard.title}
                    onChange={(event) =>
                      setEditingCard({
                        ...editingCard,
                        title: event.target.value,
                      })
                    }
                  />
                </FormNewBlock>
                <FormNewBlock>
                  <SubttlLabel htmlFor="textArea">Описание задачи</SubttlLabel>
                  <FormNewArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={editingCard.description}
                    onChange={(event) =>
                      setEditingCard({
                        ...editingCard,
                        description: event.target.value,
                      })
                    }
                  ></FormNewArea>
                </FormNewBlock>
              </PopNewCardForm>
              <Calendar selected={selected} setSelected={setSelected} />
            </PopNewCardWrap>
            <div className="prod_checbox">
              <div className="radio-toolbar">
                <input
                  type="radio"
                  id="radio1"
                  name="radios"
                  value="Web Design"
                  onChange={(event) =>
                    setEditingCard({
                      ...editingCard,
                      topic: event.target.value,
                    })
                  }
                />
                <label htmlFor="radio1">Web Design</label>

                <input
                  type="radio"
                  id="radio2"
                  name="radios"
                  value="Research"
                  onChange={(event) =>
                    setEditingCard({
                      ...editingCard,
                      topic: event.target.value,
                    })
                  }
                />
                <label htmlFor="radio2">Research</label>

                <input
                  type="radio"
                  id="radio3"
                  name="radios"
                  value="Copywriting"
                  onChange={(event) =>
                    setEditingCard({
                      ...editingCard,
                      topic: event.target.value,
                    })
                  }
                />
                <label htmlFor="radio3">Copywriting</label>
              </div>
            </div>

            <div className="pop-browse__btn-edit">
              <div className="btn-group">
                <button
                  onClick={onBtnEdit}
                  className="btn-edit__edit _btn-bg _hover01"
                >
                  Сохранить
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                  <Link to={`/CardPage/${id}`}>Отменить</Link>
                </button>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  <a
                    onClick={() => {
                      deleteTask(id);
                      navigate(AppRoutes.HOME);
                    }}
                  >
                    Удалить задачу
                  </a>
                </button>
              </div>
              <button className="btn-edit__close _btn-bg _hover01">
                <Link to={AppRoutes.HOME}>Закрыть</Link>
              </button>
            </div>
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </PopPopNewCard>
  );
}
