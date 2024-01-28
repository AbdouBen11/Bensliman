import React from 'react'
import './home.css';
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from '../../public/animation/done.json'
import emailAnimation from '../../public/animation/email.json'
import developperAnimation from '../../public/animation/developper.json'

export default function Home() {
    const [state, handleSubmit] = useForm("xpzvqkea");

  return (
    <div>
      <section className='hero flex' id='#about'>
        <div className='left-section'>
          <div className='parent-avatar'>
            <img src="src/assets/img/avatar.png" className='avatar' alt="" />
          </div>
          <h1 className='title'><span>Développeur web</span>, et <span>Designer web</span> & <span>WordPress</span> expert</h1>
          <p className='sub-title'>Bonjour, je m'appelle Abdellah Bensliman, je suis un développeur créatif/full stack basé en France. Au fil des années, j'ai développé un ensemble de compétences dans une gamme de technologies et de frameworks. Où j'apprécie vraiment le code propre et lisible. Je suis également très passionné par l'UX/UI.</p>
          </div>
        <div className='right-section animation'>
        <Lottie className='developper-animation' style={{width: 370}} animationData={developperAnimation} />
        </div>

      </section>

      <div className='divider'/>


      <section class="skills_section" id='skills'>
        <div class="skills_head">
            <h2 className='subtitle-h2'>Compétences</h2>
        </div>

        <div class="skills_main">
            <div class="skill_bar">
                <div class="info">
                    <p>HTML</p>
                    <p>90%</p>
                </div>
                <div class="bar">
                    <span class="html"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p>CSS</p>
                    <p>85%</p>
                </div>
                <div class="bar">
                    <span class="css"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p>SASS</p>
                    <p>70%</p>
                </div>
                <div class="bar">
                    <span class="sass"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p>Bootstrap</p>
                    <p>80%</p>
                </div>
                <div class="bar">
                    <span class="boots"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p>Java Script</p>
                    <p>80%</p>
                </div>
                <div class="bar">
                    <span class="js"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p>React js</p>
                    <p>75%</p>
                </div>
                <div class="bar">
                    <span class="react"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p>Node js</p>
                    <p>70%</p>
                </div>
                <div class="bar">
                    <span class="node"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p>Express js</p>
                    <p>65%</p>
                </div>
                <div class="bar">
                    <span class="express"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p>Next Js</p>
                    <p>35%</p>
                </div>
                <div class="bar">
                    <span class="next"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p>Jquery</p>
                    <p>60%</p>
                </div>
                <div class="bar">
                    <span class="jquery"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p>Mongo DB</p>
                    <p>70%</p>
                </div>
                <div class="bar">
                    <span class="mongo"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p>Php</p>
                    <p>70%</p>
                </div>
                <div class="bar">
                    <span class="php"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p>Sql</p>
                    <p>65%</p>
                </div>
                <div class="bar">
                    <span class="sql"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p>Laravel</p>
                    <p>60%</p>
                </div>
                <div class="bar">
                    <span class="laravel"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p>Symfony</p>
                    <p>45%</p>
                </div>
                <div class="bar">
                    <span class="symfony"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p>Git</p>
                    <p>60%</p>
                </div>
                <div class="bar">
                    <span class="git"></span>
                </div>
            </div>
        </div>
    </section>

    <div className='divider'/>

    <h2 className='subtitle-h2'>Services</h2>
        <section className='wrapper' id='services'>
            <div class="card">
                <div class="card__content">
                    <img src="src/assets/img/wordpress2.png" alt="" />
                    <h2>WordPress Website</h2>
                    <p>Création de sites Web dynamiques avec WordPress et WooCommerce, intégrant des fonctionnalités avancées de commerce électronique. Une expertise qui associe la flexibilité de WordPress à la puissance de WooCommerce pour créer des plateformes en ligne robustes et évolutives, optimisées pour la croissance de votre entreprise.</p>
                </div>
            </div>

            <div class="card">
                <div class="card__content">
                <img src="src/assets/img/codding2.png" alt="" />   
                <h2>Custome Website</h2>
                <p>Conception de sites Web responsive, exploitant les dernières technologies pour offrir une expérience utilisateur optimale. Des solutions modernes qui harmonisent design et fonctionnalités, pour répondre aux besoins de votre audience cible.</p>
                </div>
            </div>

            <div class="card">
                <div class="card__content">
                <img src="src/assets/img/ux.ui2.png" alt="" />  
                <h2>UX/UI Design logo</h2>
                <p>Conception UX/UI raffinée pour une expérience utilisateur immersive. De la création de logos distinctifs à la mise en œuvre d'interfaces intuitives, mon approche fusionne design innovant et fonctionnalités harmonieuses pour renforcer l'identité de votre marque et captiver votre audience.</p>

                </div>
            </div>
        </section>


        <div className='divider'/>

        <section className='contact-us' id='contact'>
            <h2 className='subtitle-h2'>Contactez moi</h2>
            <p>Contactez moi pour plus d'informations</p>

            <div style={{justifyContent: "space-between"}} className='flex'>
                <div className="form-container">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Adresse mail</label>
                            <input autoComplete='off' type="text" id="email" name="email" required=""/>
                            <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" rows="10" cols="50" required=""></textarea>
                            <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                            />
                        </div>
                        <button className="form-submit-btn" type="submit" disabled={state.submitting}>Envoyer</button>
                        {state.succeeded && 
                        (<p className='flex'>
                            <Lottie  loop={false} style={{height: 37}} animationData={doneAnimation} />
                            Votre message a été envoyé avec succès.
                        </p>
                        )}
                    </form>
                </div>
                <div><Lottie className='contact-animation' style={{height: 400}} animationData={emailAnimation} /></div>
            </div>
        </section>

        <div className='divider'/>

    </div>
  )
}
