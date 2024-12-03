import React, { useRef } from "react";
import { Typography, Box, styled, IconButton } from "@mui/material";
import Slider from "react-slick";
import { icons } from "../constants/icons";
import Icon from "./Icon";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Stack = () => {
  const sliderRef = useRef(null); // Reference for the Slider

  const CustomArrow = styled(IconButton)(({ theme }) => ({
    backgroundColor: "#1976D2",
    color: "white",
    "&:hover": {
      backgroundColor: "#1565b2",
    },
    position: "absolute",
    zIndex: 2,
    top: "50%",
    transform: "translateY(-50%)",
    [theme.breakpoints.down("sm")]: {
      top: "40%", // Adjust for smaller screens
    },
  }));

  const settings = {
    dots: false, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Slide changes every 3 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        py: 6,
        px: 4,
        background: "none", // No background to blend with the parent
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          color: "#333",
          textAlign: "center",
          mb: 3,
          fontWeight: 700,
        }}
      >
        Empowering Your Digital Presence
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: "#555",
          textAlign: "center",
          mb: 4,
        }}
      >
        I bring a diverse set of skills to empower your digital projects. Whether
        it's crafting robust web applications, designing visually captivating
        user interfaces, or developing engaging user experiences, I'm here to
        help you achieve your digital goals.
      </Typography>

      {/* Slider Container */}
      <Box sx={{ position: "relative" }}>
        {/* Left Arrow */}
        <CustomArrow
          sx={{ left: -40 }} // Adjust left button position
          onClick={() => sliderRef.current.slickPrev()}
        >
          <ArrowBackIosIcon />
        </CustomArrow>

        {/* Slider */}
        <Slider {...settings} ref={sliderRef}>
          {icons.map((icon) => (
            <Box
              key={icon.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                p: 2,
              }}
            >
              <Icon name={icon.name} src={icon.src} />
            </Box>
          ))}
        </Slider>

        {/* Right Arrow */}
        <CustomArrow
          sx={{ right: -40 }} // Adjust right button position
          onClick={() => sliderRef.current.slickNext()}
        >
          <ArrowForwardIosIcon />
        </CustomArrow>
      </Box>
    </Box>
  );
};

export default Stack;
