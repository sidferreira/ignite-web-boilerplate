const { pathOr, is } = require('ramda')

// the default React Native version for this boilerplate
const REACT_VERSION = '15.6.1'

// where the version lives under gluegun
const pathToVersion = ['parameters', 'options', 'react-version']

// accepts the context and returns back the version
const getVersionFromContext = pathOr(REACT_VERSION, pathToVersion)

/**
 * Gets the React Native version to use.
 *
 * Attempts to read it from the command line, and if not there, falls back
 * to the version we want for this boilerplate.  For example:
 *
 *   $ ignite new Custom --react-version 16
 *
 * @param {*} context - The gluegun context.
 */
const getReactVersion = (context = {}) => {
  const version = getVersionFromContext(context)
  return is(String, version) ? version : REACT_VERSION
}

module.exports = {
  REACT_VERSION,
  getReactVersion
}
