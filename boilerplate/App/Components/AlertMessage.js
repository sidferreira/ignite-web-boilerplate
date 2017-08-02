import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Styles/AlertMessageStyles'

export default class AlertMessage extends Component {
  static defaultProps = { show: true }

  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    style: PropTypes.object,
    show: PropTypes.bool
  }

  render () {
    let messageComponent = null
    if (this.props.show) {
      const { title } = this.props
      return (
        <div
          style={[styles.container, this.props.style]}
        >
          <div style={styles.contentContainer}>
            <span allowFontScaling={false} style={styles.message}>{title && title.toUpperCase()}</span>
          </div>
        </div>
      )
    }

    return messageComponent
  }
}
