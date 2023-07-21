import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import { useState, useEffect } from 'react';
import HatsForm from './HatsForm'
import HatsList from './HatsList';
import ShoesForm from './ShoesForm';
import ShoesList from './ShoesList';

function App(props) {
  const [hats, setHats] = useState([]);
  const [shoes, setShoes] = useState([])

  async function getHats() {
    const response = await fetch('http://localhost:8090/api/hats/');
    if (response.ok) {
      const { hats } = await response.json();
      setHats(hats);
    } else {
      console.error('An error has occured while fetching the data')
    }
  }

  useEffect(() => {
    getHats();
    getShoes();
  }, [])


  async function getShoes() {
    const url = "http://localhost:8080/api/shoes/"
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      setShoes(data.shoes)
    }
  }

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="hats/new" element={< HatsForm getHats={getHats} />} />
          <Route path="hats" element={< HatsList hats={hats} />} />
          <Route path="shoes" element={<ShoesList shoes={shoes} />} />
          <Route path="shoes/new" element={<ShoesForm getShoes={getShoes} />} />
          <Route path="edit/:shoeId" element={<ShoesForm isEditForm={true} getShoes={getShoes} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
