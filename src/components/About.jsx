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
      border: "3px solid #00C7FF",
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
  }

  return (
    <Box sx={{ maxWidth: "1200px", my: 10, padding: 3, mx: "auto" }} id="about">
      <CustomTitleBox
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Typography
          variant="h4"
          style={{ color: "white", textAlign: "center" }}
        >
          What people say about my work!
        </Typography>
        <div
          style={{
            height: "5px",
            backgroundColor: "#008080",
            width: "50%",
            border: 0,
            borderRadius: "25px",
          }}
        ></div>
      </CustomTitleBox>

      <CustomBox sx={{ my: 7 }}>
        <Testimonial
          text="Ofem John's work is nothing short of exceptional. As the Director of Dyslexia Foundations Nigeria, I have had the privilege of witnessing his commitment to excellence. His innovative approach to problem-solving and his dedication to creating meaningful impact are truly commendable. Ofem's work reflects not only technical prowess but also a genuine passion for making a positive difference. I wholeheartedly recommend him for any endeavor that requires a blend of skill, creativity, and a heart for impactful results."
          author={{ name: "Pastor Ben Arikpo", title: "Director, Dyslexia Foundations, Nigeria" }}
        />
        <Testimonial
          text="Working with this talented individual has been an absolute pleasure. His creativity knows no bounds, and his work as a digital creator is truly commendable. As a social media analyst, he brings a unique perspective that adds tremendous value to any project. I highly recommend him for his exceptional skills and unwavering dedication to excellence."
          author={{ name: "Mr. Peter Ufana", title: "Digital Creator and Social Media Analyst, Nigeria" }}
        />
        <Testimonial
          text="I am thoroughly impressed with the technical prowess and problem-solving skills demonstrated by this remarkable software engineer. His ability to navigate complex challenges and deliver innovative solutions is truly commendable. It's evident that he is passionate about his work and dedicated to staying at the forefront of technology. I highly recommend him for any software-related project."
          author={{ name: "Ike Mathebula", title: "IT Specialist and Software Engineer, South Africa" }}
        />

      </CustomBox>

      <div
        style={{
          height: "5px",
          backgroundColor: "#008080",
          width: "100%",
          mx: "auto",
          border: 0,
          borderRadius: "25px",
        }}
      ></div>

      <Typography
        variant="h4"
        sx={{ color: "white", mt: 12, textAlign: "center" }}
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
  );
};

export default About;
