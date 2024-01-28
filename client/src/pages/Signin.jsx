import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(false);
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(true);
        setErrorMessage(data.message || 'Une erreur s\'est produite.'); // Utiliser le message d'erreur renvoyé par le serveur s'il existe, sinon un message générique
        return;
      }

      navigate('/');
    } catch (error) {
      setError(true);
      setErrorMessage('Une erreur s\'est produite.');
    }
  };

  return (
    <div className='div-signup'>
      <form onSubmit={handleSubmit} className="form-signup">
        <span className="signup">S'identifier</span>
        <input type="email" placeholder="Adresse email" id='email' onChange={handleChange}/>
        <input type="password" placeholder="Password" id='password' onChange={handleChange}/>
        
        <button className="btnSubmit">
          Sign in
        </button>

        <p className='errorMessage'>{error && errorMessage}</p>

        <p>Vous n'avez pas de compte?
          <Link to='/sign-up'><span> S'inscrire</span></Link>
        </p>
      </form>
    </div>
  );
}
