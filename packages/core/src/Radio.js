import React from 'react'
import styled from 'styled-components'
import theme from './theme'
import { RadioChecked, RadioEmpty } from 'pcln-icons-perf'

const RadioWrap = styled.div`
  display: inline-block;
  color: ${props => props.theme.colors.borderGray};
  &:hover {
    ${props =>
      props.checked || props.disabled
        ? null
        : `color: ${props.theme.colors.blue};`};
  }
`

const RadioInput = styled.input`
  appearance: none;
  opacity: 0;
  position: absolute;
  z-index: 0;
  &:focus {
    box-shadow: none;
  }
  &:checked ~ svg {
    color: ${props => props.theme.colors.blue};
  }
  &:disabled ~ svg {
    color: ${props => props.theme.colors.borderGray};
  }
`

const Radio = props => {
  const { checked, disabled } = props

  const Icon = checked ? RadioChecked : RadioEmpty

  const RadioIcon = styled(Icon)`
    vertical-align: middle;
  `

  return (
    <RadioWrap checked={checked} disabled={disabled}>
      <RadioInput type="radio" {...props} />
      <RadioIcon size={24} />
    </RadioWrap>
  )
}

Radio.defaultProps = {
  theme: theme
}

export default Radio
