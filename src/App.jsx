import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Models from './components/Models'
import NavBar from './components/Navbar'

const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
}

const modelPromises = getModels();

function App() {

  return (
    <>
      <NavBar />
      <Banner />
      <Models modelPromises={modelPromises} />
      <Footer />
    </>
  )
}

export default App
