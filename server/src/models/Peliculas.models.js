import { model, Schema } from 'mongoose';

const peliculaSchema = new Schema({
    titulo: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    añoDeEstreno: {
        type: Number,
        required: true,
    },
    genero: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Pelicula = model('Pelicula', peliculaSchema);

export { Pelicula };