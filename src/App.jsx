// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './vite.svg'
import './App.css'
import Container from './components/Container'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import PopBrowse from './components/PopBrowse/PopBrowse'
import PopExit from './components/PopExit/PopExit'
import PopNewcard from './components/PopNewcards/PopNewcard'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

<div className="wrapper">
{/* <!-- pop-up start--> */}

  <PopExit />

  <PopNewcard />

  <PopBrowse />

{/* <!-- pop-up end--> */}

{/* <!-- <a href="">x</a> --> */}

<Header />

<Main>
  <Container />
</Main>
</div>

<script src="js/script.js"></script>
</>
  )}

export default App;