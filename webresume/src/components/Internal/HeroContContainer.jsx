import React from 'react';
import pfpImage from '../../Dependencies/PFP.jpg';

const heroContStyles = {
  heroMainCont: {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    padding: '100px 50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftContainer: {
    marginRight: '20px',
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  topRightContainer: {
    marginBottom: '20px',
  },
};

const styles = {
  miniIconUCR: {
    width: '250px',
    height: '250px',
  },
  miniIcon: {
    width: '250px',
    height: '250px',
  },
  miniIconMTG: {
    width: '325px',
    height: '250px',
  },
};

export const HeroContContainer = () => {
  return (
    <div style={heroContStyles.heroMainCont}>
      <div style={heroContStyles.leftContainer}>
        <img
          src={pfpImage}
          style={{
            width: '450px',
            height: '500px',
            borderRadius: '30px',
          }}
        />
      </div>
      <div style={heroContStyles.rightContainer}>
        <div style={heroContStyles.topRightContainer}>
          <p style={{ marginBottom: '2rem', fontSize: '1.25rem', color: '#4B5563' }}>
            Hi there, nice to meet you! My name is Ocean Chen.
          </p>
          <p style={{ marginBottom: '2rem', fontSize: '1.25rem', color: '#4B5563' }}>
            I'm an aspiring Web App developer currently attending the University of California, Riverside for a Bachelors in Computer Science.
          </p>
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/UC_Riverside_Highlanders_logo.svg/1200px-UC_Riverside_Highlanders_logo.svg.png"
            style={styles.miniIconUCR}
          />
          <img
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            style={styles.miniIcon}
          />
          <img
            src="https://1000logos.net/wp-content/uploads/2022/10/Magic-The-Gathering-Logo-1993.png"
            style={styles.miniIconMTG}
          />
          <img
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww"
            style={{
              width: '20rem',
              height: '15rem'
            }}
          />
        </div>
      </div>
    </div>
  );
};
