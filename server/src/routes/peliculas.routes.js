import { Router } from 'express';
import { getPeliculas, postPeliculas, putPeliculas, getDetallePelicula, deletePelicula } from '../controllers/peliculas.controller.js';

const router = Router();

///api/peliculas
router.get('/', getPeliculas);
router.post('/', postPeliculas);
router.put('/:id', putPeliculas);
router.get('/:id', getDetallePelicula);
router.delete('/:id', deletePelicula);

export default router;