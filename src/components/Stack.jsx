import React from "react";
import { Typography, Box, styled, Card } from "@mui/material";
import { icons } from "../constants/icons";
import Icon from "./Icon";

const Stack = () => {
  const CustomCard = styled(Card)(({ theme }) => ({
    maxWidth: "1130px",
    margin: "auto",
    padding: "2rem",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "1rem",
  }));

  return (
    <CustomCard>
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h4"
          sx={{ color: "textPrimary", textAlign: "center", mb: 3 }}
        >
          Empowering Your Digital Presence
        </Typography>
        <Typography variant="h6" sx={{ color: "textSecondary", textAlign: "center" }}>
  I bring a diverse set of skills to empower your digital projects. Whether it's crafting robust web applications, designing visually captivating user interfaces, or developing engaging user experiences, I'm here to help you achieve your digital goals.
</Typography>

      </Box>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-around"
        alignItems="center"
        sx={{ mt: 3 }}
      >
        {icons.map((icon) => (
          <IconBox key={icon.id}>
            <Icon name={icon.name} src={icon.src} alt={icon.name} />
          </IconBox>
        ))}
      </Box>
    </CustomCard>
  );
};

export default Stack;
