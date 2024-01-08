// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from 'react'
import {
    imageSection,
    imageGrid,
    imageTextContainer,
    imageText,
    imageTextDate,
    coverImageLeft,
    coverImageMiddle,
    coverImageRight
} from './image-section.module.css'

import coverImage from '../images/cover.jpg'
import coverMiddle from '../images/cover-middle.jpg'


/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const ImageSection = () => {
    return (
        <div className={imageSection}>
            <div className={imageGrid}>
                <img src={coverImage} className={coverImageLeft} alt="logo" />
                <img src={coverMiddle} className={coverImageMiddle}  alt="logo" />
                <img src={coverImage} className={coverImageRight}  alt="logo" />
            </div>
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
export default ImageSection