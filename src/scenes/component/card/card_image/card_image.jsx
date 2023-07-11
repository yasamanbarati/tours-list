import React from 'react'
import { CardMedia } from '@mui/material'

const Card_Image = ({ src, height, alt, Imagestyle, width }) => {
  return (
    <CardMedia
      component="img"
      height={height}
      width={width}
      image={src}
      alt={alt}
      sx={{ Imagestyle }}
    />
  )
}
export default Card_Image
