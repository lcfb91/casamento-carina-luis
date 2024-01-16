// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from 'react'
import {
    content,
    signature,
    heading,
    textSectionLogo,
    textSectionParagraph
} from './text-section.module.css'

/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const TextSection = ({title, paragraph}) => {
    return (
      
        <section className={content}>
            <img src="https://assets-global.website-files.com/6109925e44b6ab8a7601f26a/610c7de4acbdd5b712b1338f_extra.png" loading="lazy" alt="" width="70" className={textSectionLogo}></img>
            <h4 className={heading}>{title}</h4>
            <p className={textSectionParagraph}>{ paragraph}</p>
            <div className={signature}>Carina Ramos</div>
        </section>
  )
}

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default TextSection