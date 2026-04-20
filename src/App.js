import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import SearchResults from './components/SearchResults/SearchResults';
import Library from './components/Library/Library';
import './App.css';

// Imágenes
import imgSincero from './imagen/Enoc.jpeg';
import imgClaseAzul from './imagen/Cosmo.jpeg';
import imgSePreparo from './imagen/Odisea.jpeg';

const App = () => {
  // Estado para los resultados de búsqueda (datos ficticios)
  const [resultados] = useState([
    { id: 1, titulo: "Sincero", portadaUrl: imgSincero, reproducciones: 1333412764, explicito: true },
    { id: 2, titulo: "Clase Azul", portadaUrl: imgClaseAzul, reproducciones: 1213033272, explicito: false },
    { id: 3, titulo: "Se Preparó", portadaUrl: imgSePreparo, reproducciones: 813599926, explicito: false },
  ]);

  // Estado para la biblioteca personalizada (empieza vacía)
  const [biblioteca, setBiblioteca] = useState([]);

  // Función para agregar canciones a la biblioteca
  const agregarALibreria = (cancion) => {
    // Evitamos duplicados
    if (!biblioteca.find(item => item.id === cancion.id)) {
      setBiblioteca([...biblioteca, cancion]);
    }
  };

  // useEffect para imprimir mensaje cuando la biblioteca cambie
  useEffect(() => {
    console.log("⭐ La biblioteca se ha actualizado:", biblioteca);
  }, [biblioteca]);

  return (
    <div className="App">
      <Header />
      <main className="content-body">
        {/* Componente de Resultados */}
        <SearchResults 
          canciones={resultados} 
          agregarALibreria={agregarALibreria} 
        />
        
        {/* Espaciador visual */}
        <div style={{margin: '40px 0', borderTop: '1px solid #333'}}></div>

        {/* Componente de Biblioteca */}
        <Library canciones={biblioteca} />
      </main>
    </div>
  );
};

export default App;