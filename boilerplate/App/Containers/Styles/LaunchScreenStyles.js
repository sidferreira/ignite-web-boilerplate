import { Metrics, ApplicationStyles, Images } from '../../Themes/'

export default {
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin,
    maxWidth: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center'
  },
  mainContainer: {
    ...ApplicationStyles.screen.mainContainer,
    backgroundImage: `url(${Images.background})`,
    backgroundSize: 'cover',
    minHeight: '100vh'
  },
  section: {
    ...ApplicationStyles.screen.section
  },
  logo: {
    marginTop: Metrics.doubleSection,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: Metrics.images.logo,
    width: Metrics.images.logo
  },
  readyImage: {
    maxWidth: '100%'
  }
}
