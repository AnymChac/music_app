import React, { Component } from 'react';
import Header from './components/Header';
import Song from './components/Song';
import './App.css';

// 1. IMPORTA tus imágenes locales
import imgSincero from './imagen/Enoc.jpeg';
import imgClaseAzul from './imagen/Cosmo.jpeg';
import imgSePreparo from './imagen/Odisea.jpeg';

class App extends Component {
  
  // Este es el método que solicitaste
  componentDidMount() {
    console.log("✅ La aplicación de Biblioteca Musical se ha cargado correctamente.");
    // Aquí es donde normalmente harías llamadas a una API en el futuro
  }

  render() {
    return (
      <div className="App">
        <Header />
        
        <main className="content-body">
          <h2 className="section-title">Populares</h2>
          
          <div className="song-list-container">
            <Song 
              numero={1}
              portadaUrl={imgSincero} 
              titulo="Sincero" 
              reproducciones={1333412764}
              explicito={true}
            />
            <Song 
              numero={2}
              portadaUrl={imgClaseAzul} 
              titulo="Clase Azul" 
              reproducciones={1213033272}
              explicito={false}
            />
            <Song 
              numero={3}
              portadaUrl={imgSePreparo} 
              titulo="Se Preparó" 
              reproducciones={813599926}
              explicito={false}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;