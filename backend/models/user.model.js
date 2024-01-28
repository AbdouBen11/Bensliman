import mongoose from "mongoose";

// Schema correspond aux règles et conditions que nous souhaitons ajouter à l'utilisateur 
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    }

}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;