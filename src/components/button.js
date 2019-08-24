import styled from 'styled-components'

export const Button = styled.button`
  border: none;
  font-size: 12px;
  color: #ffffff;
  background-color: #00bac7;
  width: 100%;
  max-width: 105px;
  text-align: center;
  padding: 8px 0px;
  cursor: pointer;
  transition: all 0.2s;
  outline: none !important;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.6;
  }
`
