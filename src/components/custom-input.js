import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  display: grid;
  grid-template-columns: 35% 55%;
`

export const Input = styled.input`
  border: none;
  padding: 0;
  color: #000000;
  padding: 7px 11px;
  text-align: right;
  font-size: 14px;
  outline: none !important;
`

const Label = styled.label`
  color: #888888;
  padding: 7px 11px;
  font-size: 14px;
`

export const CustomInput = ({ label, name, value, onChange, type, id }) => {
  return (
    <Root>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        value={value}
        type={type}
        name={name}
        onChange={onChange}
      />
    </Root>
  )
}
