import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import HomeImg from "../img/home.png";
import { styled } from "@mui/material/styles";
import Button from "../components/Button";

const StyledHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: "600",
  fontSize: "4rem",
  lineHeight: "1.4",
}));

function Home() {
  return (
    <section style={{ height: "calc(100vh - 4rem)" }}>
      <Grid
        container
        style={{ height: "100%" }}
        alignItems="center"
        columnSpacing={1}
      >
        <Grid item xs={12} sm={6} display="flex" justifyContent="center">
          <Box
            display={{ xs: "flex", sm: "block" }}
            flexDirection="column"
            alignItems="center"
          >
            <StyledHeading variant="h1" mb={4}>
              Tasty Food
            </StyledHeading>
            <Typography
              variant="h2"
              sx={{
                color: "white",
                fontWeight: "600",
                fontSize: "2.25rem",
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              Try the best food of <br />
              the week.
            </Typography>
            <Button sx={{ mt: 4 }}>View Menu</Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          display={{ xs: "none", sm: "flex" }}
          justifyContent="center"
        >
          <Box sx={{ maxWidth: "90%" }}>
            <img src={HomeImg} style={{ maxWidth: "100%", height: "auto" }} />
          </Box>
        </Grid>
      </Grid>
    </section>
  );
}

export default Home;
