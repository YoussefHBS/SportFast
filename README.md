# Documentación del Proyecto SportFast

## Descripción General

**SportFast** es una plataforma web desarrollada para la venta y gestión de productos deportivos, orientada a diferentes públicos: hombre, mujer, niño y niña. El objetivo principal es ofrecer una experiencia de usuario moderna, rápida y accesible para la compra de ropa .

---

## Arquitectura y Herramientas Utilizadas

### 1. **Frontend: Angular**
- **Framework:** Angular
- **Lenguaje:** TypeScript
- **Estilos:** CSS personalizado y Bootstrap
- **Características:**
  - Componentes independientes para cada sección (hombre, mujer, niño, niña, página principal).
  - Modales personalizados para mostrar detalles de productos y gestionar la compra.
  - Búsqueda y filtrado de productos en tiempo real.
  - Interfaz responsive adaptada a dispositivos móviles y escritorio.
  - Comunicación con el backend mediante servicios HTTP.

### 2. **Backend: Laravel**
- **Framework:** Laravel
- **API :** para la gestión de productos, categorías, usuarios, pedidos, tallas y colores.
- **Rutas:** Definidas en `routes/api.php` para operaciones CRUD (crear, leer, actualizar, eliminar) sobre los recursos principales.
- **Controladores:** Encargados de la lógica de negocio y la interacción con la base de datos.
- **Autenticación:** utilizado el Sanctum para proteger rutas sensibles.

### 3. **Base de Datos: MariaDB**
- **Base de Datos:** MariaDB
- **Modelo relacional:** Tablas para productos, categorías, usuarios, pedidos, detalles de pedido, tallas y colores.
- **Persistencia:** Toda la información de productos, stock, usuarios y pedidos se almacena y gestiona en la base de datos.

### 4. **Contenedores y Despliegue: Docker**
- **Docker Compose:** Lanzo los servicios para frontend, backend y base de datos.
- **Dockerfiles:** Configuración personalizada para el entorno de Angular, Laravel y MariaDB.
- **Despliegue:** Facilita el lanzamiento y funcionalidad del proyecto en diferentes entornos.

---

## Funcionalidades Principales

- **Catálogo segmentado:** Navegación por categorías (hombre, mujer, niño, niña) con productos filtrados.
- **Gestión de stock:** Actualización automática del stock tras cada compra, con validación para evitar compras superiores a la cantidad disponible.
- **Carrito de compras:** Añadir productos al carrito con selección de color, talla y cantidad.
- **Alertas de stock:** Mensajes de advertencia cuando el stock es bajo o el producto está agotado.
- **Actualización en tiempo real:** El stock se actualiza tanto en la interfaz como en la base de datos tras cada operación.
- **Autenticación y seguridad:** Registro, login y gestión de usuarios protegidos mediante tokens.

---

## Resumen

SportFast es una solución integral para la venta de productos deportivos, desarrollada con tecnologías modernas como Angular, Laravel y MariaDB, y desplegada de forma eficiente mediante Docker. El sistema es seguro y fácil de mantener, permitiendo una experiencia de usuario buena y una gestión eficiente del inventario y los pedido