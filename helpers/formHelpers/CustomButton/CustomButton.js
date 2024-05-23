import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({ children, sx, ...rest }) => {
  return (
    <Button
      variant="outlined"
      className="bg-blue-500"
      TouchRippleProps={false}
      sx={{ padding: "5px 35px", ...sx }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
