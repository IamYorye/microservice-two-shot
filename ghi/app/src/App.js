import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ShoesForm from './ShoesForm';
import ShoesList from './ShoesList';
import { useEffect, useState } from 'react';



function App(props) {
  const [shoes, setShoes] = useState([])
  async function getShoes() {
    const url = "http://localhost:8080/api/shoes/"
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      setShoes(data.shoes)
    }
  }

  useEffect(() => {
    getShoes();
  }, [])

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="shoes" element={<ShoesList shoes={shoes} />} />
          <Route path="shoes/new" element={<ShoesForm getShoes={getShoes} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
