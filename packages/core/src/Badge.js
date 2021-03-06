import React from 'react'
import styled from 'styled-components'
import { themeGet, space } from 'styled-system'
import { applyVariations, color, deprecatedColorValue } from './utils'

const type = props => {
  const badgeColors = {
    blue: {
      backgroundColor: props.theme.colors.blue,
      color: props.theme.colors.white
    },
    lightBlue: {
      backgroundColor: props.theme.colors.lightBlue,
      color: props.theme.colors.darkBlue
    },
    green: {
      backgroundColor: props.theme.colors.green,
      color: props.theme.colors.white
    },
    lightGreen: {
      backgroundColor: props.theme.colors.lightGreen,
      color: props.theme.colors.darkGreen
    },
    red: {
      backgroundColor: props.theme.colors.red,
      color: props.theme.colors.white
    },
    lightRed: {
      backgroundColor: props.theme.colors.lightRed,
      color: props.theme.colors.darkRed
    },
    orange: {
      backgroundColor: props.theme.colors.orange,
      color: props.theme.colors.text
    },
    gray: {
      backgroundColor: props.theme.colors.gray,
      color: props.theme.colors.white
    },
    lightGray: {
      backgroundColor: props.theme.colors.lightGray,
      color: props.theme.colors.text
    }
  }
  return (
    !(props.bg && props.color) &&
    (badgeColors[props.bg] || badgeColors.lightGray)
  )
}

const Badge = styled.div`
  border-radius: 99999px;
  display: inline-block;
  font-size: ${props => props.theme.fontSizes[0]}px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: ${themeGet('letterSpacings.caps')};
  ${space} ${type} ${color};
  ${applyVariations('Badge')}
`

Badge.displayName = 'Badge'

Badge.propTypes = {
  ...space.propTypes,
  color: deprecatedColorValue(),
  bg: deprecatedColorValue()
}

Badge.defaultProps = {
  px: 2,
  py: 1
}

export default Badge
