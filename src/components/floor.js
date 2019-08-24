import React, { useMemo } from 'react'
import styled from 'styled-components'

import { Spaces } from './spaces'

const Number = styled.div`
  font-size: 12px;
  color: #939393;
  padding: 2px 0px;
  text-align: center;
`

const SpacesWrapper = styled.div`
  padding: 4px 5px;
  background-color: #888888;
  width: ${p => p.width};
`

const FloorWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 8%;
`

const Root = styled.div`
  margin-bottom: 1px;
  display: grid;
  grid-template-columns: 26px 1fr;
  align-items: center;

  &:hover {
    ${Number} {
      background-color: #ffdb59;
      color: #302b30;
    }
  }
`

export const Floor = ({ floor, maxArea, chooseSpace, currentSpaceId }) => {
  const { total_area, number } = floor
  const floorWidth = useMemo(() => `${100 / (maxArea / total_area)}%`, [
    maxArea,
    total_area
  ])

  return (
    <Root>
      <Number>{number}</Number>
      <FloorWrapper>
        <SpacesWrapper width={floorWidth}>
          <Spaces
            chooseSpace={chooseSpace}
            number={number}
            spaces={floor.spaces}
            totalArea={total_area}
            floorId={floor.uuid}
            currentSpaceId={currentSpaceId}
          />
        </SpacesWrapper>
      </FloorWrapper>
    </Root>
  )
}
