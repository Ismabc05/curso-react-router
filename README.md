📘 React Router Demo

Este proyecto es un ejemplo de una aplicación React utilizando React Router v7 para manejar rutas, navegación dinámica y rutas protegidas. Incluye autenticación simulada, modal para eliminar posts y uso de React Portals.

🚀 Tecnologías usadas

- React 18
- React Router DOM 7
- Vite

JavaScript (ES6)
📂 Estructura del proyecto

```bash 
my-app/
│
├─ src/
│  ├─ componentes/
│  │  ├─ Home.jsx           # Página de inicio
│  │  ├─ Blog.jsx           # Página principal de blog
│  │  ├─ Posts.jsx          # Página de post individual
│  │  ├─ Contacto.jsx       # Página protegida de contacto
│  │  ├─ Login.jsx          # Página de login
│  │  ├─ Logout.jsx         # Página de logout
│  │  ├─ Servicios.jsx      # Página de servicios
│  │  ├─ Proyectos.jsx      # Página de proyectos
│  │  ├─ Inicio.jsx         # Barra de navegación / menú
│  │  └─ BlogLink.jsx       # Componente para enlaces de blog
│  │
│  ├─ apis/
│  │  ├─ posts.js           # Datos simulados de posts
│  │  └─ rutas.js           # Configuración de rutas del menú
│  │
│  ├─ context.jsx           # Contexto de autenticación y ProtectedAuth
│  ├─ App.jsx               # Componente principal de la app con Routes
│  └─ main.jsx              # Entrada de React (render en root)
│
├─ index.html               # HTML principal
├─ package.json             # Dependencias y scripts
└─ README.md                # Este archivo
```

## ▶️ Cómo ejecutar el proyecto

### 1️⃣ Clonar repositorio

```bash
git clone https://github.com/Ismabc05/curso-react-router.git
cd curso-react-router

