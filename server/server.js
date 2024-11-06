// Importamos el módulo express
import express from 'express';
import { config } from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import { conectarDB } from './config/mongoose.config.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routerAuth from './src/routes/auth.routes.js';

config();

const app = express();

app.use(cookieParser());
app.use(helmet());
app.use(morgan('tiny'));
app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));

const port = process.env.PORT || 8000;

app.use('/api/auth', routerAuth);

app.post('/', (req, res) => {
    const { titulo, director, añoDeEstreno, genero } = req.body;
    const nuevaPelicula = new Pelicula({ titulo, director, añoDeEstreno, genero });
    nuevaPelicula.save((err, pelicula) => {
      if (err) {
        res.status(500).send({ message: 'Error al crear la película' });
      } else {
        res.send({ message: 'Película creada con éxito', pelicula });
      }
    });
  });
conectarDB();

app.listen(port, () => {
    console.log(`El servidor está activo en el puerto: ${port}`);
});