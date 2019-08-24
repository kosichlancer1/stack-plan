import React from 'react'
import StackPlanContainer from '../containers/stack-plan-container'
import SpaceContainer from '../containers/space-plan-container'
import styled from 'styled-components'

const Root = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 30px 15px;
  display: grid;
  grid-template-columns: 600px 1fr;
  grid-gap: 10px;
  align-items: flex-start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`

export const MainPage = () => {
  return (
    <Root>
      <StackPlanContainer />
      <SpaceContainer />
    </Root>
  )
}
