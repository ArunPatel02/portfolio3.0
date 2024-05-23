import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import comingSoon from "../../Assets/Images/comingsoonMG-min.webp";
import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-web";

const useStyles = makeStyles((theme) => ({
  card: {
    // border: "1px solid white",
    width: "25vw",
    maxWidth: "480px",
    marginTop: "110px",
    [theme.breakpoints.down("xl")]: {
      width: "380px",
    },
    [theme.breakpoints.down("lg")]: {
      maxWidth: "600px",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      marginTop: 0,
      "& $cardtitle1": {
        margin: 0,
      },
      "& $cardtitle2": {
        margin: theme.spacing(0, 0, 4, 2),
      },
      "& $descriptionBox": {
        margin: theme.spacing(3, 0, 0, 0),
      },
      "& $imageContainer": {
        height: "fit-content",
        width: "100%",
        flexGrow: 1,
        height: "100%",
        "& video": {
          objectFit: "cover",
          objectPosition: "top",
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: 0,
      "& $cardtitle1": {
        margin: 0,
      },
      "& $cardtitle2": {
        margin: theme.spacing(0, 0, 4, 2),
      },
      "& $descriptionBox": {
        margin: theme.spacing(3, 0, 0, 0),
      },
      "& $imageContainer": {
        height: "fit-content",
        width: "100%",
      },
    },
  },
  cardtitle1: {
    width: "fit-content",
    margin: theme.spacing(0, 0, 0, 6),
  },
  cardtitle2: {
    width: "fit-content",
    margin: theme.spacing(0, 0, 4, 8),
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1em",
    // borderRadius: "10px",
    width: "100%",
    // height: "380px",
    height: "fit-content",
    // backgroundColor: "#D2EEFF",
    overflow: "hidden",
    transition: ".6s all ease-in-out",
    "& div": {
      transition: ".6s all ease-in-out",
    },
    "&:hover": {
      transform: "scale(0.95)",
      "& video": {
        transform: "scale(1.2)",
      },
      "& div": {
        transform: "scale(1.2)",
      },
      "& img": {
        transform: "translate(-20%, 20%) scale(1.2)",
      },
    },
    // border: '1px solid yellow',
    "& img": {
      //   maxWidth: "80%",
      width: "100%",
      height: "100%",
    },
    "& video": {
      //   maxWidth: "80%",
      width: "100%",
      height: "100%",
      transition: ".6s all ease-in-out",
    },
  },
  descriptionBox: {
    margin: theme.spacing(4, 0),
    paddingBottom: theme.spacing(3),
    borderBottom: "2px solid var(--light)",
    // fontSize: "clamp(22px, 1.5vw, 24px)",
    display: "flex",
  },
  slideupText2: {
    marginTop: "-0.4em",
    // marginTop : ".1em"
  },
  comingSoonImg: {
    position: "absolute",
    left: "0px",
    bottom: "0px",
    maxWidth: "350px !important",
    width: "13vw !important",
    height: "auto !important",
    transform: "translate(-30%, 30%)",
    transition: ".6s all ease-in-out",
    [theme.breakpoints.down("lg")]: {
      width: "19vw !important",
    },
    [theme.breakpoints.down("md")]: {
      width: "28vw !important",
    },
    [theme.breakpoints.down("sm")]: {
      width: "40vw !important",
    },
  },
}));

export default function CopyInsert({ global }) {
  const classes = useStyles();
  const animationContainer = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/copyInsertRecentWork.json",
    });
  }, []);

  return (
    <>
      <Link
        href="copyinsert"
        style={{ textDecoration: "none" }}
        aria-label="copyinsert"
      >
        <Box component="div" className={classes.card}>
          <Typography
            variant="h4"
            color="secondary"
            className={classes.cardtitle1}
          >
            CopyInsert
          </Typography>

          <Box
            component="div"
            className={classes.imageContainer}
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-mirror="false"
          >
            <div ref={animationContainer}></div>
            {/* <Image src={coursify} alt="emergenie image" /> */}
            {/* <video autoPlay playsinline loop muted>
              <source src="/MyGenie.mp4" />
            </video> */}
            <Image
              src={comingSoon}
              alt="mobile image"
              className={classes.comingSoonImg}
            />
          </Box>
          <Box component="div">
            <Typography
              variant="body1"
              color="secondary"
              style={{ flexGrow: 1 }}
              className={classes.descriptionBox}
            >
              {/* <b> */}
              CopyInsert - iOS/Android App
              {/* </b> */}
            </Typography>
          </Box>
        </Box>
      </Link>
    </>
  );
}
