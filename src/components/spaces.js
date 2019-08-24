import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Space } from './space'

const Root = styled.div`
  display: grid;
  grid-template-columns: ${p => p.spacesWidth};
  grid-gap: 4px;
  overflow: hidden;
`

export const Spaces = ({ spaces, chooseSpace, floorId, currentSpaceId }) => {
  const totalArea = useMemo(
    () => spaces.map(space => space.total_area_size).reduce((a, b) => a + b, 0),
    [spaces]
  )

  const spacesWidth = useMemo(
    () =>
      spaces.map(
        space => `${((space.total_area_size / totalArea) * 100).toFixed(1)}%`
      ),
    [spaces, totalArea]
  )

  return (
    <Root spacesWidth={spacesWidth}>
      {Boolean(spaces.length) &&
        spaces.map(space => (
          <Space
            key={space.uuid}
            chooseSpace={chooseSpace}
            floorId={floorId}
            space={space}
            currentSpaceId={currentSpaceId}
          />
        ))}
    </Root>
  )
}
