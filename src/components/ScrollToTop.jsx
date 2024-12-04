import React, { useState, useEffect } from "react";
import { IconButton, styled } from "@mui/material";
import KeyboardDoubleArrowUp from "@mui/icons-material/KeyboardDoubleArrowUp";

const ScrollButton = styled(IconButton)(({ theme }) => ({
  position: "fixed",
  bottom: "2rem",
  right: "2rem",
  backgroundColor: "#1976D2",
  color: "white",
  zIndex: 1000,
  "&:hover": {
    backgroundColor: "#1565b2",
  },
}));

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {visible && (
        <ScrollButton onClick={scrollToTop}>
          <KeyboardDoubleArrowUp />
        </ScrollButton>
      )}
    </>
  );
};

export default ScrollToTop;
