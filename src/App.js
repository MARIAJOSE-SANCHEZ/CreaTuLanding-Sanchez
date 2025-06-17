import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda online!" />} />
        <Route path="/categoria/:categoryId" element={<ItemListContainer greeting="Filtrado por categoría" />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2 style={{ padding: '2rem' }}>Página no encontrada 😓</h2>} />
      </Routes>
    </Router>
  );
}

export default App;

