// users_routes.js
const express = require('express');
const router = express.Router();
const pool = require('./db');

// Crear un nuevo usuario
router.post('/', async (req, res) => {
  const { nombre, email, edad } = req.body; 
  try {
    const result = await pool.query(
      'INSERT INTO usuarios (nombre, email, edad) VALUES ($1, $2, $3) RETURNING *', 
      [nombre, email, edad] 
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error al crear el usuario');
  }
});

// Obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuarios');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error al obtener los usuarios');
  }
});

// Obtener un usuario por ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).send('Usuario no encontrado');
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error al obtener el usuario');
  }
});

// Actualizar un usuario por ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, email, edad } = req.body; 
  try {
    const result = await pool.query(
      'UPDATE usuarios SET nombre = $1, email = $2, edad = $3 WHERE id = $4 RETURNING *', 
      [nombre, email, edad, id] 
    );
    if (result.rows.length === 0) {
      return res.status(404).send('Usuario no encontrado');
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error al actualizar el usuario');
  }
});

// Eliminar un usuario por ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM usuarios WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).send('Usuario no encontrado');
    }
    res.status(200).send('Usuario eliminado');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error al eliminar el usuario');
  }
});

module.exports = router;
