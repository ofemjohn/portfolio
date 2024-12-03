import { Box, Typography } from "@mui/material";
import React from "react";
import { projects } from "../constants/project";
import Project from "./Project";
import Stack from "./Stack";

const Experience = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #f3f4f6, #e5e7eb)", // Subtle light gradient
        py: 8,
      }}
      id="experience"
    >
      <Box
        sx={{
          maxWidth: "1300px",
          mx: "auto",
          px: 4,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#333", // Text color updated to contrast with the new background
            textAlign: "center",
            mb: 2,
            fontWeight: 700, // Bold text for emphasis
          }}
        >
          Let's take a look at what I've{" "}
          <span style={{ color: "#1976D2" }}>built</span> so far
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {projects.map((project) => (
            <Project
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              img={project.image}
              source={project.source} // Add source prop
              liveVersion={project.liveVersion} // Add liveVersion prop
            />
          ))}
        </Box>

        <Stack />
      </Box>
    </Box>
  );
};

export default Experience;
