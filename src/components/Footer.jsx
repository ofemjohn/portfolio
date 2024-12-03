import { Box, Typography, styled } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import BookIcon from "@mui/icons-material/Book";
import { Link } from "react-scroll";

const Footer = () => {
  const githubUrl = "https://github.com/ofemjohn/";
  const emailUrl = "mailto:ofemjohn@gmail.com";
  const linkedInUrl =
    "https://www.linkedin.com/in/ofem-john-649811134?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
  const youtube = "https://www.youtube.com/channel/UCy-qClwAya3emPqnyMdjLmA";
  const blog = "https://medium.com/me/stories/public";

  const FooterContainer = styled(Box)(({ theme }) => ({
    background: "#0A192F", // Dark footer background
    color: "white",
    padding: theme.spacing(6, 2),
  }));

  const LinkContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(4),
    flexWrap: "wrap",
    marginTop: theme.spacing(2),
  }));

  const SocialLink = styled("a")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "white",
    gap: theme.spacing(1),
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#00C7FF",
    },
  }));

  const Divider = styled("div")(({ theme }) => ({
    height: "3px",
    backgroundColor: "#7B89A8",
    width: "100%",
    maxWidth: "300px",
    margin: theme.spacing(4, "auto"),
    borderRadius: "5px",
  }));

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FooterContainer>
      {/* Links Section */}
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          textAlign: "center",
        }}
      >
        {/* Pages Section */}
        <LinkContainer>
          <Box
            className="link"
            onClick={scrollToTop}
            style={{
              color: "white",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Home
          </Box>
          <Link
            to="experience"
            className="link"
            smooth
            style={{
              color: "white",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Experience
          </Link>
          <Link
            to="about"
            className="link"
            smooth
            style={{
              color: "white",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            About
          </Link>
        </LinkContainer>
      </Box>

      {/* Social Section */}
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          textAlign: "center",
          mt: 4,
        }}
      >
        <LinkContainer>
          <SocialLink href={githubUrl} target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
            GitHub
          </SocialLink>
          <SocialLink href={emailUrl}>
            <EmailIcon />
            Email
          </SocialLink>
          <SocialLink href={linkedInUrl} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
            LinkedIn
          </SocialLink>
          <SocialLink href={youtube} target="_blank" rel="noopener noreferrer">
            <YouTubeIcon />
            YouTube
          </SocialLink>
          <SocialLink href={blog} target="_blank" rel="noopener noreferrer">
            <BookIcon />
            Blog
          </SocialLink>
        </LinkContainer>
      </Box>

      {/* Divider */}
      <Divider />

      {/* Footer Bottom */}
      <Box
        sx={{
          textAlign: "center",
          mt: 4,
        }}
      >
        <Typography variant="body2" sx={{ color: "#7B89A8" }}>
          © 2024 Ofem John. All rights reserved.
        </Typography>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
