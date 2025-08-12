# Backend 3 - Entrega N°1

API en Node.js + Express + MongoDB Atlas para generar y consultar datos ficticios (**usuarios** y **mascotas**).  
El proyecto está organizado en capas siguiendo la arquitectura: **App → Router → Controller → Service → DAO**.

---

## 🚀 Funcionalidad
- **Generar datos mock en memoria** (`/mockingusers` y `/mockingpets`).
- **Insertar datos mock en la base** (`/generateData`).
- **Consultar y contar usuarios** (`/api/users` y `/api/users/count`).
- **Consultar y contar mascotas** (`/api/pets` y `/api/pets/count`).

---

## 📂 Estructura del proyecto
```
src/
  models/           # Modelos Mongoose
  routes/           # Rutas Express
  controllers/      # Controladores
  services/         # Lógica de negocio
  dao/              # Acceso a datos
  mocking/          # Generadores de datos ficticios
  app.js            # Configuración de la app
  server.js         # Punto de entrada
.env.example        # Variables de entorno de ejemplo
```

---

## 🛠 Requisitos
- Node.js 18+
- Cuenta gratuita de [MongoDB Atlas](https://www.mongodb.com/atlas)

---

## 📥 Instalación
1. Clonar el repositorio:
   ```bash
   git clone <https://github.com/crisoalmoniga/Backend_III_Entrega.git>
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```

---

## ⚙ Configuración de variables de entorno
1. Duplicar `.env.example` y renombrar a `.env`.
2. Editar `.env` con tus credenciales y conexión de Atlas:
   ```env
   MONGO_URL=mongodb+srv://<db_username>:<db_password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority&appName=Cluster0
   PORT=3000
   ```
   **Ejemplo real de conexión:**
   ```env
   MONGO_URL=mongodb+srv://coder:coder123@cluster0.miur3.mongodb.net/backend3?retryWrites=true&w=majority&appName=Cluster0
   PORT=3000
   ```
3. En MongoDB Atlas:
   - **Database Access** → Crear usuario con rol `readWriteAnyDatabase`.
   - **Network Access** → Agregar `0.0.0.0/0` para permitir acceso desde cualquier IP.

---

## ▶ Ejecución
```bash
npm start
```
Deberías ver en consola:
```
MongoDB conectado: mongodb+srv://...
Escuchando en puerto 3000
```

---

## 🔗 Endpoints principales

### Generar en memoria (no inserta en DB)
- `GET /api/mocks/mockingusers` → 50 usuarios ficticios.
- `GET /api/mocks/mockingpets?n=5` → 5 mascotas ficticias.

### Insertar en DB
- `POST /api/mocks/generateData`  
  Body JSON:
  ```json
  { "users": 50, "pets": 80 }
  ```
  Inserta la cantidad indicada en la base.

### Consultar DB
- `GET /api/users` → Lista usuarios.
- `GET /api/users/count` → Cantidad de usuarios.
- `GET /api/pets` → Lista mascotas.
- `GET /api/pets/count` → Cantidad de mascotas.

---

## 🧪 Pruebas rápidas (con curl)
```bash
# Insertar datos en Atlas
curl -X POST http://localhost:3000/api/mocks/generateData   -H "Content-Type: application/json"   -d '{"users":10,"pets":15}'

# Verificar cantidades
curl http://localhost:3000/api/users/count
curl http://localhost:3000/api/pets/count

# Generar en memoria
curl http://localhost:3000/api/mocks/mockingusers
curl http://localhost:3000/api/mocks/mockingpets?n=5
```

---

## 🐞 Troubleshooting
- **Timeout / no conecta**: asegurarse de tener `0.0.0.0/0` en *Network Access* y que el clúster esté activo.
- **Authentication failed**: revisar usuario/contraseña en `.env`.
- **Se conecta a localhost**: confirmar que `.env` esté en la raíz y que `import 'dotenv/config'` esté al inicio de `server.js`.

---