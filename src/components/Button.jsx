import React from "react";
import { Button as MuiButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(MuiButton)(({ theme }) => ({
  textTransform: "none",
  borderRadius: "0.5rem",
  textDecoration: "none",
  fontFamily: theme.typography.fontFamily,
  cursor: "pointer",
  padding: "0.75rem 1rem",
  fontSize: "1rem",
  color: "#fff",
  backgroundColor: theme.palette.primary.light,
  ":hover": {
    boxShadow: "none",
    backgroundColor: theme.palette.secondary.main,
  },
}));

function Button(props) {
  return (
    <StyledButton
      variant="contained"
      disableRipple
      disableFocusRipple
      disableElevation
      {...props}
    >
      {props.children}
    </StyledButton>
  );
}

export default Button;
