import React, { Fragment } from 'react'
import { Card } from './card'

import { SpaceImage } from './space-image'
import { SpaceForm } from './space-form'

export const SpacePlan = ({ space, updateSpace }) => {
  return (
    <Card>
      {Boolean(space) && (
        <Fragment>
          <SpaceImage />
          <SpaceForm space={space} updateSpace={updateSpace} />
        </Fragment>
      )}
      {!Boolean(space) && (
        <Fragment>
          <p>Select space to view</p>
        </Fragment>
      )}
    </Card>
  )
}
