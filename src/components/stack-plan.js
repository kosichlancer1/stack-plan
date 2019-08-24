import React, { useEffect } from 'react'
import { Card } from './card'
import { Floors } from './floors'
import { Spinner } from './spinner'

import styled from 'styled-components'

const StyledCard = styled(Card)``

export const StackPlan = ({
  stackPlan,
  chooseSpace,
  getStackPlan,
  maxArea,
  isLoading,
  currentSpaceId
}) => {
  useEffect(() => {
    setTimeout(() => {
      getStackPlan()
    }, 500)
  }, [getStackPlan])

  return (
    <StyledCard>
      {isLoading && <Spinner />}
      {!isLoading && (
        <Floors
          chooseSpace={chooseSpace}
          floors={stackPlan}
          maxArea={maxArea}
          currentSpaceId={currentSpaceId}
        />
      )}
    </StyledCard>
  )
}
