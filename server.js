const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear JSON en el cuerpo de las solicitudes
app.use(express.json());

// Importa las rutas de usuarios
const usersRoutes = require('./users_routes');

// Usa las rutas de usuarios bajo el endpoint /users
app.use('/usuarios', usersRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
