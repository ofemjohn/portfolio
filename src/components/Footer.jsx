// Import necessary components and icons
import { Box, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-scroll";
import YouTubeIcon from '@mui/icons-material/YouTube';
import BookIcon from '@mui/icons-material/Book';

const Footer = () => {
  const githubUrl = "https://github.com/ofemjohn/";
  const emailUrl = "mailto:ofemjohn@gmail.com"; // Replace with your email
  const linkedInUrl = "https://www.linkedin.com/in/ofem-john-649811134?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"; // Replace with your LinkedIn profile
  const youtube = "https://www.youtube.com/channel/UCy-qClwAya3emPqnyMdjLmA"
  const blog = "https://medium.com/me/stories/public"

  return (
    <Box
      sx={{
        maxWidth: "1100px",
        borderTop: "1px solid #7B89A8",
        mx: "auto",
        padding: 3,
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {/* ... Other content ... */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: "#7B89A8", fontWeight: "bold", mb: 2 }}
        >
          PAGES
        </Typography>

        <Link
          to="home"
          className="link"
          smooth
          style={{ color: "white", margin: "0.5rem 0", cursor: "pointer" }}
        >
          Home
        </Link>
        <Link
          to="experience"
          className="link"
          smooth
          style={{ color: "white", margin: "0.5rem 0", cursor: "pointer" }}
        >
          Experience
        </Link>
        <Link
          to="about"
          className="link"
          smooth
          style={{ color: "white", margin: "0.5rem 0", cursor: "pointer" }}
        >
          About
        </Link>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: "#7B89A8", fontWeight: "bold", mb: 2 }}
        >
          SOCIAL
        </Typography>

        {/* GitHub Icon with link */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            textDecoration: "none", // Remove underline
          }}
        >
          <GitHubIcon sx={{ mr: 2, color: "white" }} />
          <Typography variant="body2" sx={{ color: "white", my: 1 }}>
            GitHub
          </Typography>
        </a>

        {/* Email Icon with mailto link */}
        <a
          href={emailUrl}
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            textDecoration: "none", // Remove underline
          }}
        >
          <EmailIcon sx={{ mr: 2, color: "white" }} />
          <Typography variant="body2" sx={{ color: "white", my: 1 }}>
            Email
          </Typography>
        </a>

        {/* LinkedIn Icon with link */}
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            textDecoration: "none", // Remove underline
          }}
        >
          <LinkedInIcon sx={{ mr: 2, color: "white" }} />
          <Typography variant="body2" sx={{ color: "white", my: 1 }}>
            LinkedIn
          </Typography>
        </a>
        <a
          href={youtube}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            textDecoration: "none", // Remove underline
          }}
        >
          <YouTubeIcon sx={{ mr: 2, color: "white" }} />
          <Typography variant="body2" sx={{ color: "white", my: 1 }}>
            Youtube
          </Typography>
        </a>
        <a
          href={blog}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            textDecoration: "none", // Remove underline
          }}
        >
          <BookIcon sx={{ mr: 2, color: "white" }} />
          <Typography variant="body2" sx={{ color: "white", my: 1 }}>
            Blog
          </Typography>
        </a>
      </Box>
    </Box>
  );
};

export default Footer;