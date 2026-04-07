🏍️ BAJAJ WEB SHOP - Tienda de Motocicletas

Aplicación web desarrollada con React + Vite + Material UI que simula una tienda online de motocicletas inspirada en la marca Bajaj.

La aplicación permite a los usuarios explorar diferentes modelos de motos, revisar promociones, guardar motocicletas en favoritos y navegar por las distintas secciones del catálogo.

El proyecto fue construido utilizando una arquitectura modular basada en features, lo que permite mantener una organización clara del código, facilitar su mantenimiento y permitir que el sistema pueda crecer fácilmente con nuevas funcionalidades.

🛠 Tecnologías utilizadas

El desarrollo del proyecto se realizó utilizando las siguientes tecnologías:

React

Vite

Material UI

JavaScript (ES6+)

React Hooks

Arquitectura Feature-Based

ESLint

📁 Estructura del proyecto

BAJAJ_WEB_SHOP
│
├── .vscode
├── node_modules
│
├── public
│   ├── img
│   ├── videos
│   └── robots.txt
│
├── src
│
│   ├── features
│   │   └── auth
│   │       │
│   │       ├── components
│   │       │   ├── Account.jsx
│   │       │   ├── Favorite.jsx
│   │       │   └── Shopping.jsx
│   │       │
│   │       ├── hooks
│   │       │   ├── useAccount.jsx
│   │       │   └── useShopping.jsx
│   │       │
│   │       └── pages
│   │
│   ├── layout
│   │   ├── components
│   │   │   ├── Content.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Header.jsx
│   │   │
│   │   ├── hooks
│   │   └── pages
│   │
│   ├── view
│   │   ├── components
│   │   │   ├── Article.jsx
│   │   │   └── Offer.jsx
│   │   │
│   │   ├── hooks
│   │   │   ├── customHooks.jsx
│   │   │   ├── useCallback.jsx
│   │   │   ├── useContext.jsx
│   │   │   ├── useEffect.jsx
│   │   │   ├── useFavorites.jsx
│   │   │   ├── useMemo.jsx
│   │   │   ├── useOnlineStatus.jsx
│   │   │   ├── useReducer.jsx
│   │   │   ├── useRef.jsx
│   │   │   └── useState.jsx
│   │   │
│   │   └── pages
│   │
│   ├── shared
│   │   └── styles
│   │       └── Index.css
│
│   ├── App.jsx
│   ├── main.jsx
│   └── routes.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── Realme.md
└── vite.config.js

🧩 Arquitectura del proyecto

La aplicación utiliza una arquitectura modular basada en features, en la cual cada módulo organiza sus propios componentes, lógica y vistas dentro de una misma estructura.

Cada módulo contiene:

components → elementos visuales de la interfaz

hooks → lógica reutilizable del sistema

pages → vistas principales de cada sección

Este tipo de arquitectura permite:

✔ Mejor organización del código
✔ Mayor facilidad para realizar mantenimiento
✔ Separación clara de responsabilidades
✔ Escalabilidad del proyecto

👤 Módulo de usuario (Auth)

Este módulo se encarga de gestionar las funcionalidades relacionadas con los usuarios dentro de la aplicación.

Account.jsx

Permite al usuario:

Crear o registrar una cuenta

Modificar su información personal

Subir una imagen de perfil

Eliminar su cuenta

Favorite.jsx

Permite guardar y administrar las motocicletas favoritas que el usuario seleccione dentro del catálogo.

Shopping.jsx

Simula el proceso de compra o selección de motocicletas dentro de la tienda.

🧱 Layout

El módulo Layout define la estructura visual principal de la aplicación.

Header.jsx

Contiene la barra de navegación principal donde el usuario puede acceder a las diferentes secciones del sitio.

Content.jsx

Componente que actúa como contenedor principal donde se renderizan las distintas páginas del proyecto.

Footer.jsx

Pie de página que muestra información adicional sobre la tienda.

🏍️ Módulo View

El módulo View contiene los componentes encargados de mostrar las motocicletas disponibles dentro del catálogo.

Article.jsx

Representa una motocicleta dentro de la tienda, mostrando información como:

Imagen del modelo

Nombre de la moto

Precio

Características principales

Offer.jsx

Sección donde se presentan motocicletas en promoción o con descuentos especiales.

🧠 Hooks personalizados

Dentro de la carpeta view/hooks se incluyen diferentes implementaciones de hooks personalizados de React para comprender mejor su funcionamiento.

Entre ellos se encuentran:

useState

useEffect

useContext

useReducer

useMemo

useRef

useCallback

También se incluyen hooks adicionales como:

useFavorites

Permite gestionar las motocicletas favoritas seleccionadas por el usuario.

useOnlineStatus

Permite detectar si el usuario se encuentra conectado o desconectado de internet.

🎨 Shared

La carpeta shared contiene recursos compartidos que pueden ser utilizados por diferentes partes de la aplicación.

styles

Incluye los estilos globales utilizados en el proyecto.

👨‍💻 Autor

Proyecto desarrollado como práctica académica para fortalecer conocimientos en:

React

Arquitectura modular

Hooks personalizados

Desarrollo de interfaces con Material UI

Organización de proyectos frontend
