import { makeStyles } from "@mui/styles";
// import globalStyles from "../Components/globalStyles";
import { Box, Typography } from "@mui/material";
import heroCircle from "../Assets/Images/Herocircle.svg?url";
import heroCircleLight from "../Assets/Images/Light/heroCircle.svg?url";
import pinkButterfly from "../Assets/Images/Light/butterfly3.svg?url";
import yellowButterfly from "../Assets/Images/Light/butterfly5.svg?url";
import Smile from "../Assets/Images/happy.svg";
import clsx from "clsx";
// import Click from "../Assets/Images/click.svg";

const useStyles = makeStyles((theme) => ({
  introSection: {
    // minHeight: "100vh",
    height: "100%",
    width: "100%",
    // border: "1px solid yellow",
    position: "relative",
    paddingTop: "140px",
    paddingBottom: "100px",
    // paddingLeft: "18vw",
    paddingLeft: "100px",
    paddingRight: theme.spacing(12.5),
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${heroCircle.src})`,
    // backgroundSize: "min(85vw , 1575px), min(85vw , 1575px)",
    backgroundSize: "clamp(400px, 70vw, 70vw)",
    backgroundPosition: "center center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    lineHeight: "1.2",
    [theme.breakpoints.down("lg")]: {
      backgroundSize: "clamp(400px, 80vw, 100vw)",
    },
    [theme.breakpoints.down("lg")]: {
      // marginTop: 50,
      paddingTop: "100px",
      paddingLeft: "50px",
      paddingRight: "50px",
      paddingBottom: "50px",
      "& $titleLine1": {
        marginTop: 15,
        // fontSize: "calc(6px + 5vw)",
      },
    },
    [theme.breakpoints.down("sm")]: {
      // marginTop: 50,
      paddingLeft: "20px",
      paddingRight: "20px",
      backgroundPosition: "center 70px",
      "& $titleLine1": {
        marginTop: 15,
        // fontSize: "calc(6px + 5vw)",
      },
      "& $titleNo": {
        position: "relative",
        marginLeft: 0,
        paddingLeft: 10,
        fontSize: 20,
        width: "fit-content",
      },
      "& h2": {
        lineHeight: "1.1",
        margin: "auto",
        fontSize: 28,
      },
      "& $yellowImage": {
        bottom: "2%",
      },
    },
  },
  pinkImage: {
    position: "absolute",
    top: "3%",
    height: "7vw",
    width: "7vw",
    // minWidth: "100px",
    // minHeight: "100px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    left: "29%",
    [theme.breakpoints.down(1920)]: {
      top: "4%",
      left: "30%",
    },
    [theme.breakpoints.down(1600)]: {
      top: "7%",
      left: "30%",
    },
    [theme.breakpoints.down(1200)]: {
      top: "8%",
      left: "30%",
    },
    [theme.breakpoints.down(900)]: {
      height: "9vw",
      width: "9vw",
      top: "10%",
      left: "29%",
    },
    [theme.breakpoints.down(600)]: {
      top: "16%",
      left: "28%",
    },
    [theme.breakpoints.down(400)]: {
      top: "20%",
      left: "24%",
    },
  },
  yellowImage: {
    position: "absolute",
    bottom: "-10%",
    /* z-index: 2; */
    height: "18vw",
    width: "15vw",
    // minWidth: "150px",
    // minHeight: "150px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    right: "0%",
    backgroundPositionX: "right",
  },
  titleLine1: {
    fontFamily: "Neue Helvetica Bold",
    fontSize: "clamp(28px, 4.8vw, 90px);",
    lineHeight: "130%",
    "& svg": {
      color: "var(--dark)",
      "& g path": {
        fill: "var(--light)",
      },
    },
    [theme.breakpoints.down(600)]: {
      fontSize: "clamp(16px, 6.4vw, 90px);",
      lineHeight: "1.5",
    },
    [theme.breakpoints.down(400)]: {
      fontSize: "clamp(16px, 6vw, 90px);",
      lineHeight: "1.5",
    },
  },
  titleNo: {
    // position: "absolute",
    paddingLeft: "30px",
    height: "fit-content",
    marginLeft: "-5vw",
    marginTop: "-2.5rem",
    borderBottom: "2px solid var(--light)",
    fontFamily: "Silk Serif Regular Italic",
    fontSize: "min(calc(5px + 2.5vw) , 50px)",
  },
  word: {
    position: "relative",
    // WebkitTextStroke: `1px #0C0E1C`,
    color: "rgba(21,21,21,0)",
    padding: "4px 0px 2px 0px",

    // color: "var(--dark)",
  },
  smile: {
    textAlign: "center",
    position: "absolute",
    top: "12.5vw",
    right: "15vw",
    [theme.breakpoints.down(1600)]: {
      top: "13vw",
    },
    [theme.breakpoints.down(1200)]: {
      top: "14.5vw",
    },
    [theme.breakpoints.down(900)]: {
      top: "15vw",
    },
    [theme.breakpoints.down(600)]: {
      top: "22vw",
      right: "20vw",
    },
  },
  smileDark: {
    top: "12.5vw",
    right: "12vw",
    [theme.breakpoints.down(1200)]: {
      top: "14.5vw",
    },
    [theme.breakpoints.down(600)]: {
      top: "22vw",
      right: "16vw",
    },
  },
}));

export default function Intro({ global, isLight }) {
  const classes = useStyles();

  return (
    <Box
      component="section"
      className={!isLight ? global.starBg : ""}
      // data-scroll-section
      style={{
        paddingTop: "min(12vh , 94px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        className={classes.introSection}
        // data-scroll
        // data-scroll-speed="4"
        style={
          isLight ? { backgroundImage: `url(${heroCircleLight.src})` } : {}
        }
      >
        {isLight ? (
          <>
            <Box
              className={classes.pinkImage}
              style={
                isLight ? { backgroundImage: `url(${pinkButterfly.src})` } : {}
              }
            ></Box>
            <Box
              className={classes.yellowImage}
              style={
                isLight
                  ? { backgroundImage: `url(${yellowButterfly.src})` }
                  : {}
              }
            ></Box>
          </>
        ) : null}
        <Typography
          variant="h2"
          color="secondary"
          className={global.title}
          data-aos="fade-up"
          data-aos-duration="700"
          style={{
            position: "relative",
            width: "fit-content",
            display: "flex",
            gap: "15px",
            lineHeight: "1.2",
          }}
          // data-scroll
          // data-scroll-speed="4"
        >
          {/* <Image src={heroCircle} className={classes.starImage} alt="Circle" /> */}
          <Typography
            component="small"
            className={classes.titleNo}
            color="secondary"
          >
            01
          </Typography>
          <div id="stick-title" className={classes.titleLine1}>
            A DEVELOPER FOCUSED ON <br />
            CREATING&nbsp;
            <span
              className={classes.word}
              style={{
                backgroundColor: isLight ? "#addbeb" : "",
                // backgroundColor: isLight ? "#addbeb" : "#F7C59F",
                WebkitTextStroke: `1px var(--light)`,
              }}
            >
              {isLight ? "\u00A0USER-CENTRIC\u00A0" : "USER-CENTRIC"}
            </span>{" "}
            <Smile
              id="stick-logo"
              className={
                isLight ? classes.smile : clsx(classes.smile, classes.smileDark)
              }
              data-aos="zoom-in"
              data-aos-duration="200"
              data-aos-delay="800"
              data-aos-easing="ease-in-back"
            />
            <br /> EXPERIENCE AND <br />
            <span
              className={classes.word}
              style={{
                backgroundColor: isLight ? "#fed7d0" : "",
                // backgroundColor: isLight ? "#fed7d0" : "#DFC2F2",
                WebkitTextStroke: `1px var(--light)`,
              }}
            >
              {isLight ? "\u00A0MEANINGFULL\u00A0" : "MEANINGFULL"}
            </span>{" "}
            IDENTITIES
          </div>
        </Typography>
      </Box>
    </Box>
  );
}
