// @flow
import React from 'react'
import styled from 'styled-components'

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, containerBackgroundColor }) =>
    containerBackgroundColor || theme.color.coolGray};
`

const Indicator = styled.ActivityIndicator.attrs({
  color: ({ theme }) => theme.color.orange,
})``

const Preloader = ({ renderContainer, containerBackgroundColor }) =>
  renderContainer ? (
    <Container containerBackgroundColor={containerBackgroundColor}>
      <Indicator />
    </Container>
  ) : (
    <Indicator />
  )

export default Preloader
