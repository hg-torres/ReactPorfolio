import Navigation from './Navbar'
import Footer from './Footer'
import About   from './pages/About'
import Contact from './pages/Contact'
import Work    from './pages/Work'
import Resume    from './pages/Resume'
import { useState, useEffect} from 'react'

function App() {

  const [linkTitle, setStatus] = useState('')

  useEffect(() => {
  }, [linkTitle])


  const onNavClick = (e) =>{
    console.log(e.target.text)
    setStatus(e.target.text)
  }

  const example = () => {
    switch (linkTitle) {
      case "About Me":
        return <About />
      case "Projects":
        return <Work />
      case "Contact Me":
        return <Contact />
      case "Resume":
        return <Resume />
      default:
        return <About />
      
    }
  }

  return (
    <>
    <Navigation navClick={onNavClick} />
    {example()}
    <Footer />
    </>
  );
}

export default App;
