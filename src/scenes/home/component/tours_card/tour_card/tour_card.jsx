/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react'
import { Card, CardActions, CardContent, styled } from '@mui/material'
import Card_Image from '../../../../component/card/card_image/card_image'
import Card_Text from '../../../../component/card/card_text/card_text'
import Basic_Button from '../../../../component/button/basic_button'

const CardTitle = styled(CardContent)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})
const priceStyle = {
  background: '#ebf7ff',
  padding: '0.25rem 0.5rem',
  borderRadius: ' 0.25rem',
}
const Tour_Card = ({ info, removeTour }) => {
  const [readMore, setReadMore] = useState(false)

  const add = () => {
    setReadMore(!readMore)
  }

  return (
    <Card sx={{ Width: 345 }}>
      <Card_Image src={info.image} alt="image" height="300px" />
      <CardTitle>
        <Card_Text
          text={info.name}
          variant="h3"
          Size="1rem"
          weight="800"
          textAlign="left"
          paddingLeft="0"
        />
        <Card_Text
          text={'$' + info.price}
          variant="span"
          Size="0.9rem"
          weight="600"
          textAlign="left"
          color="#49a6e9"
          paddingLeft="0"
          textStyle={priceStyle}
        />
      </CardTitle>
      <CardContent>
        <Card_Text
          text={readMore ? info.info : `${info.info.substring(0, 200)}...`}
          variant="body1"
          Size="0.86rem"
          weight="400"
          textAlign="left"
          color="text.secondary"
          paddingLeft="0"
          isMore={true}
          readMore={readMore}
          readMoreEvent={add}
        />
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
        <Basic_Button
          text="Not Interested"
          variant="outlined"
          color="error"
          component="button"
          BouttonEvent={removeTour.bind(null, info.id)}
          style={{ marginBottom: '15px' }}
        />
      </CardActions>
    </Card>
  )
}

export default Tour_Card
