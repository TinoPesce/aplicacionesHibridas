const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = express.Router();

const app = express();

// Configuración de Express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Conexión a MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/parcial', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Rutas
const peliculaRoutes = require('./routes/peliculaRoutes');
const actorRoutes = require('./routes/actorRoutes');
const generoRoutes = require('./routes/generoRoutes');
const comentarioRoutes = require('./routes/comentarioRoutes');

const actorController = require("./controllers/actorController");
const comentarioController = require("./controllers/comentarioController");
const generoController = require("./controllers/generoController");
const peliculaController = require("./controllers/peliculaController");

router.get('/', peliculaController.getTodasLasPeliculas);
router.get('/:id', peliculaController.getPeliculaPorId);
router.post('/', peliculaController.crearNuevaPelicula);
router.put('/:id', peliculaController.actualizarPelicula);
router.delete('/:id', peliculaController.eliminarPelicula);


//MODELS


app.use('/api/peliculas', peliculaRoutes);
app.use('/api/actores', actorRoutes);
app.use('/api/generos', generoRoutes);
app.use('/api/comentarios', comentarioRoutes);

app.get('/api/peliculas', peliculaController.getTodasLasPeliculas);
app.get('/api/peliculas/:id', peliculaController.getPeliculaPorId);
app.post('/api/peliculas', peliculaController.crearNuevaPelicula);
app.put('/api/peliculas/:id', peliculaController.actualizarPelicula);
app.delete('/api/peliculas/:id', peliculaController.eliminarPelicula);

// Rutas para actores
app.get('/api/actores', actorController.getTodosLosActores);
app.get('/api/actores/:id', actorController.getActorPorId);
app.post('/api/actores', actorController.crearNuevoActor);
app.put('/api/actores/:id', actorController.actualizarActor);
app.delete('/api/actores/:id', actorController.eliminarActor);

// Rutas para géneros
app.get('/api/generos', generoController.getTodosLosGeneros);
app.get('/api/generos/:id', generoController.getGeneroPorId);
app.post('/api/generos', generoController.crearNuevoGenero);
app.put('/api/generos/:id', generoController.actualizarGenero);
app.delete('/api/generos/:id', generoController.eliminarGenero);

// Rutas para comentarios
app.get('/api/comentarios', comentarioController.getTodosLosComentarios);
app.get('/api/comentarios/:id', comentarioController.getComentarioPorId);
app.post('/api/comentarios', comentarioController.crearNuevoComentario);
app.put('/api/comentarios/:id', comentarioController.actualizarComentario);
app.delete('/api/comentarios/:id', comentarioController.eliminarComentario);





// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

