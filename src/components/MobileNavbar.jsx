import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import ClickAwayListener from "@mui/base/ClickAwayListener";

const StyledLinkMobile = styled(Link)(({ theme }) => ({
  color: "black",
  textDecoration: "none",
  fontFamily: theme.typography.fontFamily,
  cursor: "pointer",
  "&:hover": {
    color: "rgb(6, 156, 100)",
  },
}));

function MobileNavbar({ setToggle }) {
  return (
    <ClickAwayListener onClickAway={() => setToggle(false)}>
      <Box
        bgcolor="#ffffff"
        position="absolute"
        top="3.5rem"
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="1rem"
        py={2}
        borderRadius={2}
      >
        <StyledLinkMobile>Home</StyledLinkMobile>
        <StyledLinkMobile>About</StyledLinkMobile>
        <StyledLinkMobile>Services</StyledLinkMobile>
        <StyledLinkMobile>Menu</StyledLinkMobile>
        <StyledLinkMobile>Contact</StyledLinkMobile>
      </Box>
    </ClickAwayListener>
  );
}

export default MobileNavbar;
