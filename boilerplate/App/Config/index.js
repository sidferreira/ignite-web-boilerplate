import DebugConfig from './DebugConfig'

if (process.env.NODE_ENV === 'development') {
  // If ReactNative's yellow box warnings are too much, it is possible to turn
  // it off, but the healthier approach is to fix the warnings.  =)
  console.disableYellowBox = !DebugConfig.yellowBox
}
