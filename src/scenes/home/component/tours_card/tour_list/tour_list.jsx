import { Grid } from '@mui/material'
import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { removeTourCardAction } from '../../../../_silce/tours.slice'
import Tour_Card from '../tour_card/tour_card'

const Tour_List = ({ List }) => {
  const dispatch = useDispatch()

  return (
    <Fragment>
      <Grid
        container
        spacing={0}
        sx={{
          margin: '30px 0',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          alignItems: 'center',
        }}
      >
        {List.map(item => {
          return (
            <Grid
              item
              lg={5}
              sm={6}
              xs={10}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              <Tour_Card
                info={item}
                removeTour={id => dispatch(removeTourCardAction(id))}
              />
            </Grid>
          )
        })}
      </Grid>
    </Fragment>
  )
}

export default Tour_List
