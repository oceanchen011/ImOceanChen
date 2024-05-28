import React from 'react'
import { Animator, batch, Fade, MoveIn } from "react-scroll-motion"
import { FaHtml5, FaReact, FaCss3Alt, FaJava, FaPython } from 'react-icons/fa'

const educationContStyles = {
  eduMainCont: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
  },
  boxesContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',
  },
  scrollContLeft: {
    height: '35rem',
    width: '25rem',
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '1rem',
  },
  scrollContRight: {
    height: '35rem',
    width: '50rem',
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '1rem',
  },
}

const ProgBarStyle = {
  child: {
    content: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    left: {
      svg: {
        fontSize: '20rem',
        fill: '#e34c26',
      },
    },
    right: {
      width: '50vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginLeft: '1rem',
      h1: {
        fontSize: '1rem',
        fontWeight: 'bold',
        marginBottom: '5px',
      },
      skillBar: {
        width: '100%',
        height: '33px',
        borderRadius: '20px',
        backgroundColor: '#e6e1dc',
        padding: '0.2rem',
        progress: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          overflow: 'hidden',
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(27,25,25,1) 0%, rgba(223,33,31,1) 4%, rgba(223,231,48,1), rgba(224,9,39,1) 99%',
          borderRadius: '20px',
        },
        span: {
          lineHeight: '20px',
          fontSize: '0.8rem',
          fontWeight: 'bold',
          color: '#fff',
          marginBottom: '0.3rem'
        },
      },
    },
  },
}

const SkillItem = ({ skill, percentage }) => {
  const [fillWidth, setFillWidth] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(skill)
      if (element) {
        const rect = element.getBoundingClientRect()
        const viewHeight = window.innerHeight || document.documentElement.clientHeight

        if (rect.top < viewHeight && rect.bottom > 0) {
          const visibleHeight = Math.min(rect.bottom, viewHeight) - Math.max(rect.top, 0)
          const elementHeight = rect.height
          const visiblePercentage = (visibleHeight / elementHeight) * percentage
          setFillWidth(visiblePercentage > percentage ? percentage : visiblePercentage)
        } else {
          setFillWidth(0)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [percentage, skill])

  const renderIcon = () => {
    switch (skill) {
      case 'HTML5':
        return <FaHtml5 />
      case 'React':
        return <FaReact />
      case 'CSS':
        return <FaCss3Alt />
      case 'Javascript':
        return <FaJava />
      case 'Python':
        return <FaPython />
      default:
        return null
    }
  }

  return (
    <div id={skill} style={ProgBarStyle.child}>
      <div style={ProgBarStyle.child.content}>
        <div style={ProgBarStyle.child.left}>
          {renderIcon()}
        </div>
        <div style={ProgBarStyle.child.right}>
          <h1>{skill}</h1>
          <div style={ProgBarStyle.child.right.skillBar}>
            <div
              style={{
                ...ProgBarStyle.child.right.skillBar.progress,
                width: `${fillWidth}%`,
                transition: 'width 0.5s ease-out',
                backgroundColor: 'blue',
              }}
            >
              <span style={ProgBarStyle.child.right.skillBar.span}>{Math.round(fillWidth)}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const EducationContainer = () => {
  return (
    <div style={educationContStyles.eduMainCont}>
      <div style={educationContStyles.boxesContainer}>
        <Animator animation={batch(Fade(), MoveIn(-100, 1))}>
          <div style={{ fontSize: '30px' }}>
            <div style={educationContStyles.scrollContLeft}>
              <h2 style={{ color: 'black', textAlign: 'center', marginTop: '1rem' }}>Education</h2>
              <p style={{ fontSize: '1.5rem' }}>
                University of California, Riverside - <b style={{ fontSize: '1.3rem' }}>B.S. in Computer Science</b>
              </p>
              <p style={{ fontSize: '1rem' }}>September 2020 - June 2024</p>
              <br />
              <p style={{ fontSize: '1.5rem' }}>
                Arcadia High School - <b style={{ fontSize: '1.3rem' }}>G.E.D</b>
              </p>
              <p style={{ fontSize: '1rem' }}>August 2016 - June 2020</p>
              <img
                src='https://erp.today/wp-content/uploads/2023/03/news.top25uni.RPoon_-2.jpg'
                style={{ width: '20rem', height: '13rem' }}
              />
            </div>
          </div>
        </Animator>
        <Animator animation={batch(Fade(), MoveIn(100, 1))}>
          <div style={{ fontSize: '30px' }}>
            <div style={educationContStyles.scrollContRight}>
              <h2 style={{ color: 'black', textAlign: 'center', marginTop: '1rem' }}>Skills</h2>
              <SkillItem skill='HTML5' percentage={85} />
              <SkillItem skill='Javascript' percentage={85} />
              <SkillItem skill='React' percentage={90} />
              <SkillItem skill='Python' percentage={60} />
              <SkillItem skill='CSS' percentage={75} />
            </div>
          </div>
        </Animator>
      </div>
    </div>
  )
}
