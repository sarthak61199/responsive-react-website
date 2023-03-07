import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MenuCard from "../components/MenuCard";
import PlateOne from "../img/plate1.png";
import PlateTwo from "../img/plate2.png";
import PlateThree from "../img/plate3.png";
import MobileApp from "../img/movil-app.png";
import AppOne from "../img/app1.png";
import AppTwo from "../img/app2.png";
import { styled } from "@mui/material/styles";
import { Element } from "react-scroll";

const StyledHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

function Special() {
  return (
    <Element style={{ marginTop: "10rem" }} name="special">
      <StyledHeading textAlign="center">Special</StyledHeading>
      <Typography
        vairant="h2"
        textAlign="center"
        sx={{
          color: "white",
          fontWeight: "600",
          fontSize: "2.25rem",
          mt: 2,
          mb: 8,
          lineHeight: "1.4",
        }}
      >
        Menu of the week
      </Typography>
      <Grid
        container
        display="flex"
        columnSpacing={3}
        rowSpacing={{ xs: 10, sm: 20 }}
      >
        <Grid
          item
          xs={12}
          sm={4}
          display="flex"
          sx={{ justifyContent: { xs: "center" } }}
        >
          <MenuCard
            img={PlateOne}
            title="Barbecue salad"
            desc="Delicious Dish"
            price="22.00"
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          display="flex"
          sx={{ justifyContent: { xs: "center" } }}
        >
          <MenuCard
            img={PlateTwo}
            title="Salad with fish"
            desc="Delicious Dish"
            price="12.00"
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          display="flex"
          sx={{ justifyContent: { xs: "center" } }}
        >
          <MenuCard
            img={PlateThree}
            title="Spinach salad"
            desc="Delicious Dish"
            price="9.50"
          />
        </Grid>
        <Grid item xs={12} sm={6} display="flex" justifyContent="center">
          <Box
            sx={{
              maxWidth: "60%",
            }}
          >
            <img src={MobileApp} style={{ maxWidth: "100%", height: "auto" }} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} alignSelf="center">
          <StyledHeading sx={{ textAlign: { xs: "center", sm: "left" } }}>
            App
          </StyledHeading>
          <Typography
            vairant="h2"
            sx={{
              color: "white",
              fontWeight: "600",
              fontSize: "2.25rem",
              my: 2,
              lineHeight: "1.4",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            App is available
          </Typography>
          <Typography
            sx={{
              color: "rgb(199, 209, 204)",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Find out application and download it, you can make reservations,
            food orders, see you deliveries on the way and much more.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "16px",
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
            mt={4}
          >
            <Box sx={{ maxWidth: { xs: "30%", sm: "23%" } }}>
              <img src={AppOne} style={{ maxWidth: "100%", height: "auto" }} />
            </Box>
            <Box sx={{ maxWidth: { xs: "30%", sm: "23%" } }}>
              <img src={AppTwo} style={{ maxWidth: "100%", height: "auto" }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Element>
  );
}

export default Special;
