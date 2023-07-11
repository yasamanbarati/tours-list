import React from "react";
import { Button } from "@mui/material";

const Basic_Button = ({
  variant,
  color,
  component,
  BouttonEvent,
  text,
  style,
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      component={component}
      onClick={BouttonEvent}
      sx={{ ...style }}
    >
      {text}
    </Button>
  );
};

export default Basic_Button;
