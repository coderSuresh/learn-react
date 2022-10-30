import React from 'react'

const About = (props) => {
  return (
    <main className='main-content'>
          <h2 className='title'>{props.title}</h2>
          <p className='content'>{props.content}</p>
    </main>
  )
}

export default About
