// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from 'react'
import {
    content,
    contact,
    heading,
    contactLink
} from './contacts-section.module.css'

/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const ContactsSection = () => {
    return (
      
        <section className={content}>
            <div className={contact}>
                <h5 className={heading}>Carina Ramos</h5>
                <a href="tel:+351937495042" target="_blank" className={contactLink}>937 495 042</a>
            </div>
            <div className={contact}>
                <h5 className={heading}>Luis Borges</h5>
                <a href="tel:+351933488373" target="_blank" className={contactLink}>933 488 373</a>
            </div>
        </section>
  )
}

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default ContactsSection