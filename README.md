# CRM Frontend — Angular

Este proyecto corresponde al **frontend del sistema CRM**, desarrollado en **Angular**, con base en una **plantilla profesional de dashboard** adquirida e integrada al proyecto para agilizar la interfaz de usuario.

---

## 🧩 Descripción general

El sistema CRM tiene como objetivo gestionar clientes, oportunidades, tipologías y usuarios dentro de una arquitectura moderna.  
Este frontend se comunica con el backend desarrollado en **.NET 8** (repositorio: [crm-app](https://github.com/Guntrs/crm-app/tree/develop)).

El objetivo principal es construir una **interfaz modular, reutilizable y moderna**, enfocada en escalabilidad y mantenibilidad.

---

## 🚀 Tecnologías utilizadas

- **Angular CLI** 19.2.6  
- **TypeScript**  
- **HTML5 / SCSS**  
- **Bootstrap / Tailwind (según la plantilla)**  
- **RxJS**  
- **API REST** conectada al backend en .NET 8  

---

## 🧱 Estructura principal

```bash
src/
 ├── app/
 │   ├── modules/         # Módulos del sistema (dashboard, usuarios, clientes, etc.)
 │   ├── components/      # Componentes reutilizables
 │   ├── services/        # Servicios de comunicación con API
 │   ├── guards/          # AuthGuard y control de rutas protegidas
 │   └── app-routing.module.ts
 ├── assets/              # Imágenes, estilos y recursos
 └── environments/        # Variables de entorno
