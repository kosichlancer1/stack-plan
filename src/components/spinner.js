import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
  min-height: 100vh;

  @keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    50% {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .spinner div {
    position: absolute;
    animation: spinner 1s linear infinite;
    width: 80px;
    height: 80px;
    top: 10px;
    left: 10px;
    border-radius: 50%;
    box-shadow: 0 4px 0 0 #00bac7;
    transform-origin: 40px 41px;
  }

  .spinner {
    position: relative;
    width: 100px;
    height: 100px;
    transform: translate(-50px -50px) scale(1) translate(50px 50px);
  }
`

export const Spinner = () => {
  return (
    <Root>
      <div className="spinner">
        <div />
      </div>
    </Root>
  )
}
