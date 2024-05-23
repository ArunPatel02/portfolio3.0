import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import butterfly from "../Assets/Images/Light/butterfly4.svg?url";
// import Resume from "../Assets/Images/Abhinav_Gupta_Resume.pdf";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "5em",
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
    margin: theme.spacing(8, 0, 0, 25),
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
    height: "9vh",
    width: "9vw",
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
      top: "-65%",
      left: "-30%",
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
  hover: {
    "&:hover": {
      textDecoration: "underline",
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
          {isLight ? <Box className={classes.butterfly}></Box> : null}
          <Typography
            component="small"
            color="secondary"
            className={global.titleNo}
          >
            04
          </Typography>
          <Typography
            variant="h2"
            color="secondary"
            className={classes.titleLine1}
          >
            GOT AN IDEA? <br /> LET&apos;S TALK!
          </Typography>
        </Box>
        <Box className={classes.footer}>
          <Box
            className={classes.footerBox}
            // data-scroll data-scroll-speed="3"
          >
            <Box className={classes.footerLinks}>
              <Typography
                variant="body1"
                color="secondary"
                className={classes.socialTitle}
              >
                Stay Connected
              </Typography>
              <Link
                href="https://www.linkedin.com/in/arunpatel02/"
                aria-label="linkedin"
                rel="noopener noreferrer"
              >
                <Typography
                  variant="h5"
                  color="secondary"
                  className={classes.hover}
                >
                  Linkedin
                </Typography>
              </Link>
              <Link
                href="https://github.com/ArunPatel02"
                aria-label="behance"
                rel="noopener noreferrer"
              >
                <Typography
                  variant="h5"
                  color="secondary"
                  className={classes.hover}
                >
                  GithHub
                </Typography>
              </Link>
              {/* <Link
                href="https://dribbble.com/Abhinav_19"
                aria-label="dribbble"
                rel="noopener noreferrer"
              >
                <Typography
                  variant="h5"
                  color="secondary"
                  className={classes.hover}
                >
                  Dribbble
                </Typography>
              </Link> */}
            </Box>
            <Box className={classes.footerLinks}>
              <Typography
                variant="body1"
                color="secondary"
                className={classes.socialTitle}
              >
                Say Hi! 👋
              </Typography>
              <Link
                href="mailto:ar.arunpatel@gmail.com"
                aria-label="mail"
              >
                <Typography
                  variant="h5"
                  color="secondary"
                  className={classes.hover}
                >
                  arun@codes
                </Typography>
              </Link>
              <Link
                href="https://drive.google.com/file/d/1vhN0d0esa32Qy57ZPI3NQQPAkDHi3vlc/view?usp=sharing"
                aria-label="resume"
                // target="_blank"
              >
                <Typography
                  variant="h5"
                  color="secondary"
                  className={classes.hover}
                >
                  Resume
                </Typography>
              </Link>
            </Box>
          </Box>
          <Box
            component="div"
            className={clsx(global.bigCirle, global.arrowLeftBottom)}
            // data-scroll
            // data-scroll-speed="1"
          >
            <Box className={global.whiteCircle}>
              <Typography variant="body2" className={global.circleText}>
                &#x1F308; Stand Out from The Crowd.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
