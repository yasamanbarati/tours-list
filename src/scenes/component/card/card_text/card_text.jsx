import { styled, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";

const ReadMore = styled(Typography)({
  cursor: "pointer",
  display: "contents",
  color: "#49a6e9",
  paddingLeft: "10px",
});

const Card_Text = ({
  text,
  variant,
  Size,
  weight,
  textAlign,
  color,
  paddingLeft,
  textStyle,
  isMore,
  readMore,
  readMoreEvent,
}) => {
  return (
    <Fragment>
      <Typography
        variant={variant}
        align={textAlign}
        sx={{
          fontSize: Size,
          fontWeight: weight,
          color: color,
          paddingLeft: paddingLeft,
          ...textStyle,
        }}
      >
        {text}
        {isMore ? (
          <ReadMore onClick={readMoreEvent}>
            {readMore ? "show less" : "read more"}
          </ReadMore>
        ) : (
          ""
        )}
      </Typography>
    </Fragment>
  );
};
export default Card_Text;
