import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import codeninja from "../../Assets/Images/codeninja.webp";
import comingSoon from "../../Assets/Images/comingsoonMG-min.webp";
import Link from "next/link";
import Image from "next/image";
import Lottie from "lottie-web";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "48vw",
    marginTop: "150px",
    [theme.breakpoints.down("xl")]: {
      // width: "680px",
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
        "& image": {
          objectFit: "cover",
          objectPosition: "left",
        },
      },
      "& $descriptionBox": {
        margin: theme.spacing(3, 0, 0, 0),
      },
      // "& p": {
      //   fontSize: 20,
      // },
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      width: "100%",
      // height: 'auto',
      // marginTop: 190,

      "& $cardtitle": {
        margin: theme.spacing(0, 0, 0, 0),
      },
      "& $imageContainer": {
        height: "fit-content",
      },
    },
  },
  cardtitle: {
    width: "fit-content",
    margin: theme.spacing(0, 8, 4, 0),
    marginLeft: "auto",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    // height: "600px",
    transition: ".6s all ease-in-out",
    "&:hover": {
      transform: "scale(0.95)",
      "& img": {
        transform: "scale(1.2)",
      },
    },
    overflow: "hidden",
    "& img": {
      maxWidth: "100%",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: ".6s all ease-in-out",
    },
  },
  descriptionBox: {
    margin: theme.spacing(4, 0, 0, 0),
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
    [theme.breakpoints.down("md")]: {
      width: "23vw !important",
    },
    [theme.breakpoints.down("sm")]: {
      width: "35vw !important",
    },
  },
}));

export default function Gyanmarg({ global }) {
  const classes = useStyles();
  const animationContainer = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/gyanmarg.json",
    });
  }, []);

  return (
    <>
      <Link
        href="https://gyanmarg-ed.vercel.app"
        style={{ textDecoration: "none" }}
        aria-label="gyanmarg"
        target="_blank"

      >
        <Box component="div" className={classes.card}>
          <Typography
            variant="h4"
            color="secondary"
            className={classes.cardtitle}
          >
            Gyanmarg
            {/* <span className={global.slideupText}>
              <span> CodeNinja</span>
              <span> CodeNinja</span>
            </span> */}
          </Typography>

          <Box
            component="div"
            className={classes.imageContainer}
            data-aos="zoom-in"
            data-aos-delay="150"
            data-aos-duration="1000"
            data-aos-mirror="false"
          >
            {/* <Image src={codeninja} alt="mobile image" /> */}
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
              Gyanmarg - eLearnign platform
            </Typography>
            {/* <Typography variant="body1" color="secondary">
              2022
            </Typography> */}
          </Box>
        </Box>
      </Link>
    </>
  );
}
