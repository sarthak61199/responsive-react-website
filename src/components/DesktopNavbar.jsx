import React from "react";
import Stack from "@mui/material/Stack";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <Stack direction="row" gap={6}>
      <Link
        to="home"
        smooth={true}
        duration={500}
        offset={-64}
        spy={true}
        style={{
          color: "white",
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
          color: "white",
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
          color: "white",
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
          color: "white",
          textDecoration: "none",
          cursor: "pointer",
          fontFamily: "Poppins",
        }}
        activeStyle={{ color: "rgb(6, 156, 100)" }}
      >
        Contact
      </Link>
    </Stack>
  );
}

export default Navbar;
