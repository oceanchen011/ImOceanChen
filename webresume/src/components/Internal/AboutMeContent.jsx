import React from 'react'

const styles = {
  miniIconGoogle: {
    width: '200px',
    height: '200px',
  },
  miniIconBliz: {
    width: '250px',
    height: '200px',
  },
  miniIconUCR: {
    width: '250px',
    height: '250px',
  },
  paragraph: {
    marginBottom: '2rem',
    fontSize: '1.25rem',
    color: '#4B5563',
  },
}

const fadeStyles = {
  container: {
    maxWidth: '80rem',
    margin: 'auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(10, 1fr)',
    gap: '1rem',
  },
  header: {
    gridColumn: 'span 4 / span 4',
    fontSize: '1.875rem',
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    gridColumn: 'span 8 / span 8',
  },
  paragraph: {
    marginBottom: '2rem',
    fontSize: '1.25rem',
    color: '#4B5563',
  },
}

export const AboutMeContent = () => {
  return (
    <div style={fadeStyles.container}>
      <h2 style={fadeStyles.header}>
        A little bit about me...
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <img
            src="https://yt3.googleusercontent.com/viNp17XpEF-AwWwOZSj_TvgobO1CGmUUgcTtQoAG40YaYctYMoUqaRup0rTxxxfQvWw3MvhXesw=s900-c-k-c0x00ffffff-no-rj"
            style={{ ...styles.miniIconGoogle, marginRight: '20px' }}
          />
          <img
            src="https://download.logo.wine/logo/Blizzard_Entertainment/Blizzard_Entertainment-Logo.wine.png"
            style={{ ...styles.miniIconBliz, marginLeft: '20px' }}
          />
        </div>
      </h2>
      <div style={fadeStyles.content}>
        <p style={fadeStyles.paragraph}>
          I started my coding journey in high school where I learned the fundamentals of coding using Java. Ever since I was young, I've always been interested in computers and technology but it wouldn't be until high school where I would gain my first coding experience.
        </p>
        <p style={fadeStyles.paragraph}>
          In college, I found myself extremely interested in working as a full stack developer for web applications. My goal is to work as a developer for Activision Blizzard or Google.
        </p>
        <a 
          href="https://docs.google.com/document/d/1-M8mQDZPcavVr0MvYRF8iSX5gVwwUj_HxKvpPtB9KWw/edit?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ display: 'inline-block', width: '10vw', height: '6vh', lineHeight: '6vh', textAlign: 'center', backgroundColor: '#007BFF', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}
        >
          Resume
        </a>
      </div>
    </div>
  )
}
