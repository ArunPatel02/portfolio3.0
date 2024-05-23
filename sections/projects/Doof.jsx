import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import NFT from "../../Assets/Images/doof.png";
import comingSoon from "../../Assets/Images/comingsoonNFT-min.webp";
import Image from "next/image";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "35vw",
    maxWidth: "670px",
    marginTop: "90px",
    height: "100%",
    [theme.breakpoints.down("xl")]: {
      width: "500px",
    },
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      maxWidth: "580px",
      // height: "100%",
      display: "flex",
      flexDirection: "column",
      marginTop: 0,
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
          objectPosition: "top",
        },
      },
      "& $descriptionBox": {
        margin: theme.spacing(3, 0, 0, 0),
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: 0,
      "& $cardtitle": {
        margin: theme.spacing(0, 0, 0, 0),
        height: "initial",
      },
      "& $imageContainer": {
        height: 380,
      },
    },
  },
  cardtitle: {
    width: "fit-content",
    margin: theme.spacing(0, 8, 4, 0),
    marginLeft: "auto",
    height: "initial",
  },
  imageContainer: {
    width: "100%",
    // height: "550px",
    overflow: "hidden",
    // border: '1px solid yellow',
    transition: ".6s all ease-in-out",
    "&:hover": {
      transform: "scale(0.9)",
      "& img:nth-child(1)": {
        transform: "scale(1.2)",
      },
      "& img:nth-child(2)": {
        transform: "translate(20%, 20%) scaleX(-1.2) scaleY(1.2) !important",
      },
    },
    "& img": {
      maxWidth: "100%",
      width: "100%",
      height: "100%",
      transition: ".6s all ease-in-out",
    },
  },
  descriptionBox: {
    margin: theme.spacing(4, 0),
    paddingBottom: theme.spacing(3),
    borderBottom: "2px solid var(--light)",
    display: "flex",
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
    },
  },
  comingSoonImg: {
    position: "absolute",
    right: "0px",
    bottom: "0px",
    maxWidth: "350px !important",
    width: "13vw !important",
    height: "auto !important",
    transform: "translate(30%, 30%) scaleX(-1) !important",
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

export default function Doof({ global }) {
  const classes = useStyles();
  // const global = globalStyles();

  return (
    <>
      <Link href="https://doof.co.in" target="_blank" style={{ textDecoration: "none" }} aria-label="nft">
        <Box component="div" className={classes.card}>
          <Typography
            variant="h4"
            color="secondary"
            className={classes.cardtitle}
          >
            Doof
          </Typography>
          <Box
            component="div"
            className={classes.imageContainer}
            data-aos="zoom-in"
            data-aos-delay="150"
            data-aos-duration="1000"
            data-aos-mirror="false"
          >
            <Image src={NFT} alt="photostudio image" />
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
              Doof - Full-Stack Testing Platform (Web & App)
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
