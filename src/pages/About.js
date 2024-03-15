import React from 'react'
import Health from '../components/core/about/Health'
import Performance from '../components/core/about/Performance'
import Team from '../components/core/about/Team'
import Contact from '../components/common/Contact'

const About = () => {
  return (
    <div>
      <Performance/>
      <Team/>
      <Health/>
      <Contact/>
    </div>
  )
}

export default About