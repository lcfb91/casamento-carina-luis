// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from 'react'
import Topbar from './topbar'
import {
    content
} from './layout.module.css'

/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const Layout = ({children}) => {
    return (
      
        <body>
            {/* <Topbar/> */}
            <main className={content}>
                {children}
            </main>
        </body>
  )
}

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default Layout