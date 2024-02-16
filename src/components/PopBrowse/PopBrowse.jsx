import { Link, useNavigate } from "react-router-dom";
import {
  CategoriesP,
  CategoriesTheme,
  CategoriesThemeP,
  StatusP,
  SubttlLabel,
} from "../Common/Common.styled";
import PopExit from "../PopExit/PopExit";
import {
  FormBrowseFormArea,
  FormBrowseFormBlock,
  PopBrowseBlock,
  PopBrowseContainer,
  PopBrowseForm,
  PopBrowseTopBlock,
  PopBrowseTtl,
  PopPopBrowse,
  Status,
  StatusThemeHide,
  StatusThemes,
} from "./PopBrowse.styled";
import Calendar from "../Calendar/Calendar";
import { deleteTask } from "../../Api";
import { AppRoutes } from "../../lib/AppRoutes";
import useTask from "../../hooks/UseTask";

export default function PopBrowse({ id }) {
  const navigate = useNavigate();

  const { tasks, setTaskData } = useTask();
  const taskId = tasks?.find((taskItem) => taskItem._id === id);
  console.log(taskId);

  let color;
  switch (taskId.topic) {
    case "Web Design":
      color = "_orange";
      break;
    case "Research":
      color = "_green";
      break;
    case "Copywriting":
      color = "_purple";
      break;
    default:
      color = "_gray";
  }

  return (
    <PopPopBrowse id="popBrowse">
      <PopBrowseContainer>
        <PopBrowseBlock>
          <div className="pop-browse__content">
            <PopBrowseTopBlock>
              <PopBrowseTtl>{taskId.title}</PopBrowseTtl>
              {/* <div className="categories__theme theme-top _orange _active-category"> */}
              <CategoriesTheme
                $themeColor={color}
                className="categories__theme theme-top _active-category"
              >
                {/* <p className="_orange">Web Design</p> */}
                <CategoriesThemeP>{taskId.topic}</CategoriesThemeP>
              </CategoriesTheme>
            </PopBrowseTopBlock>
            <Status>
              <StatusP>Статус</StatusP>
              <StatusThemes>
                <StatusThemeHide>
                  <p>Без статуса</p>
                </StatusThemeHide>
                <div className="status__theme _gray">
                  <p className="_gray">{taskId.status}</p>
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
                    readOnly
                    placeholder={taskId.description}
                  ></FormBrowseFormArea>
                </FormBrowseFormBlock>
              </PopBrowseForm>
              <Calendar />
            </div>
            <div className="theme-down__categories theme-down">
              <CategoriesP>Категория</CategoriesP>
              <CategoriesTheme $themeColor="orange">
                <CategoriesThemeP>{taskId.topic}</CategoriesThemeP>
              </CategoriesTheme>
            </div>

            <div className="pop-browse__btn-browse ">
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03">
                  <Link to={`/EditCard/${id}`}>Редактировать задачу</Link>
                </button>
                <button className="btn-browse__delete _btn-bor _hover03">
                  <a
                    onClick={() => {
                      deleteTask(id).then((data) => {
                        setTaskData(data.tasks);
                        navigate(AppRoutes.HOME);
                      });
                    }}
                  >
                    {/* <a onClick={deleteTask({id})}> */}
                    Удалить задачу
                  </a>
                </button>
              </div>
              <button className="btn-browse__close _btn-bg _hover01">
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
