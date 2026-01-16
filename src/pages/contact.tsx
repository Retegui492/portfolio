import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'
import './contact.css'

function Contact() {
  return (
    <section id='contact' className="contact">
      <h2 className='contact--name'>Contato</h2>

      <div className="contact-list">
        <a>
          <FaEnvelope />
          <span>ejhonatan29@gmail.com</span>
        </a>

        <a>
          <FaPhone />
          <span>(11) 91176-2521</span>
        </a>

        <a
          href="https://linkedin.com/in/jhonatan-hermenegildo-ribeiro-151184268/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/Retegui492"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>
      </div>
    </section>
  )
}

export default Contact
