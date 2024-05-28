import React from 'react'
import { Animator, batch, Fade, MoveIn, MoveOut } from "react-scroll-motion"

const HobbyContStyles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem',
    padding: '1rem',
    width: '100vw',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hobbyBox: {
    padding: '1rem',
    borderRadius: '8px',
    width: '100%',
    height: '100%',
  },
  hobbyImage: {
    width: '300px',
    height: '150px',
  },
  hobbyText: {
    fontSize: '2rem',
  },
}

export const HobbyContainer = () => {
  return (
    <div style={{ ...HobbyContStyles.container, justifyContent: 'space-between' }}>
      <Animator animation={batch(Fade(), MoveIn(0, -200), MoveOut(0, -200))}>
        <span style={{ fontSize: "30px" }}>
          <div style={HobbyContStyles.hobbyBox}>
            <p style={HobbyContStyles.hobbyText}> I'm a huge fan of video games. My favorite includes the Starcraft series, League of Legends, and Magic the Gathering.</p>
            <img src='https://pngimg.com/d/starcraft_PNG68.png' alt="Starcraft" style={HobbyContStyles.hobbyImage} />
            <img src='https://www.pngall.com/wp-content/uploads/2016/05/League-of-Legends-PNG-Pic.png' alt="LeagueOfLegends" style={HobbyContStyles.hobbyImage} />
          </div>
        </span>
      </Animator>
      <Animator animation={batch(Fade(), MoveIn(200, 0), MoveOut(200, 0))}>
        <span style={{ fontSize: "30px" }}>
          <div style={HobbyContStyles.hobbyBox}>
            <p> When I was young, I had the opportunity to travel a lot. I love exploring new countries, experiencing the great culture and amazing local delicacies! </p>
            <img src='https://www.celebritycruises.com/blog/content/uploads/2022/01/japan-landmarks-mount-fuji-shimizu-1024x619.jpg' alt="JapanPic" style={HobbyContStyles.hobbyImage} />
            <img src='https://cdn.enjoytravel.com/img/travel-news/forbidden-city-beijing.jpg' alt="ChinaPic" style={HobbyContStyles.hobbyImage} />
          </div>
        </span>
      </Animator>
      <Animator animation={batch(Fade(), MoveIn(-200, 0), MoveOut(-200, 0))}>
        <span style={{ fontSize: "30px" }}>
          <div style={HobbyContStyles.hobbyBox}>
            <p> I also really enjoy music. I have been playing piano since 8 years old. The highlight of my career was being invited to San Jose Performance Center for a recital.</p>
            <img src='https://akustiks.com/wp-content/uploads/The-Ordway-Center-Piano-on-Stage-1.jpg' alt="SJPerformanceCenter" style={HobbyContStyles.hobbyImage} />
            <img src='' alt="SelfPic" style={HobbyContStyles.hobbyImage} />
          </div>
        </span>
      </Animator>
      <Animator animation={batch(Fade(), MoveIn(0, 200), MoveOut(0, 200))}>
        <span style={{ fontSize: "30px" }}>
          <div style={HobbyContStyles.hobbyBox}>
            <p> I love art and always enjoyed drawing as a kid. As I grew older I shifted to painting miniatures. I truly enjoy bringing fictional characters to life and to express my skills and technique!</p>
            <img src='https://assetsio.gnwcdn.com/warhammer-40000-ninth-edition-space-marine-army.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp' alt="Starcraft" style={HobbyContStyles.hobbyImage} />
            <img src='https://i.redd.it/6axng32y3etb1.jpg' alt="LeagueOfLegends" style={HobbyContStyles.hobbyImage} />
          </div>
        </span>
      </Animator>
    </div>
  )
}
