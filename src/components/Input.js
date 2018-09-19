// @flow
import styled from 'styled-components'

const Input = styled.TextInput.attrs({
  underlineColorAndroid: 'transparent',
})`
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.color.coolGray};
  font-size: ${({ theme }) => theme.size.m};
`

export default Input
