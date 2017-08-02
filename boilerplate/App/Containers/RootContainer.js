import React, { Component } from 'react'
//import ReduxNavigation from '../Navigation/ReduxNavigation'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'

import LaunchScreen from './LaunchScreen'
// Styles
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {
  componentDidMount () {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }

  render () {
    return (
      <div style={styles.applicationView}>
        <Route path="/" exact component={LaunchScreen}/>
      </div>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapDispatchToProps)(RootContainer)
