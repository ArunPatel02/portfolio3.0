import React from "react";
// import globalStyles from "../Components/globalStyles";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import cityNight from "../Assets/Images/citynight.svg?url";
import Moon from "../Assets/Images/Moon.png";
import cityDay from "../Assets/Images/cityday.svg?url";
import Sun from "../Assets/Images/Light/Sun.png";
import socialBg from "../Assets/Images/Light/social_bg.svg?url";
import socialBgDark from "../Assets/Images/social_bg_dark.svg?url";
import Link from "next/link";
import { Parallax } from "react-parallax";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      "& h2": {
        fontSize: "clamp(24px, 4vw, 34px);",
      },
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      display: "block",
    },
  },
  boxLinear2: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: "0px",
    width: "100%",
    height: "12%",
    display: "none",
    background: "linear-gradient(0deg, #0C0E1C 10%, rgba(12, 14, 28, 0) 100%)",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  boxLinear2light: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: "0px",
    width: "100%",
    height: "12%",
    zIndex: 2,
    display: "none",
    background:
      "linear-gradient(0deg, #EBEDE3 50%,  rgba(235, 237, 227, 0) 100%)",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      height: "6%",
    },
  },
  imageContainer: {
    overflow: "hidden",
    width: "100%",
    height: "100vh",
    height: "fit-content",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      "& $cityImage": {
        width: "800px",
        marginLeft: "-20vw",
        paddingTop: "50px",
      },
    },
    [theme.breakpoints.down("lg")]: {
      // height: "100vh",
      "& $cityImage": {},
    },
  },
  cityImage: {
    objectFit: "contain",
    objectPosition: "center",
    width: "150%",
    height: "100%",
    position: "relative",
    paddingTop: "250px",
    transition: "all .2s linear",
  },
  // socialBg: {
  //   backgroundImage:
  //     theme.palette.type === "dark"
  //       ? `url(${socialBgDark.src})`
  //       : `url(${socialBg.src})`,
  //   backgroundRepeat: "repeat-x",
  //   height: "100%",
  //   backgroundSize: "100% 100%",
  // },
  contactText: {
    zIndex: 5,
    marginTop: "-2.2em",
    width: "100%",
    padding: "24px 0px",
    backgroundColor: "rgb(255,255,255, 5%)",
    backdropFilter: "blur(4px)",
    borderTop: "1px solid #555769",
    borderBottom: "1px solid #555769",
    color: theme.palette.type === "dark" ? "#555769" : "#576271",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    whiteSpace: "nowrap",
    overflow: "hidden",
    display: "inline-block",
    "& span": {
      display: "inline-block",
      animation: "$marquee 30s linear infinite",
    },
    "&:hover span": {
      animationPlayState: "paused",
    },
  },
  "@keyframes marquee": {
    "0%": {
      transform: "translate3d(0, 0, 0)",
    },
    "100%": {
      transform: "translate3d(-100vw, 0, 0)",
    },
  },
  onHover: {
    color: theme.palette.type === "dark" ? "#555769" : "#576271",
    textDecoration: "none",
    transition: "0.2s ease-in",
    "&:hover": {
      color: theme.palette.type === "dark" ? "#ffffff" : "#D4E19F",
      textShadow:
        theme.palette.type === "dark"
          ? "4px 4px grey !important"
          : "4px 4px black !important",
    },
  },

  parallaxImage: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

export default function Designs({ global, isLight, windowSize }) {
  const classes = useStyles();
  // const global = globalStyles();

  return (
    <Box component="section" className={classes.root}>
      <Box
        component="div"
        id="cityImageConatiner"
        className={classes.imageContainer}
      >
        <Box
          component="div"
          className={
            isLight
              ? classes.boxLinear1Light
              : clsx(classes.boxLinear1, global.starBg)
          }
          style={{ backgroundSize: "cover" }}
          id="linearGradient1"
        ></Box>

        <Parallax
          bgImage={isLight ? Sun.src : Moon.src}
          bgImageStyle={
            windowSize
              ? {
                width: "60vw",
                height: "auto",
                bottom: "-20%",
              }
              : {
                width: "70vw",
                height: "auto",
                bottom: "-30%",
              }
          }
          bgClassName="parallaxImage"
          strength={windowSize ? -450 : -400}
        >
          <Image
            src={isLight ? cityDay : cityNight}
            alt="city night"
            className={classes.cityImage}
            id="cityImage"
            width="auto"
            height="auto"
          />
        </Parallax>

        <Box
          component="div"
          className={
            isLight ? classes.boxLinear2light : clsx(classes.boxLinear2)
          }
          style={{ backgroundSize: "cover" }}
          id="linearGradient1"
        ></Box>

        <Box
          component="div"
          className={clsx(classes.contactText, classes.socialBg)}
        >
          <Box component="span">
            <Typography variant="h2">
              <Link
                href="https://www.linkedin.com/in/arunpatel02/"
                target="_blank"
                className={classes.onHover}
                aria-label="linkedin"
                rel="noopener noreferrer"
                style={{
                  fontStyle: "italic",
                }}
              >
                {" "}
                LINKEDIN
              </Link>{" "}
              -
              <Link
                href="https://github.com/ArunPatel02"
                target="_blank"
                className={classes.onHover}
                aria-label="github"
                rel="noopener noreferrer"
              >
                {" "}
                GITHUB
              </Link>{" "}
              -
              -
              <Link
                href="mailto:ar.arunpatel@gmail.com"
                target="_blank"
                className={classes.onHover}
                aria-label="mail"
                rel="noopener noreferrer"
              >
                {" "}
                CONNECT
              </Link>{" "}
              -
              <Link
                href="https://www.linkedin.com/in/arunpatel02/"
                target="_blank"
                className={classes.onHover}
                aria-label="linkedin"
                rel="noopener noreferrer"
                style={{
                  fontStyle: "italic",
                }}
              >
                {" "}
                LINKEDIN
              </Link>{" "}
              -
              <Link
                href="https://github.com/ArunPatel02"
                target="_blank"
                className={classes.onHover}
                aria-label="github"
                rel="noopener noreferrer"
              >
                {" "}
                GITHUB
              </Link>{" "}
              -
              <Link
                href="mailto:ar.arunpatel@gmail.com"
                target="_blank"
                className={classes.onHover}
                aria-label="mail"
                rel="noopener noreferrer"
              >
                {" "}
                CONNECT
              </Link>{" "}
              -
              <Link
                href="https://www.linkedin.com/in/arunpatel02/"
                target="_blank"
                className={classes.onHover}
                aria-label="linkedin"
                rel="noopener noreferrer"
                style={{
                  fontStyle: "italic",
                }}
              >
                {" "}
                LINKEDIN
              </Link>{" "}
              -
              <Link
                href="https://github.com/ArunPatel02"
                target="_blank"
                className={classes.onHover}
                aria-label="guthub"
                rel="noopener noreferrer"
              >
                {" "}
                GITHUB
              </Link>{" "}
              -
              <Link
                href="mailto:ar.arunpatel@gmail.com"
                target="_blank"
                className={classes.onHover}
                aria-label="mail"
                rel="noopener noreferrer"
              >
                {" "}
                CONNECT
              </Link>{" "}
              -
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
