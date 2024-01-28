import  express  from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

// appelle la fonction config() du module dotenv. Cette fonction lit le fichier .env
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('connexion à la base de données avec succes');
    })
    .catch((err) => {
        console.log(err);   
    })


const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('server est ouvrir dans 3000!!!!');
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// Middleware de gestion des erreurs global pour l'application Express
app.use((err, req, res, next) => {
    // Récupération du code d'état de l'erreur, par défaut 500 (Erreur interne du serveur)
    const statusCode = err.statusCode || 500;

    // Récupération du message d'erreur, par défaut 'Erreur interne du serveur'
    const message = err.message || 'Erreur interne du serveur';

    // Envoi d'une réponse JSON avec le code d'état, le message d'erreur et un indicateur de succès (false)
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
});