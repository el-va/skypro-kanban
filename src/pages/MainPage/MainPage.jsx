import { useEffect, useState } from "react";
// import { cardList } from "../../data";
// import PopNewcard from "../../components/PopNewcards/PopNewcard";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Container from "../../components/Container/Container";
import { Outlet } from "react-router-dom";
import { getTasks } from "../../Api";
import gif from "../../assets/gif.gif";
import useUser from "../../hooks/UseUser";
import useTask from "../../hooks/UseTask";

export default function MainPage() {
  const [cards, setCards] = useState(null);

  // function addCards() {
  //   const newCard = {
  //     id: cards.length + 1,
  //     topic: "New Theme",
  //     title: "Новая задача",
  //     date: "30.10.23",
  //     status: "Без статуса",
  //     color: "_yellow"
  //   };
  //   setCards([...cards, newCard]);
  // }

  const [isLoading, setIsLoading] = useState(true);

  const { user } = useUser();
  const { toTask } = useTask();

  useEffect(() => {
    getTasks({ user }).then((data) => {
      toTask(data);
      console.log(data.tasks);
      setCards(data.tasks);
      setIsLoading(false);
    });
  }, [user]);
// }, [user, toTask]);


  return (
    <>
      <div className="wrapper">
        {/* <PopExit /> */}
        <Outlet />
        {/* <PopNewcard /> */}
        {/* <PopBrowse /> */}
        <Header />

        {isLoading ? (
          <div className="loading">
            <img src={gif} alt="loading..." />
            Загрузка страницы...
          </div>
        ) : (
          <Main>
            <Container cards={cards} />
          </Main>
        )}
      </div>

      <script src="js/script.js"></script>
    </>
  );
}
