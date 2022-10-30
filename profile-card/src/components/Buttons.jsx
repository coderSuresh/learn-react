import React from 'react'
import mailIcon from '../../images/icon_mail.svg'
import linkedinIcon from '../../images/icon_linkedin.svg'
const Buttons = () => {
    return (
        <section className='buttons'>
            <button className='button'><img src={mailIcon} aria-hidden="true" role="presentation" className='icon' /><p>Email</p></button>
            <button className='button linkedin-btn'><img src={linkedinIcon} aria-hidden="true" role="presentation" className='icon' /><p>Linkedin</p></button>
        </section>
    )
}

export default Buttons
