import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    marginBottom: "30px",
    fontWeight: "lighter",
  },
}));

const ProjectContent = ({ content }) => {
  const styles = useStyles();

  return (
    <Typography color="secondary" variant="body2" className={styles.content}>
      {content}
    </Typography>
  );
};

export default ProjectContent;
