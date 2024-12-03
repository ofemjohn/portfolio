import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import Testimonial from "./Testimonial";

const About = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
    },
  }));

  const CustomTitleBox = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
    },
  }));

  const CustomButton = styled(Button)(({ theme }) => ({
    border: "3px solid white",
    borderRadius: "25px",
    color: "white",
    width: "15%",
    display: "block",
    "&:hover": {
      border: "3px solid #FF5733",
    },
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "75%",
    },
  }));

  const HandleEmail = () => {
    window.location.href = "mailto:ofemjohn@gmail.com";
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #FF5733, #FFC300, #FF5733)", // Vibrant gradient
        py: 10,
        px: 3,
      }}
      id="about"
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        {/* Title Section */}
        <CustomTitleBox>
          <Typography
            variant="h4"
            style={{
              color: "#ffffff", // White text for contrast
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            What people say about my work!
          </Typography>
          <div
            style={{
              height: "5px",
              backgroundColor: "#FF5733",
              width: "50%",
              border: 0,
              borderRadius: "25px",
            }}
          ></div>
        </CustomTitleBox>

        {/* Testimonials Section */}
        <CustomBox sx={{ my: 7 }}>
          <Testimonial
            text="Ofem John's work is nothing short of exceptional. As the Director of Dyslexia Foundations Nigeria, I have had the privilege of witnessing his commitment to excellence. His innovative approach to problem-solving and his dedication to creating meaningful impact are truly commendable."
            author={{
              name: "Pastor Ben Arikpo",
              title: "Director, Dyslexia Foundations, Nigeria",
            }}
          />
          <Testimonial
            text="Working with this talented individual has been an absolute pleasure. His creativity knows no bounds, and his work as a digital creator is truly commendable. I highly recommend him for his exceptional skills and unwavering dedication to excellence."
            author={{
              name: "Mr. Peter Ufana",
              title: "Digital Creator and Social Media Analyst, Nigeria",
            }}
          />
          <Testimonial
            text="I am thoroughly impressed with the technical prowess and problem-solving skills demonstrated by this remarkable software engineer. His ability to navigate complex challenges and deliver innovative solutions is truly commendable."
            author={{
              name: "Ike Mathebula",
              title: "IT Specialist and Software Engineer, South Africa",
            }}
          />
        </CustomBox>

        {/* Divider */}
        <div
          style={{
            height: "5px",
            backgroundColor: "#FFC300",
            width: "100%",
            mx: "auto",
            border: 0,
            borderRadius: "25px",
          }}
        ></div>

        {/* Call to Action */}
        <Typography
          variant="h4"
          sx={{
            color: "#ffffff",
            mt: 12,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Interested in Working Together?
        </Typography>
        <CustomButton
          variant="outlined"
          onClick={HandleEmail}
          sx={{
            mx: "auto",
            mt: 3,
            mb: 8,
          }}
        >
          Get in Touch
        </CustomButton>
      </Box>
    </Box>
  );
};

export default About;
