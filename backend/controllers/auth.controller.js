import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';


// Fonction pour gérer l'inscription d'un nouvel utilisateur
export const signup = async (req, res, next) => {
    // Extraction des données du corps de la requête
    const { username, email, password } = req.body;

    // Vérifier si le nom d'utilisateur existe déjà
    const existingUsername = await User.findOne({ username });
  if (existingUsername) {
    return res.status(400).json({ success: false, message: "Le nom d'utilisateur est déjà pris." });
  }

  const existingEmail = await User.findOne({ email });
  if (existingEmail) {
    return res.status(400).json({ success: false, message: "L'adresse e-mail est déjà utilisée." });
  }

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        return res.status(400).json({ success: false, message: "Le mot de passe doit avoir au moins 8 caractères." });;
    }

    // Hachage synchrone du mot de passe à l'aide de bcryptjs avec un coût de travail de 10
    const hashedPassword = bcryptjs.hashSync(password, 10);

    // Création d'une nouvelle instance du modèle User avec les données de l'utilisateur
    const newUser = new User({ username, email, password: hashedPassword });

    try {
        // Tentative de sauvegarde du nouvel utilisateur dans la base de données
        await newUser.save();

        // Réponse indiquant que l'utilisateur a été créé avec succès
        res.status(201).json({ message: "Utilisateur été créé avec succès" });
    } catch (error) {
        // En cas d'erreur lors de la sauvegarde, renvoyer une réponse avec le message d'erreur
        next(errorHandler(500, "Une erreur s\'est produite."));
    }
};


export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try{
        const validUser = await User.findOne({ email });
        if (!validUser) return res.status(400).json({ success: false, message: "email n\'est pas validé." });
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return res.status(400).json({ success: false, message: "l'email au le mot de passe n'est pas correcte" });
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const { password: hashedPassword, ...rest } = validUser._doc;
        res.cookie('access_token', token, { httpOnly: true})
        .status(200)
        .json(rest)
    } catch (error) {
        next(error);
    }
}
