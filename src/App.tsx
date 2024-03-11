import { useState, useEffect } from "react"
import { SelectedPage } from "./shared/types"
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] =useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if(window.scrollY !== 0) setIsTopOfPage(false);

    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <>
      <div>
        <Navbar
          isTopOfPage={isTopOfPage}
          setSelectedPage={setSelectedPage}
          selectedPage={selectedPage}
        />
        <Home
          setSelectedPage={setSelectedPage}
        />
        <About
          setSelectedPage ={setSelectedPage}
        />
        <Services
          setSelectedPage={setSelectedPage}
        />
       <Contact
          setSelectedPage={setSelectedPage}
        /> 
        <Footer/>

      </div>
    </>
  )
}

export default App
