import { useEffect, useState } from "react";
import { cardList } from "../../data";
// import PopExit from "../../components/PopExit/PopExit";
import PopNewcard from "../../components/PopNewcards/PopNewcard";
// import PopBrowse from "../../components/PopBrowse/PopBrowse";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Container from "../../components/Container/Container";
import { Outlet } from "react-router-dom";

export default function MainPage() {
    const [cards, setCards] = useState(cardList);

    function addCards() {
      const newCard = {
        id: cards.length + 1,
        theme: "New Theme",
        title: "Новая задача",
        date: "30.10.23",
        status: "Без статуса",
        color: "_yellow"
      };
      setCards([...cards, newCard]);
    }
  
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }, []);

  return (
<>
      <div className="wrapper">
        {/* <PopExit /> */}
        <Outlet />
        <PopNewcard />
        {/* <PopBrowse /> */}
        <Header addCards={addCards} />

        {isLoading ? (
          <div className="loading">Загрузка страницы...</div>
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