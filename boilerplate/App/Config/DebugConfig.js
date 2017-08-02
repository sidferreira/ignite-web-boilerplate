export default {
  useFixtures: false,
  ezLogin: false,
  yellowBox: process.env.NODE_ENV === 'development',
  reduxLogging: process.env.NODE_ENV === 'development',
  includeExamples: process.env.NODE_ENV === 'development',
  useReactotron: false
}
