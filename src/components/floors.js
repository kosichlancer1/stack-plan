import React from 'react'
import { Floor } from './floor'

import styled from 'styled-components'

const Root = styled.div`
  display: flex;
  flex-direction: column-reverse;
  max-height: 90vh;
  overflow-y: scroll;
  flex-flow: column nowrap;
  & > *:first-child {
    margin-top: auto !important;
  }
`

export const Floors = ({ floors, maxArea, chooseSpace, currentSpaceId }) => {
  return (
    <Root>
      {Boolean(floors.length) &&
        floors.map(floor => (
          <Floor
            maxArea={maxArea}
            key={floor.uuid}
            floor={floor}
            chooseSpace={chooseSpace}
            currentSpaceId={currentSpaceId}
          />
        ))}
    </Root>
  )
}
