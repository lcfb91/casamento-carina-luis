// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from 'react'
import {
    content,
    photo,
    contentLeft,
    contentRight,
    subtitle,
    contentRightInner,
    heading,
    paragraph,
    button
} from './photo-detail-section.module.css'

/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const PhotoDetailSection = ({imageSrc, sectionName, title, paragraphText, buttonText, buttonUrl}) => {
    return (
      
        <section className={content}>
            <div className={contentLeft}>
                <img src={imageSrc} loading="lazy" alt="" width="70" className={photo} />
            </div>            
            <div className={contentRight}>
                <div className={contentRightInner}>
                    <div className={subtitle}>{sectionName}</div>
                    <h2 className={heading}>{title}</h2>
                    <p className={paragraph}>{paragraphText}</p>
                    <a className={button} href={ buttonUrl }>{buttonText}</a>
                </div>                
            </div>
        </section>
  )
}

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default PhotoDetailSection