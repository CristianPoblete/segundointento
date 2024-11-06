import express from 'express';
import peliculasRoutes from './routes/peliculas.routes';
import conectarDB from './config/mongoose.config';

const app = express();
const port = 3000;

app.use(express.json());

conectarDB();

app.use('/api/peliculas', peliculasRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});