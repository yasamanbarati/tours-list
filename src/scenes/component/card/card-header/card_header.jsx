import React from "react";
import { Avatar, CardHeader } from "@mui/material";

const Card_Header = ({
  alt,
  ImageSrc,
  title,
  subTitle,
  width,
  height,
  style,
  display,
}) => {
  return (
    <CardHeader
      sx={{ ...style }}
      avatar={
        <Avatar
          alt={alt}
          src={ImageSrc}
          sx={{ width: width, height: height, display: display }}
        />
      }
      title={title}
      subheader={subTitle}
    />
  );
};
export default Card_Header;
