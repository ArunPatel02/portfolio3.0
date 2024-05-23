import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: "30px",
    marginTop: "50px",
  },
}));

const ProjectContentHeading = ({ title }) => {
  const styles = useStyles();
  return (
    <Typography color="secondary" variant="h5" className={styles.container}>
      {title}
    </Typography>
  );
};

export default ProjectContentHeading;
