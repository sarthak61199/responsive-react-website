import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function MenuCard({ img, title, desc, price }) {
  return (
    <Box
      bgcolor="rgb(39, 48, 44)"
      display="flex"
      flexDirection="column"
      borderRadius="0.5rem"
      p={{ xs: "1rem 2rem", sm: "1.5rem 2.7rem" }}
      position="relative"
    >
      <img
        src={img}
        style={{
          maxWidth: "100%",
          height: "auto",
          marginBottom: "1rem",
          alignSelf: "center",
        }}
      />
      <Typography
        sx={{
          color: "rgb(199, 209, 204)",
          fontWeight: "600",
          mt: 2,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          color: "rgb(199, 209, 204)",
        }}
      >
        {desc}
      </Typography>
      <Typography
        sx={{
          color: "rgb(241, 243, 242)",
          mt: 1,
          fontWeight: "600",
        }}
      >
        ${price}
      </Typography>
      <Box
        bgcolor="rgb(6, 156, 100)"
        position="absolute"
        bottom="0"
        right="0"
        p="0.6rem"
        sx={{
          borderBottomRightRadius: "0.5rem",
          borderTopLeftRadius: "0.5rem",
        }}
      >
        <ShoppingCartIcon sx={{ color: "white" }} />
      </Box>
    </Box>
  );
}

export default MenuCard;
