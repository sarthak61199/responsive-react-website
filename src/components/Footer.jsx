import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: "rgb(199, 209, 204)",
  textDecoration: "none",
  fontFamily: theme.typography.fontFamily,
  cursor: "pointer",
}));

const StyledTypo = styled(Typography)(({ theme }) => ({
  color: "rgb(199, 209, 204)",
  fontFamily: theme.typography.fontFamily,
}));

const StyledRestaurantHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: "600",
  fontSize: "1.25rem",
}));

const StyledFooterHeading = styled(Typography)(({ theme }) => ({
  mb: 1,
  color: "white",
  fontSize: "1.25rem",
  fontWeight: "600",
}));

function Footer() {
  return (
    <footer style={{ marginTop: "10rem" }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems={{ xs: "center", sm: "flex-start" }}
        gap={{ xs: 3, sm: 0 }}
        justifyContent="space-between"
      >
        <StyledBox sx={{ alignItems: { xs: "center", sm: "flex-start" } }}>
          <StyledRestaurantHeading>Tasty Food</StyledRestaurantHeading>
          <Typography
            sx={{ color: "rgb(199, 209, 204)", fontSize: "0.875rem" }}
          >
            Restaurant
          </Typography>
          <Box mt={2} display="flex" gap={2}>
            <FacebookOutlinedIcon sx={{ color: "white" }} />
            <InstagramIcon sx={{ color: "white" }} />
            <TwitterIcon sx={{ color: "white" }} />
          </Box>
        </StyledBox>
        <StyledBox
          gap={1}
          sx={{ alignItems: { xs: "center", sm: "flex-start" } }}
        >
          <StyledFooterHeading>Services</StyledFooterHeading>
          <StyledLink>Delivery</StyledLink>
          <StyledLink>Pricing</StyledLink>
          <StyledLink>Fast food</StyledLink>
          <StyledLink>Reserve your spot</StyledLink>
        </StyledBox>
        <StyledBox
          gap={1}
          sx={{ alignItems: { xs: "center", sm: "flex-start" } }}
        >
          <StyledFooterHeading>Information</StyledFooterHeading>
          <StyledLink>Event</StyledLink>
          <StyledLink>Contact us</StyledLink>
          <StyledLink>Privacy policy</StyledLink>
          <StyledLink>Terms of service</StyledLink>
        </StyledBox>
        <StyledBox
          gap={1}
          sx={{ alignItems: { xs: "center", sm: "flex-start" } }}
        >
          <StyledFooterHeading>Address</StyledFooterHeading>
          <StyledTypo>Lima - Peru</StyledTypo>
          <StyledTypo>Jr Union #999</StyledTypo>
          <StyledTypo>999 - 888 - 777</StyledTypo>
          <StyledTypo>tastyfood@email.com</StyledTypo>
        </StyledBox>
      </Stack>
      <Typography
        textAlign="center"
        sx={{ color: "rgb(199, 209, 204)", mb: 4, mt: 8 }}
      >
        &copy; {`${new Date().getFullYear()} Bedimcode. All rights reserved.`}
      </Typography>
    </footer>
  );
}

export default Footer;
