import { useEffect, useState } from "react";
import "./App.css";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import PopExit from "./components/PopExit/PopExit";
import PopNewcard from "./components/PopNewcards/PopNewcard";
import { cardList } from "./data";

function App() {
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
        <PopExit />
        <PopNewcard />
        <PopBrowse />
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

export default App;