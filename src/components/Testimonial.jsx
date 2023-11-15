// Testimonial.js

import React from "react";
import { Typography, Box } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Testimonial = ({ text, author}) => {
  return (
    <Box
      sx={{
        backgroundColor: "#F5F5F5",
        padding: "2rem",
        borderRadius: "10px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
        maxWidth: "315px",
        mx: "auto",
      }}
    >
      <Typography variant="body1" sx={{ color: "#333333", mb: "1rem" }}>
        {text}
      </Typography>
      <Typography variant="body2" sx={{ textAlign: "right", mb: "1rem" }}>
        <span style={{ color: "#008080", fontWeight: "bold" }}>{author.name}, </span>
        <span style={{ color: "#7B89A8" }}> - {author.title}</span>
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <FormatQuoteIcon
          sx={{
            color: "#008080",
            height: "3rem",
            width: "3rem",
          }}
        />
      </div>
    </Box>
  );
};

export default Testimonial;
