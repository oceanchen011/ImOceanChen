import React from 'react'

const footerStyles = {
  container: {
    width: '100%',
    padding: '1rem',
    backgroundColor: '#111827',
    color: 'white',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    left: 0,
    zIndex: 1000,
    transition: 'transform 0.5s ease-in-out',
  },
  text: {
    margin: 0,
    fontSize: '1rem',
  },
}

export const Footer = () => (
  <div style={footerStyles.container}>
    <p style={footerStyles.text}>© 2024 Ocean Chen. All rights reserved.</p>
  </div>
)

export default Footer