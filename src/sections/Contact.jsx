import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "../components/Button";
import { styled } from "@mui/material/styles";
import { Element } from "react-scroll";

const StyledHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

function Contact() {
  return (
    <Element name="contact" style={{ marginTop: "200px" }}>
      <Grid
        container
        display="flex"
        alignItems="center"
        columnSpacing={4}
        justifyContent="space-around"
        direction={{ xs: "column", sm: "row" }}
        rowSpacing={{ xs: 5, sm: 0 }}
      >
        <Grid item xs={8}>
          <StyledHeading sx={{ textAlign: { xs: "center", sm: "left" } }}>
            Let's talk
          </StyledHeading>
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontWeight: "600",
              fontSize: "2.25rem",
              my: 2,
              lineHeight: "1.4",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Contact us
          </Typography>
          <Typography
            sx={{
              color: "rgb(199, 209, 204)",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            If you want to reserve a table in our restaurant, contact us and we
            will attend you quickly, with our 24/7 chat service.
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Button>Contact us</Button>
        </Grid>
      </Grid>
    </Element>
  );
}

export default Contact;
