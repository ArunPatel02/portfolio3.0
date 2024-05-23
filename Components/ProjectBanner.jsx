import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PlaceholderImage from "../Assets/Images/codeaxes_placeholder.webp";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  banner: {
    width: "100%",
    margin: "30px 0px",
    backgroundColor: "#AF81FB",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&>span": {
      display: "flex !important",
      justifyContent: "center",
      alignItems: "center",
    },
    "& img": {
      width: "80%",
      height: "600px",
      objectFit: "contain",
      objectPosition: "center",
    },
  },
}));

const ProjectBanner = ({ image }) => {
  const styles = useStyles();

  return (
    <Box className={styles.banner}>
      <LazyLoadImage
        src={image}
        PlaceholderSrc={PlaceholderImage}
        alt="website image"
        effect="blur"
      />
    </Box>
  );
};

export default ProjectBanner;
