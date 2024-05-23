import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ReactComponent as Back } from "../Assets/Images/Back.svg";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "80vw",
    display: "flex",
    gap: "15px",
    margin: "20px auto",
    alignItems: "center",
  },
  svg: {
    "& path": {
      stroke: "var(--light)",
    },
  },
}));

const ProjectTitle = ({ title }) => {
  const styles = useStyles();
  const navigate = useNavigate();
  return (
    <Box className={styles.container}>
      <Back onClick={() => navigate(-1)} className={styles.svg} />
      <Typography color="secondary" variant="h5">
        {title}
      </Typography>
    </Box>
  );
};

export default ProjectTitle;
