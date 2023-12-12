import './App.css'
import Container from './components/Container/Container'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import PopBrowse from './components/PopBrowse/PopBrowse'
import PopExit from './components/PopExit/PopExit'
import PopNewcard from './components/PopNewcards/PopNewcard'

function App() {
  return (
  <>

  <div className="wrapper">
  <PopExit />
  <PopNewcard />
  <PopBrowse />
  <Header />
  <Main>
    <Container />
  </Main>
  </div>

  <script src="js/script.js"></script>
    </>
  )}

export default App;