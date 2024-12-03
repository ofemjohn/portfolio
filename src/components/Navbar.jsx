import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { Link } from "react-scroll";
import johnteacher from "../media/johnteacher.jpg";

const Navbar = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2rem", // Increased gap for better spacing
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
    },
  }));

  const CustomToolbar = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  }));

  const NavLink = styled(Link)(({ theme }) => ({
    fontSize: "18px", // Increased font size
    fontWeight: "600", // Bold font weight
    color: "#1976D2", // Custom blue color
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": {
      color: "#1565b2", // Darker blue on hover
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px", // Smaller font size on mobile
    },
  }));

  return (
    <Box sx={{ flexGrow: 1, px: 5, py: 2, maxWidth: "1200px", mx: "auto" }}>
      <AppBar
        position="static"
        style={{
          background: "transparent", // Transparent background
          boxShadow: "none", // Remove shadow for a natural look
        }}
      >
        <CustomToolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            {/* Styled Logo */}
            <Box
              component="img"
              sx={{
                maxHeight: "80px", // Increased logo size
                maxWidth: "80px", // Proportional width
                objectFit: "cover",
                borderRadius: "50%", // Keep circular shape
              }}
              src={johnteacher}
              alt="John Teacher"
            />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My Portfolio
            </Typography>
          </Box>

          <CustomBox>
            <NavLink to="home" smooth>
              Home
            </NavLink>
            <NavLink to="experience" smooth>
              Experience
            </NavLink>
            <NavLink to="about" smooth>
              About
            </NavLink>
          </CustomBox>
        </CustomToolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
