import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import comingSoon from "../../Assets/Images/comingsoonLC-min.webp";
import globalStyles from "../../Components/globalStyles";
import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-web";

const useStyles = makeStyles((theme) => ({
  card: {
    // border: "1px solid white",
    width: "35vw",
    maxWidth: "672px",
    // height: "900px",
    marginTop: "80px",
    [theme.breakpoints.down("xl")]: {
      // width: "520px",
    },
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      // height: 'auto',
      marginTop: 0,
      "& h4": {
        // fontSize: 24,
      },
      "& $cardtitle": {
        // margin: theme.spacing(0, 0, 3, 0),
        margin: 0,
      },
      "& $imageContainer": {
        height: "fit-content",
        marginTop: "1em",
        width: "100%",
        flexGrow: 1,
        height: "100%",
        "& video": {
          objectFit: "cover",
          objectPosition: "top",
        },
      },
      "& $descriptionBox": {
        margin: theme.spacing(3, 0, 0, 0),
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      // height: 350,
      marginTop: 0,
      "& $cardtitle": {
        margin: theme.spacing(0, 0, 0, 0),
      },
      "& $imageContainer": {
        height: "fit-content",
      },
      "& $descriptionBox": {
        margin: theme.spacing(3, 0),
      },
    },
  },
  cardtitle: {
    width: "fit-content",
    margin: theme.spacing(0, 0, 4, 6),
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    width: "100%",
    // height: "650px",
    // backgroundColor: "#AA1515",
    overflow: "hidden",
    transition: ".6s all ease-in-out",
    "&:hover": {
      transform: "scale(0.95)",
      "& video": {
        transform: "scale(1.2)",
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
    },
  },
  descriptionBox: {
    margin: theme.spacing(4, 0, 4, 0),
    paddingBottom: theme.spacing(3),
    borderBottom: "2px solid var(--light)",
    display: "flex",
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

export default function Chatbuddy() {
  const classes = useStyles();
  const global = globalStyles();

  const animationContainer = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/chatbuddy.json",
    });
  }, []);

  return (
    <>
      <Link
        href="/chatbuddy"
        style={{ textDecoration: "none" }}
        aria-label="lesconnect"
      >
        <Box component="div" className={classes.card}>
          <Typography
            variant="h4"
            color="secondary"
            className={classes.cardtitle}
          >
            <span className={classes.slideupText}>
              <span> ChatBuddy</span>
              {/* <apan> Lets Connect</apan> */}
            </span>
          </Typography>
          <Box
            component="div"
            className={classes.imageContainer}
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-mirror="false"
          >
            {/* <video autoPlay loop muted>
              <source src="/LetsConnect.mp4" />
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
              style={{ flexGrow: 1 }}
            >
              Chatbuddy - Chatting App
            </Typography>
            {/* <Typography variant="body1" color="secondary">
              2021
            </Typography> */}
          </Box>
        </Box>
      </Link>
    </>
  );
}
