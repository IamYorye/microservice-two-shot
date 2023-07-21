import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import { useState, useEffect } from 'react';
import HatsForm from './HatsForm'
import HatsList from './HatsList';

function App(props) {
  const [hats, setHats] = useState([]);

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
  }, [])

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="hats/new" element={< HatsForm getHats={getHats} />} />
          <Route path="hats" element={< HatsList hats={hats} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
