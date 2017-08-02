import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Styles/SearchBarStyles'
import { Colors, Metrics } from '../Themes/'
import FontAwesome from 'react-fontawesome'

export default class SearchBar extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    searchTerm: PropTypes.string
  }

  render () {
    const { onSearch, onCancel, searchTerm } = this.props
    const onSubmitEditing = () => onSearch(searchTerm)
    return (
      <div style={styles.container}>
        <FontAwesome name='search' size={Metrics.icons.tiny} style={styles.searchIcon} />
        <input
          type='text'
          ref='searchText'
          autoFocus
          placeholder='Search'
          placeholderTextColor={Colors.snow}
          underlineColorAndroid='transparent'
          style={styles.searchInput}
          value={this.props.searchTerm}
          onChangeText={onSearch}
          autoCapitalize='none'
          onSubmitEditing={onSubmitEditing}
          returnKeyType={'search'}
          autoCorrect={false}
          selectionColor={Colors.snow}
        />
        <button type='button' onPress={onCancel} style={styles.cancelButton}>
          <span style={styles.buttonLabel}>Cancel</span>
        </button>
      </div>
    )
  }
}
