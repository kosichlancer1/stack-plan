import React from 'react'
import styled from 'styled-components'
import { useMemo } from 'react'

const Title = styled.p`
  font-size: 14px;
  color: #888888;
  margin-bottom: 25px;
  margin-top: 0;
`

const Value = styled.p`
  font-size: 48px;
  margin-top: 0;
  margin-bottom: 30px;
`

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`

export const PotentialCapacity = ({ total }) => {
  const potentialCapacity = useMemo(() => Math.round(total / 8), [total])

  return (
    <Root>
      <Title>Potential capacity</Title>
      <Value>{potentialCapacity}</Value>
    </Root>
  )
}
