import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import johnteacher from "../media/johnteacher.jpg";
import image from "../media/image.png";

const Hero = () => {
  const CustomButton = styled(Button)(({ theme }) => ({
    border: "2px solid #1976D2",
    backgroundColor: "transparent",
    color: "#1976D2",
    padding: "10px 20px",
    borderRadius: "25px",
    fontSize: "16px",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "1px",
    "&:hover": {
      background: "#1976D2",
      color: "white",
    },
  }));

  const CustomTitle = styled(Typography)(({ theme }) => ({
    color: "#FFFFFF",
    fontSize: "48px",
    fontWeight: "bold",
    lineHeight: "1.2",
    marginBottom: "20px",
    [theme.breakpoints.down("md")]: {
      fontSize: "36px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
  }));

  const CustomSubtitle = styled(Typography)(({ theme }) => ({
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: "18px",
    lineHeight: "1.5",
    marginBottom: "30px",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  }));

  const CustomImageWrapper = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column", // Stack images vertically
    marginBottom: "30px",
  });

  const CustomImage = styled("img")({
    width: "150px",
    height: "150px",
    borderRadius: "50%", // Circular shape
    objectFit: "cover",
    marginBottom: "15px",
  });

  const AdditionalImage = styled(CustomImage)({
    width: "100px",
    height: "100px",
  });

  const CustomButtonWrapper = styled(Box)({
    display: "flex",
    justifyContent: "center",
    gap: "20px", // Adjust the spacing between buttons
  });

  // Function to handle the "Contact Me" button click
  const handleContactButtonClick = () => {
    // Use the `window.location.href` to open the default email client
    window.location.href = "mailto:ofemjohn@gmail.com";
  };

  // Function to handle the "View CV" button click
  const handleCVButtonClick = () => {
    // Use the `window.location.href` to open the CV link
    window.location.href = "https://docs.google.com/document/d/1WCzBquLXU0S54Hk6KvW9RxN2kquMsY1g/edit?usp=sharing&ouid=106434970206223535185&rtpof=true&sd=true"; // Replace with actual CV link
  };

  return (
    <Box
      sx={{
        padding: "50px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
      id="home"
    >
      <CustomTitle>
        I am a{" "}
        <span style={{ color: "#1976D2" }}>
          fullstack Software Engineer
        </span>{" "}
        with a background in{" "}
        <span style={{ color: "#1976D2" }}>
          Petroleum Engineering
        </span>{" "}
      </CustomTitle>

      <CustomSubtitle>
        Leveraging my skills in both software engineering and petroleum
        engineering to create innovative solutions.
      </CustomSubtitle>

      <CustomImageWrapper>
        <CustomImage src={johnteacher} alt="John Teacher" />
        <AdditionalImage src={image} alt="Additional Image" />
      </CustomImageWrapper>

      <CustomButtonWrapper>
        {/* Attach the onClick event to the handleContactButtonClick function */}
        <CustomButton onClick={handleContactButtonClick}>
          Contact Me
        </CustomButton>
        <CustomButton onClick={handleCVButtonClick}>
          View CV
        </CustomButton>
      </CustomButtonWrapper>
    </Box>
  );
};

export default Hero;
