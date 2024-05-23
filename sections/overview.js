import { Box, Typography } from "@mui/material";
import React from "react";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";
// import ManLight from "../Assets/Images/overview.svg?url";
import Man from "../Assets/Images/Man.svg?url";
import CircleText from "../Assets/Images/Light/circularText.svg?url";
import Name from "../Assets/Images/name.svg?url";
import NameDark from "../Assets/Images/nameDark.svg?url";
// import starGif from "../Assets/Images/star.gif";`
import Image from "next/image";
import Butterfly from "../Assets/Images/Light/butterfly6.svg?url";
import ManLight from "../Assets/Images/Light/Man_light.svg?url";
import lifeofDeveloper from "../Assets/Images/Light/lifeofdeveloper.svg?url";
import lifeofDeveloperDark from "../Assets/Images/lifeofdeveloperDark.svg?url";
import CircleTextLight from "../Assets/Images/Light/circularText_light.svg?url";

const useStyles = makeStyles((theme) => ({
  introSection: {
    padding: "160px 40px 40px 40px",
    position: "relative",
    flex: 0.5,
    [theme.breakpoints.down("md")]: {
      padding: "80px 50px",
      "& $heroTitle": {
        // padding: "0px 114px 0px 0px",
        marginLeft: 0,
      },
      "& $introboxContainer": {
        // border: "1px solid blue",
        flexDirection: "column-reverse",
        paddingBottom: "0px",
      },
      "& $introductionBox": {
        maxWidth: "100%",
        // marginBottom: 20,
      },
      "& $imageContainer": {
        // width: "80%",
        // height: "80%",
        marginBottom: 140,
      },
    },
    [theme.breakpoints.down(800)]: {
      "& $introboxContainer": {
        flexDirection: "column-reverse",
      },
      "& $imageContainer": {
        // marginBottom: 120,
      },
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 20px",
      "& $heroTitle": {
        padding: "0px 114px 0px 0px",
        marginLeft: 0,
        marginTop: "50px",
      },
      "& $titleLine1": {
        marginTop: 15,
      },
      "& $imageContainer": {
        // margin: "auto",
        marginBottom: 120,
      },
      "& $introboxContainer": {
        paddingTop: "40px",
        paddingBottom: "60px",
      },
    },
  },
  titleLine1: {
    paddingBottom: 10,
  },
  heroTitle: {
    width: "fit-content",
    marginTop: "20px",
    marginLeft: "auto",
    marginRight: "140px",
    borderBottom: "2px solid var(--light)",
    padding: theme.spacing(0, 16, 0, 5),
    [theme.breakpoints.down(1000)]: {
      // marginLeft: "50px",
    },
  },
  introboxContainer: {
    // border: "1px solid red",
    padding: "80px 0px",
    alignItems: "center",
  },
  introductionBox: {
    maxWidth: "45vw",
    height: "100%",
    [theme.breakpoints.down("lg")]: {
      // maxWidth: "400px",
    },
  },
  name: {
    display: "flex",
    gap: "13px",
    marginBottom: 20,
  },
  slideupText: {
    height: "50px",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    "& span": {
      transition: "0.4s all ease",
    },
    "&:hover span": {
      transform: "translateY(-100%)",
    },
    [theme.breakpoints.down("sm")]: {
      height: 22,
      PointerEvent: "none",
      flexDirection: "row",
      gap: "10px",
      overflow: "visible",
      "&:hover span": {
        transform: "translateY(0%)",
      },
    },
  },
  Butterfly: {
    backgroundImage: `url(${Butterfly.src})`,
    width: "100vw",
    height: "15.5vw",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50% , -45%)",
    [theme.breakpoints.down("sm")]: {
      left: "0%",
      right: "50%",
      transform: "translate(-73% , 80%)",
      height: "50vw",
      width: "120vw",
    },
  },

  circleText: {
    height: "80%",
    width: "80%",
    position: "relative",
    animation: "$rotateText 10s linear infinite",
  },
  "@keyframes rotateText": {
    "0%": {
      transform: "rotate(360deg)",
    },
    "100%": {
      transform: "rotate(0deg)",
    },
  },
  circleMan: {
    position: "absolute",
    zIndex: "2",
    left: "50%",
    top: "50%",
    // marginLeft: "auto",
    // marginRight: "auto",
    width: "60%",
    height: "60%",
    transform: "translate(-50%,-50%)",
    webkitTransform: "translate(-50%,-50%)",
  },
  imageContainer: {
    // width: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "30vw",
    maxHeight: "600px",
    maxWidth: "600px",
    minWidth: "300px",
    minHeight: "300px",
    // border: "1px solid red",
  },
  nameContainer: {
    display: "flex",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      alignItems: "flex-start",
    },
  },
  hello: {
    marginTop: "-20px",
    marginRight: "20px",
    fontSize: "clamp(18px, 1.5vw, 28px)",
    [theme.breakpoints.down("md")]: {
      marginTop: "0px",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: "5px",
    },
  },
  myName: {
    width: "20vw",
    height: "auto",
    maxWidth: "350px",
    minWidth: "200px",
  },
  Designer: {
    position: "absolute",
    bottom: "-10vw",
    left: "-5vw",
    width: "18vw",
    maxWidth: "350px",
    minWidth: "140px",
    [theme.breakpoints.down(1600)]: {
      bottom: "-12vw",
      left: "-5vw",
    },
    [theme.breakpoints.down(1200)]: {
      bottom: "-13vw",
      left: "-6vw",
    },
    [theme.breakpoints.down(1000)]: {
      bottom: "-13vw",
      left: "-3vw",
    },
    [theme.breakpoints.down(900)]: {
      bottom: "-15vw",
      left: "0vw",
    },
    [theme.breakpoints.down(800)]: {
      width: "24vw",
      bottom: "-16vw",
      left: "-4vw",
    },
    [theme.breakpoints.down(600)]: {
      width: "24vw",
      bottom: "-20vw",
      left: "-4vw",
    },
    [theme.breakpoints.down(450)]: {
      width: "24vw",
      bottom: "-25vw",
      left: "0vw",
    },
    [theme.breakpoints.down(400)]: {
      width: "24vw",
      bottom: "-28vw",
      left: "-5vw",
    },
    [theme.breakpoints.down(350)]: {
      width: "24vw",
      bottom: "-34vw",
      left: "10vw",
    },
  },
}));

export default function Overview({ global, isLight }) {
  const classes = useStyles();

  return (
    <>
      <Box
        component="section"
        className={clsx(classes.introSection, global.starBg)}
      // data-scroll-section
      >
        <Box
          component="div"
          // data-scroll
          // data-scroll-speed="1"
          className={clsx(global.title, classes.heroTitle)}
        >
          <Typography
            component="small"
            className={global.titleNo}
            color="secondary"
          >
            02
          </Typography>
          <Typography
            variant="h2"
            color="secondary"
            className={classes.titleLine1}
          >
            OVERVIEW
          </Typography>
        </Box>
        <Box
          component="div"
          className={clsx(global.section, classes.introboxContainer)}
        >
          <Box
            component="div"
            className={classes.introductionBox}
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              // border: "1px solid red",
            }}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Typography
              variant="body1"
              className={classes.name}
              color="secondary"
            >
              <Box className={classes.nameContainer}>
                <Box className={classes.hello}>Hi, I&apos;m</Box>
                {isLight ? (
                  <Image
                    src={NameDark}
                    alt="Arun Patel"
                    className={classes.myName}
                  />
                ) : (
                  <Image
                    src={Name}
                    alt="Arun Patel"
                    className={classes.myName}
                  />
                )}
              </Box>
            </Typography>
            <Typography variant="body1" color="secondary">
              Highly motivated and results-oriented software engineer with 2+ years of
              experience in web and mobile application development. Possesses strong
              expertise in React Native, React.js b Node.js and proven ability to manage
              all stages of the development lifecycle, from front-end design and
              development to back-end implementation and integration. Eager to leverage
              skills and contribute to a challenging and fast-paced environment where I
              can continuously learn and grow.
            </Typography>
          </Box>
          {isLight ? (
            <Box
              style={{ position: "relative" }}
              className={classes.imageContainer}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Image
                src={CircleTextLight}
                alt="city night"
                className={classes.circleText}
                id="cityImage"
              />

              <Image
                src={ManLight}
                alt="city night"
                className={classes.circleMan}
              // id="cityImage"
              />
              <Image
                src={lifeofDeveloper}
                alt="life of a designer"
                className={classes.Designer}
              />
            </Box>
          ) : (
            <Box
              style={{ position: "relative" }}
              className={classes.imageContainer}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Image
                src={CircleText}
                alt="city night"
                className={classes.circleText}
                id="cityImage"
              />

              <Image
                src={Man}
                alt="city night"
                className={classes.circleMan}
              // id="cityImage"
              />
              <Image
                src={lifeofDeveloperDark}
                alt="life of a designer"
                className={classes.Designer}
              />
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}
