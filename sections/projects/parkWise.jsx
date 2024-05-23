import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import comingSoon from "../../Assets/Images/comingsoonPW-min.webp";
// import Pvideo from "../../Assets/Images/Parkwise.mp4";
import Image from "next/image";
import Lottie from "lottie-web";

const useStyles = makeStyles((theme) => ({
  card: {
    // border: '1px solid white',
    width: "60vw",
    maxWidth: "1200px",
    transform: "translate(0px, 40px)",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      marginTop: 0,
      transform: "translate(0px, 0px)",
      "& $imageContainer": {
        height: "fit-content",
      },
      "& $descriptionBox": {
        margin: theme.spacing(3, 0, 0, 0),
        position: "relative",
        transform: "translate(0,0)",
      },
    },
  },
  imageContainer: {
    display: "flex",
    // height: "480px",
    width: "100%",
    overflow: "hidden",
    transition: ".6s all ease-in-out",
    "&:hover": {
      transform: "scale(0.95)",
      "& video": {
        transform: "scale(1.1)",
      },
      "& img": {
        transform: "scale(1.2)",
      },
    },
    "& video": {
      //   maxWidth: "80%",
      width: "100%",
      height: "100%",
      transition: ".6s all ease-in-out",
      // "&:hover": {
      //   transform: "scale(1.2)",
      // },
      [theme.breakpoints.down("sm")]: {
        height: "100%",
      },
    },
  },
  descriptionBox: {
    position: "absolute",
    // margin: theme.spacing(4,0, 0, 12),
    paddingBottom: theme.spacing(3),
    borderBottom: "2px solid var(--light)",
    display: "flex",
    justifyContent: "space-between",
    gap: "130px",
    transform: "translate(60%, 80%)",
    [theme.breakpoints.down("sm")]: {
      gap: "80px",
    },
  },
  comingSoonImg: {
    position: "absolute",
    left: "0px",
    bottom: "0px",
    maxWidth: "350px !important",
    width: "15vw !important",
    height: "auto !important",
    transform: "translate(-30%, 30%)",
    transition: ".6s all ease-in-out",
    [theme.breakpoints.down("md")]: {
      width: "23vw !important",
    },
    [theme.breakpoints.down("sm")]: {
      width: "35vw !important",
    },
  },
}));

export default function Parkwise({ global }) {
  const classes = useStyles();
  const animationContainer = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/animation.json",
    });
  }, []);

  return (
    <>
      <Link
        href="/parkwise"
        style={{ textDecoration: "none" }}
        aria-label="parkwise"
      >
        <Box component="div" className={classes.card}>
          <Box
            component="div"
            className={classes.imageContainer}
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-mirror="false"
          >
            {/* <video autoPlay loop muted>
              <source src="/Parkwise.mp4" />
            </video> */}
            <div ref={animationContainer}></div>
            <Image
              src={comingSoon}
              alt="mobile image"
              className={classes.comingSoonImg}
            />
          </Box>
          <Box component="div" className={classes.descriptionBox}>
            <Typography
              variant="body1"
              color="secondary"
              style={{ flexGrow: 1, maxWidth: "600px" }}
            >
              Find Best Nearest Parking Spots In Your City
            </Typography>
            {/* <Typography variant="body1" color="secondary">
              2023
            </Typography> */}
          </Box>
        </Box>
      </Link>
    </>
  );
}
