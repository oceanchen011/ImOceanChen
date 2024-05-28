import React from 'react'

const styles = {
  container: {
    maxWidth: '80rem',
    margin: 'auto',
    padding: '3rem 1rem 6rem 1rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: '1rem',
  },
  header: {
    gridColumn: 'span 4 / span 4',
    fontSize: '1.875rem',
    fontWeight: 'bold',
  },
  content: {
    gridColumn: 'span 8 / span 8',
  },
  paragraph: {
    marginBottom: '2rem',
    fontSize: '1.25rem',
    color: '#4B5563',
  },
  divider: {
    margin: '20px 0',
    border: '1px solid #ddd'
  }
}

export const WorkExperienceCont = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Work Experience</h2>
      <div style={styles.content}>
        <div style={styles.paragraph}>
          <p>
            <strong>Intern at Matrix One Robotics</strong>
            <p style={{ fontSize: '1.2rem' }}> Summer 2023 - Present </p>
            Matrix One is a start-up focused on revolutionizing AI and robotics technology. I worked as the main UI engineer by developing the frontend applications. This includes the main webpage interface and controls for the robot.
          </p>
          <hr style={styles.divider} />
          <p>
            <strong>BDC Representative at Mercedes-Benz of West Covina</strong>
            <p style={{ fontSize: '1.2rem' }}> Summer 2021 - Present </p>
            Envision Motors is the leading automotive organization of Southern California. I work as a call representative for their Mercedes store in West Covina. My job is to keep customers satisfied and ensure the most excellent of service.
          </p>
          <hr style={styles.divider} />
          <p>
            <strong>Hospitality Volunteer at the Arcadia Methodist Hospital</strong>
            <p style={{ fontSize: '1.2rem' }}> Winter 2018 - Spring 2020</p>
            The job of hospitality is to help patients feel more comfortable being in a hospital. This consists of tending to their needs, providing food and beverages, or just talking to them.
          </p>
        </div>
      </div>
    </div>
  )
}
