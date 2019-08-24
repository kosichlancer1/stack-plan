import React, { useState, useEffect, useMemo, useCallback } from 'react'
import styled from 'styled-components'

import { CustomInput } from './custom-input'
import { PotentialCapacity } from './space-potential-capacity'
import { Button } from './button'

const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  grid-gap: 10px;

  @media (max-width: 1120px) {
    grid-template-columns: 1fr;
  }
`

export const SpaceForm = ({ space, updateSpace }) => {
  const { name, total_area_size } = space
  const [form, setValues] = useState({
    name: '',
    total_area_size: 0
  })

  useEffect(() => {
    if (!name) {
      setValues({ total_area_size, name: '' })
    } else {
      setValues({ name, total_area_size })
    }
  }, [name, space, total_area_size])

  const isValid = useMemo(() => {
    return Boolean(form.name && form.name.length && form.total_area_size !== 0)
  }, [form.name, form.total_area_size])

  const updateField = useCallback(
    e => setValues({ ...form, [e.target.name]: e.target.value }),
    [form]
  )

  const handleSubmit = e => {
    e.preventDefault()

    updateSpace({
      name: form.name,
      total_area_size: parseInt(form.total_area_size)
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormWrapper>
        <CustomInput
          id="suite"
          label="Suite"
          type="text"
          value={form.name}
          name="name"
          onChange={updateField}
        />
        <CustomInput
          id="total_sf"
          label="Total sf"
          type="number"
          value={form.total_area_size}
          name="total_area_size"
          onChange={updateField}
        />
      </FormWrapper>

      <PotentialCapacity total={form.total_area_size} />
      <Button disabled={!isValid}>Save</Button>
    </form>
  )
}
