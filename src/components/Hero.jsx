import { Box, Button, Grid, styled, Typography } from "@mui/material";
import React from "react";
import image from "../media/image.png"; // Your profile picture

const Hero = () => {
  // Styled Components
  const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#1976D2",
    color: "white",
    padding: "14px 30px",
    borderRadius: "30px",
    fontSize: "18px",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "1px",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#1565b2",
    },
    margin: theme.spacing(1),
  }));

  const CustomTitle = styled(Typography)(({ theme }) => ({
    color: "#fff", // Updated to white for better contrast
    fontSize: { xs: "40px", sm: "56px", md: "70px" }, // Larger text sizes
    fontWeight: 900,
    lineHeight: 1.2,
    marginBottom: theme.spacing(2),
  }));

  const CustomSubtitle = styled(Typography)(({ theme }) => ({
    color: "#ddd", // Light grey for contrast with background
    fontSize: { xs: "20px", sm: "24px", md: "28px" }, // Larger subtitle font
    fontWeight: 600,
    lineHeight: 1.5,
    marginBottom: theme.spacing(4),
  }));

  const CustomImage = styled("img")({
    width: "100%",
    maxWidth: "550px", // Reduced size slightly for better balance
    height: "auto",
    aspectRatio: "4 / 3", // Maintain proportion
    borderRadius: "20px", // Rounded corners for better design
    objectFit: "cover",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  });

  const HeroContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 2),
    minHeight: "100vh", // Keeps full viewport height
    display: "flex",
    alignItems: "center",
    background: "linear-gradient(135deg, #0A192F, #1E293B)", // Subtle dark gradient
  }));

  const ContentWrapper = styled(Box)(({ theme }) => ({
    maxWidth: "1200px", // Maintains alignment with other sections
    margin: "0 auto",
    width: "100%",
  }));

  // Button Handlers
  const handleContactButtonClick = () => {
    window.location.href = "mailto:ofemjohn@gmail.com";
  };

  const handleCVButtonClick = () => {
    window.location.href =
      "https://docs.google.com/document/d/1WCzBquLXU0S54Hk6KvW9RxN2kquMsY1g/edit?usp=sharing&ouid=106434970206223535185&rtpof=true&sd=true";
  };

  return (
    <HeroContainer>
      <ContentWrapper>
        <Grid container spacing={4} alignItems="center">
          {/* Left Section - Text */}
          <Grid item xs={12} md={6}>
            <CustomTitle>
              I am a{" "}
              <span style={{ color: "#00C7FF" }}>
                Fullstack Software Engineer
              </span>{" "}
              with a background in{" "}
              <span style={{ color: "#00C7FF" }}>Petroleum Engineering</span>
            </CustomTitle>
            <CustomSubtitle>
              Leveraging my skills in software engineering and petroleum
              engineering to create innovative solutions. Currently pursuing a{" "}
              <span style={{ color: "#00C7FF" }}>
                Master's in Information Technology
              </span>{" "}
              at{" "}
              <span style={{ color: "#00C7FF" }}>
                Kennesaw State University, Georgia, USA
              </span>
              .
            </CustomSubtitle>
            <Box display="flex" gap={2}>
              <CustomButton onClick={handleContactButtonClick}>
                Contact Me
              </CustomButton>
              <CustomButton onClick={handleCVButtonClick}>View CV</CustomButton>
            </Box>
          </Grid>

          {/* Right Section - Image */}
          <Grid item xs={12} md={6}>
            <CustomImage src={image} alt="Profile Picture" />
          </Grid>
        </Grid>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default Hero;
