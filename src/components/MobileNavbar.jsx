import React from "react";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import { Link } from "react-scroll";

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
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-64}
          spy={true}
          style={{
            color: "black",
            textDecoration: "none",
            cursor: "pointer",
            fontFamily: "Poppins",
          }}
          activeStyle={{ color: "rgb(6, 156, 100)" }}
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-64}
          spy={true}
          activeClass="links"
          style={{
            color: "black",
            textDecoration: "none",
            cursor: "pointer",
            fontFamily: "Poppins",
          }}
          activeStyle={{ color: "rgb(6, 156, 100)" }}
        >
          About
        </Link>
        <Link
          to="special"
          smooth={true}
          duration={500}
          offset={-64}
          spy={true}
          style={{
            color: "black",
            textDecoration: "none",
            cursor: "pointer",
            fontFamily: "Poppins",
          }}
          activeStyle={{ color: "rgb(6, 156, 100)" }}
        >
          Menu
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          style={{
            color: "black",
            textDecoration: "none",
            cursor: "pointer",
            fontFamily: "Poppins",
          }}
          activeStyle={{ color: "rgb(6, 156, 100)" }}
        >
          Contact
        </Link>
      </Box>
    </ClickAwayListener>
  );
}

export default MobileNavbar;
