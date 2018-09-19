import image from './logo.png'
import styled from 'styled-components'

const LogoImage = styled.Image.attrs({
  source: image,
})`
  width: 100px;
  height: 100px;
  resize-mode: contain;
`

export default LogoImage
