import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Container from "../../components/Container/Container";
import { Outlet } from "react-router-dom";
import { getTasks } from "../../Api";
import gif from "../../assets/gif.gif";
import useUser from "../../hooks/UseUser";
import useTask from "../../hooks/UseTask";

export default function MainPage() {
  // const [cards, setCards] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const { user } = useUser();
  const { setTaskData, tasks } = useTask();

  useEffect(() => {
    getTasks({ user }).then((data) => {
      // console.log(data.tasks);
      setTaskData(data.tasks);
      setIsLoading(false);
    });
  }, [user]);

  return (
    <>
      <div className="wrapper">
        <Outlet />
        <Header />

        {isLoading ? (
          <div className="loading">
            <img src={gif} alt="loading..." />
            Загрузка страницы...
          </div>
        ) : (
          <Main>
            <Container cards={tasks} />
          </Main>
        )}
      </div>

      <script src="js/script.js"></script>
    </>
  );
}
