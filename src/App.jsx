import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Cart from './components/Cart'
import Footer from './components/Footer'
import Models from './components/Models'
import NavBar from './components/Navbar'

const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
}

const modelPromises = getModels();

function App() {
  const [activeTab, setActiveTab] = useState("model");
  const [carts, setCarts] = useState([]);

  return (
    <>
      <NavBar />
      <Banner />

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent">
        <input type="radio"
          name="my_tabs_1"
          className="tab w-28 rounded-full font-semibold" aria-label="Model" defaultChecked
          onClick={() => setActiveTab("model")}
        />
        <input type="radio"
          name="my_tabs_1"
          className="tab w-28 rounded-full font-semibold" aria-label="Cart"
          onClick={() => setActiveTab("cart")}
        />
      </div>

      {activeTab === "model"
        && <Models modelPromises={modelPromises}
          carts={carts}
          setCarts={setCarts}
        />}
      {activeTab === "cart" && <Cart carts={carts} />}
      <Footer />
    </>
  )
}

export default App
