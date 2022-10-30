import React from 'react'
import twitterIcon from '../../images/icon_twitter.svg'
import facebookIcon from '../../images/icon_facebook.svg'
import instagramIcon from '../../images/icon_instagram.svg'
import githubIcon from '../../images/icon_github.svg'

const Footer = () => {
  return (
    <footer className='footer'>
      <img src={twitterIcon} alt='twitter' aria-label='twitter'/>
      <img src={facebookIcon} alt='facebook' aria-label='facebook'/>
      <img src={instagramIcon} alt='instagram' aria-label='instagram'/>
      <img src={githubIcon} alt='github' aria-label='github'/>
    </footer>
  )
}

export default Footer
