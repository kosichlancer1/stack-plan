import React, { useCallback, useMemo } from 'react'
import styled from 'styled-components'

const Root = styled.div`
  background-color: ${p => (p.isCurrentSpace ? '#ffdb59' : '#81f7c5')};
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 0;
  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    background-color: #ffdb59;
  }
`

export const Space = ({ space, chooseSpace, floorId, currentSpaceId }) => {
  const handleClick = useCallback(
    () => chooseSpace({ spaceId: space.uuid, floorId }),
    [chooseSpace, floorId, space.uuid]
  )

  const isCurrentSpace = useMemo(() => currentSpaceId === space.uuid, [currentSpaceId, space.uuid])

  return (
    <Root isCurrentSpace={isCurrentSpace} onClick={handleClick}>
      {space.total_area_size} sf
    </Root>
  )
}
