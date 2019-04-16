import React from 'react'
import IconButton from './IconButton'
import PropTypes from 'prop-types'
import { Close } from 'pcln-icons-perf'
import theme from './theme'

const CloseButton = props => <IconButton {...props} icon={Close} />

CloseButton.defaultProps = {
  size: 24,
  title: 'close'
}

CloseButton.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.number,
  title: PropTypes.string
}

CloseButton.displayName = 'CloseButton'

export default CloseButton
