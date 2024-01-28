import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError(false);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        setError(true);
        setErrorMessage(data.message);
        return;
      }
      navigate('/sign-in');
    } catch (error) {
      setError(true);
      setErrorMessage("Une erreur s'est produite.");
    }
  };

  return (
    <div className='div-signup'>
      <form onSubmit={handleSubmit} className="form-signup">
        <span className="signup">S'inscrire</span>
        <input type="text" placeholder="Username" id='username' onChange={handleChange}/>
        <input type="email" placeholder="Adresse email" id='email' onChange={handleChange}/>
        <input type="password" placeholder="Password" id='password' onChange={handleChange}/>
        
        <button className="btnSubmit">
          Sign up
        </button>
        
        <p className='errorMessage'>{error && errorMessage}</p>

        <p>
          Vous possédez déjà un compte?
          <Link to='/sign-in'><span> Se connecter</span></Link>
        </p>
      </form>
    </div>
  );
}