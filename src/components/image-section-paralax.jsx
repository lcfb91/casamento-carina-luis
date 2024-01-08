// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from 'react'
import {
    imageSection,
    coverImageParalax,
    imageTextContainer,
    imageText,
    imageTextDate,
} from './image-section-paralax.module.css'

import coverImage from '../images/cover_edited.jpeg'


/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const ImageSectionParalax = () => {
    return (
        <div className={imageSection}>
            <img src={coverImage} className={coverImageParalax} alt="logo" />
            <div className={imageTextContainer}>
                <div className={imageText}>
                    <h1>Carina & Luis</h1>
                    <p className={imageTextDate}>8 de Junho de 2024</p>
                </div>                
            </div>
        </div>
        
  )
}

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default ImageSectionParalax