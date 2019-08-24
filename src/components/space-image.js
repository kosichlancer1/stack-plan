import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  max-width: 65%;
`

const Root = styled.div`
  background-color: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 22px 0;
  margin-bottom: 35px;
`

export const SpaceImage = ({ src }) => (
  <Root>
    <Img src={src} />
  </Root>
)

SpaceImage.defaultProps = {
  src: './images/space.png'
}
