# 🎵 Music-App (Music Explorer)

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://github.com/AnymChac/music_app)
[![Redux](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://github.com/AnymChac/music_app)
[![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://github.com/AnymChac/music_app)

## 📝 Descripción
Esta es una aplicación de exploración musical que permite a los usuarios buscar artistas y navegar a través de su discografía completa. El proyecto simula una biblioteca de canciones interactiva, extrayendo información en tiempo real desde una API externa de música.

El objetivo principal fue implementar una arquitectura robusta utilizando **Redux Toolkit** para gestionar el estado global de la aplicación, asegurando que la información de los artistas y canciones sea accesible y consistente en todos los componentes.

## 🛠️ Tecnologías Utilizadas
- **React.js**: Biblioteca base para la creación de componentes de UI.
- **Redux Toolkit**: Gestión de estado global para manejar resultados de búsqueda y detalles de artistas.
- **Axios**: Para la comunicación asíncrona con la API de música.
- **Sass (SCSS)**: Preprocesador CSS para una gestión de estilos más escalable y organizada.
- **React Router**: Para la navegación entre la vista de búsqueda y la biblioteca de canciones.

## 🚀 Instalación y Configuración

1. **Clonación del repositorio:**
   ```bash
   git clone [https://github.com/AnymChac/music_app.git](https://github.com/AnymChac/music_app.git)

2. **Instalación de dependencias:**
   ```bash
   npm install

3. **Ejecución local:**
   ```bash
   npm start

## 📖 Ejemplos de Uso
**Búsqueda de Artistas**
- El usuario puede ingresar el nombre de cualquier artista en el buscador. La aplicación realiza una petición a la API y utiliza Redux para almacenar y mostrar los resultados de forma instantánea.

**Exploración de Discografía**
- Al buscar un artista, el sistema navega a una vista detallada donde se listan sus álbumes. Toda esta información se mantiene sincronizada en el estado global, permitiendo una navegación fluida hacia atrás y adelante.

**Gestión de Biblioteca de Canciones**
- La aplicación simula la estructura de una biblioteca musical, organizando los datos obtenidos por categorías (álbum, duración, nombre del track), permitiendo al usuario visualizar la información de manera estructurada. También permite agregar canciones a favoritos simulando una biblioteca personalizada.

**Estilizado con Sass**
- Gracias al uso de Sass, la aplicación cuenta con una estructura de diseño limpia y responsive, facilitando el mantenimiento de variables de color y mixins para una experiencia visual coherente.

## 🤝 Conectemos
- [LinkedIn](https://www.linkedin.com/in/carlos-ariel-espinosa-arroyo-999753260)
- [Email](carlos.espinosaarroyo@gmail.com)
