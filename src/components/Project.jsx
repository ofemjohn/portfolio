import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Chip from "@mui/material/Chip";
import { Box } from "@mui/system";

const Project = ({ title, description, tags, img, source, liveVersion }) => {
  const openSourceCode = () => {
    if (source) {
      console.log("Opening source code:", source);
      window.open(source, "_blank");
    } else {
      console.error("Source code URL not provided.");
    }
  };

  const openLiveVersion = () => {
    if (liveVersion) {
      console.log("Opening live version:", liveVersion);
      window.open(liveVersion, "_blank");
    } else {
      console.error("Live version URL not provided.");
    }
  };

  return (
    <Card sx={{ maxWidth: 375, margin: "1rem" }}>
      <CardActionArea>
        <CardMedia component="img" image={img} sx={{ height: 200 }} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            mx: "auto",
            mb: 3,
          }}
        >
          <Button
            size="small"
            style={{ backgroundColor: "rgba(0,199,255,255)" }}
            variant="contained"
            onClick={openSourceCode}
          >
            Source Code
          </Button>
          <Button
            size="small"
            style={{ backgroundColor: "rgba(0,199,255,255)" }}
            variant="contained"
            onClick={openLiveVersion}
          >
            Live Version
          </Button>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "1rem",
            mb: 2,
          }}
        >
          {tags.map((tag) => (
            <Chip label={tag} variant="outlined" key={tag} />
          ))}
        </Box>
      </CardActions>
    </Card>
  );
};

export default Project;
