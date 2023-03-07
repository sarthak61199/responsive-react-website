import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

function Header() {
  const [toggle, setToggle] = useState(false);
  const isDesktop = useMediaQuery("(min-width:600px)");
  return (
    <AppBar
      position="sticky"
      sx={{
        boxShadow: "none",
        bgcolor: "#1d2521",
        height: "4rem",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 0,
          m: 0,
        }}
      >
        <Typography>Tasty</Typography>
        {isDesktop ? (
          <DesktopNavbar />
        ) : (
          <MenuIcon
            onClick={() => setToggle(!toggle)}
            sx={{ cursor: "pointer" }}
          />
        )}
      </Toolbar>
      {!isDesktop && toggle && <MobileNavbar setToggle={setToggle} />}
    </AppBar>
  );
}

export default Header;
