import React from "react";
import { Box, Typography } from "@mui/material";

const Icon = ({ name, src }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        p: 2,
      }}
    >
      <img src={src} alt={name} style={{ width: "80px", height: "80px" }} />
      <Typography
        variant="body1"
        sx={{ color: "#333", mt: 1, fontWeight: 500 }}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default Icon;
