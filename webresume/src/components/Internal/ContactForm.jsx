import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const formStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  icon: {
    margin: '0 10px',
    fontSize: '4em',
    cursor: 'pointer',
  },
  githubIcon: {
    color: 'black',
  },
  linkedinIcon: {
    color: '#0077B5',
  },
  emailIcon: {
    color: 'white',
    backgroundColor: '#0077B5',
    borderRadius: '10%',
  },
}

export const ContactForm = () => {
  return (
    <div style={formStyles.container}>
      <h2>Feel Free to send me an Email!</h2>
      <h1>oceanchen999@gmail.com</h1>
      <div style={formStyles.iconContainer}>
        <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
          <FaGithub style={{ ...formStyles.icon, ...formStyles.githubIcon }} />
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer">
          <FaLinkedin style={{ ...formStyles.icon, ...formStyles.linkedinIcon }} />
        </a>
        <a 
          href="mailto:oceanchen999@gmail.com?subject=Contacting%20You&body=Hello%20Ocean,%0D%0A%0D%0AI%20wanted%20to%20reach%20out%20to%20you%20because..."
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaEnvelope style={{ ...formStyles.icon, ...formStyles.emailIcon }} />
        </a>
      </div>
    </div>
  )
}
