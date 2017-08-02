import React, { Component } from 'react'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <div style={styles.mainContainer}>
        <div style={styles.container}>
          <div style={styles.centered}>
            <img src={Images.launch} style={styles.logo} />
          </div>

          <div style={styles.section} >
            <img src={Images.ready} style={styles.readyImage} />
            <p style={styles.sectionText}>
              This probably isn't what your app is going to look like. Unless your designer handed you this screen and, in that case, congrats! You're ready to ship. For everyone else, this is where you'll see a live preview of your fully functioning app using Ignite.
            </p>
          </div>

        </div>
      </div>
    )
  }
}
