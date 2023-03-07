import React from "react";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";

const StyledLinkDesktop = styled(Link)(({ theme }) => ({
  color: "white",
  textDecoration: "none",
  fontFamily: theme.typography.fontFamily,
  cursor: "pointer",
  "&:hover": {
    color: "rgb(6, 156, 100)",
  },
}));

function Navbar() {
  return (
    <Stack direction="row" gap={6}>
      <StyledLinkDesktop>Home</StyledLinkDesktop>
      <StyledLinkDesktop>About</StyledLinkDesktop>
      <StyledLinkDesktop>Services</StyledLinkDesktop>
      <StyledLinkDesktop>Menu</StyledLinkDesktop>
      <StyledLinkDesktop>Contact</StyledLinkDesktop>
    </Stack>
  );
}

export default Navbar;
