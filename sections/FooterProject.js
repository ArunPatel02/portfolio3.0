import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import butterfly from "../Assets/Images/Light/butterfly4.svg?url";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "6em",
    padding: theme.spacing(2.5),
    [theme.breakpoints.down("lg")]: {
      marginTop: "2em",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "5em",
      "& $heroTitle": {
        margin: 0,
        marginLeft: 50,
      },
      "& $titleLine1": {
        marginTop: 15,
        marginBottom: 30,
      },
      "& $footerBox": {
        width: "100%",
        margin: 0,
        padding: theme.spacing(4, 0),
      },
    },
    [theme.breakpoints.down("sm")]: {
      padding: "60px 20px 40px 20px",
      marginTop: "0em",
      "& $heroTitle": {
        padding: "0px 114px 0px 0px",
        marginLeft: 0,
        marginTop: "0px",
      },
      "& $titleLine1": {
        marginTop: 15,
        marginBottom: 15,
      },
      "& $footer": {
        display: "block",
        marginTop: 0,
      },
      "& $footerBox": {
        // display: 'block',
        width: "100%",
        margin: 0,
        marginBottom: 0,
        padding: theme.spacing(4, 0),
      },
      "& $footerLinks": {
        padding: theme.spacing(0, 4, 0, 0),
      },
    },
  },
  heroTitle: {
    // margin: theme.spacing(8, 0, 0, 25),
    marginLeft: "10vw",
    marginRight: "auto",
    padding: theme.spacing(0, 25, 0, 5),
    [theme.breakpoints.down("lg")]: {
      marginLeft: "50px",
    },
  },
  titleLine1: {
    paddingBottom: 10,
  },
  footer: {
    display: "flex",
    marginTop: "-1em",
  },
  footerBox: {
    display: "flex",
    width: "fit-content",
    margin: theme.spacing(10, 0, 8, 9),
    padding: theme.spacing(8, 15, 8, 0),
    borderTop: "2px solid var(--light)",
    borderBottom: "2px solid var(--light)",
    flex: 1,
    maxWidth: "800px",
  },
  footerLinks: {
    padding: theme.spacing(0, 10),
  },
  socialTitle: {
    marginBottom: theme.spacing(2),
  },
  butterfly: {
    position: "absolute",
    zIndex: 2,
    height: "80px",
    width: "128x",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "right",
    backgroundImage: `url(${butterfly.src})`,
    [theme.breakpoints.down("lg")]: {
      right: "-20px",
      top: "-50px",
      transform: "rotateY(180deg)",
      width: "200px",
      height: "200px",
    },
    [theme.breakpoints.up("lg")]: {
      top: "-50%",
      left: "-15%",
      width: "120px",
      height: "180px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "120px",
      height: "120px",
      top: "-0%",
      right: "-10%",
    },
  },
}));

export default function Footer({ global, isLight }) {
  const classes = useStyles();

  return (
    <>
      <Box
        component="section"
        className={clsx(
          classes.root,
          isLight ? global.footer_bg_light : global.footer_bg
        )}
        // data-scroll-section
      >
        <Box
          component="div"
          className={clsx(global.title, classes.heroTitle)}
          // data-scroll
          // data-scroll-speed="2"
          style={{ position: "relative" }}
        >
          <Typography variant="body2" color="secondary">
            Curious? Feedback? Collaboration?
          </Typography>
          <Typography
            variant="h2"
            color="secondary"
            className={classes.titleLine1}
          >
            I&apos;d love to connect with you :)
          </Typography>
        </Box>
        <Box className={classes.footer}>
          <Box
            className={classes.footerBox}
            // data-scroll data-scroll-speed="3"
          >
            <Box className={classes.footerLinks}>
              <Typography
                variant="body2"
                color="secondary"
                className={classes.socialTitle}
              >
                Social
              </Typography>
              <Link
                href="https://github.com/ArunPatel02"
                aria-label="dribbble"
                rel="noopener noreferrer"
              >
                <Typography variant="h5" color="secondary">
                  GitHub
                </Typography>
              </Link>
              <Link
                href="https://www.linkedin.com/in/arunpatel02/"
                aria-label="linkedin"
                rel="noopener noreferrer"
              >
                <Typography variant="h5" color="secondary">
                  Linkedin
                </Typography>
              </Link>
            </Box>
            <Box className={classes.footerLinks}>
              <Typography
                variant="body2"
                color="secondary"
                className={classes.socialTitle}
              >
                Say Hi! 👋
              </Typography>
              <Link
                href="mailto:abhinavofficial120@gmail.com"
                aria-label="mail"
                rel="noopener noreferrer"
              >
                <Typography variant="h5" color="secondary">
                  arun@codes
                </Typography>
              </Link>
              <Link
                href="https://drive.google.com/file/d/1RIlEsKT-F_rHrk06E6Gsvq1tACNLvfQh/view?usp=sharing"
                aria-label="resume"
              >
                <Typography variant="h5" color="secondary">
                  Resume
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
