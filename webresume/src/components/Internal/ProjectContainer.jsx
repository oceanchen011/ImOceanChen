import React from 'react'

const projectStyles = {
  projectContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    margin: '1rem',
    maxWidth: '14vw'
  },
  projectHeader: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '1rem',
  },
  projectList: {
    width: '100%',
    listStyleType: 'none',
    padding: 0,
  },
  projectItem: {
    marginBottom: '1rem',
    padding: '1rem',
    border: '1px solid #e5e7eb',
    borderRadius: '0.375rem',
    transition: 'background-color 0.3s, transform 0.3s',
  },
  projectTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '0.5rem',
  },
  projectDescription: {
    fontSize: '1rem',
    color: '#4b5563',
  },
}

export const projects = [
  {
    title: 'Pickle Circuits',
    description: 'A React app created with a couple friends for Pickleball tournament or casual scorekeeping.',
    url: 'https://github.com/CaminoPickleCoders/PickleCircuits'
  },
  {
    title: 'Live Active',
    description: 'A workout tracking website built with React. It has an internal database using MongoDB and uses many APIs for workout recommendations.',
    url: 'https://github.com/xTh3Unkn0wnx/CS-180-Live-Active'
  },
  {
    title: 'Hackslash',
    description: 'A fully functioning compiler that compiles a language specifically created by us called Hackslash.',
    url: 'https://github.com/CS152-Fall23/cs152-lab-cs152f23-project-022-hackslash'
  },
  {
    title: 'Tic-Tac-Toe',
    description: 'Simple Tic-Tac-Toe game created using HTML, CSS, and JavaScript.',
    url: ''
  },
  {
    title: 'NY Times API with React',
    description: 'Project fetching popular articles from the New York Times API using JavaScript.',
    url: ''
  },
  {
    title: 'Web Server',
    description: 'A functional web server that stores and deletes books inputted by the user.',
    url: ''
  },
]

export const ProjectContainer = ({ projects }) => {
  const handleClick = (url) => {
    window.open(url, '_blank')
  }

  return (
    <>
      {projects.map((project, index) => (
        <div 
          key={index} 
          style={{ ...projectStyles.projectContainer, cursor: 'pointer' }} 
          onClick={() => handleClick(project.url)}
        >
          <h2 style={projectStyles.projectHeader}>{project.title}</h2>
          <p style={projectStyles.projectDescription}>{project.description}</p>
        </div>
      ))}
    </>
  )
}
