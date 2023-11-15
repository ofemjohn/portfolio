import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import { Link } from "react-scroll";

// Define the johnteacher variable
import johnteacher from "../media/johnteacher.jpg";

const Navbar = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
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

  return (
    <Box sx={{ flexGrow: 1, px: 5, py: 2, maxWidth: "1200px", mx: "auto" }}>
      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
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
            {/* Style the johnteacher logo */}
            <Box
              component="img"
              sx={{
                maxHeight: "60px",
                maxWidth: "500px",
                objectFit: "cover",
                borderRadius: "50%", // Add border-radius for rounded shape
              }}
              src={johnteacher}
              alt="John Teacher"
            />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My Portfolio
            </Typography>
          </Box>

          <CustomBox>
            <Link to="home" className="link" smooth>
              Home
            </Link>
            <Link to="experience" className="link" smooth>
              Experience
            </Link>
            <Link to="about" className="link" smooth>
              About
            </Link>
          </CustomBox>
        </CustomToolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
