// import { useRouter } from "next/navigation"

import Appbar from "@/sections/Appbar/appbar";
import { Box, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useParams, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./_app";
import globalStyles from "@/Components/globalStyles";
import clsx from "clsx";
import AnimatedCursor from "react-animated-cursor";
import heroCircle from "../Assets/Images/Herocircle.svg?url";

const useStyle = makeStyles((theme) => ({
  constiner: {
    minHeight: "100vh",
  },
  commingSoon: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(5),
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    "& video": {
      height: "50%",
    },
    "& .line": {
      width: "100%",
      height: "2px",
      background: "#353955",
    },
    [theme.breakpoints.down("md")]: {
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${heroCircle.src})`,
      backgroundSize: "clamp(350px, 80vw, 100vw)",
      backgroundPosition: "50% 44%",
    },
    [theme.breakpoints.down("sm")]: {
      backgroundPosition: "50% 40%",
      "& video": {
        width: "100%",
        height: "fit-content",
      },
    },
  },
  titleLine1: {
    fontFamily: "Neue Helvetica Bold",
    fontSize: "clamp(28px, 7vw, 90px);",
    paddingBottom: "10vh",
    paddingTop: "10vh",
    // lineHeight: "130%",
    // alignItems: "center",
    textAlign: "center",
    [theme.breakpoints.down(1200)]: {
      fontSize: "clamp(16px, 14vw, 90px);",
    },
    [theme.breakpoints.down(400)]: {
      fontSize: "clamp(16px, 12vw, 90px);",
    },
  },
  word: {
    WebkitTextStroke: `1px var(--light)`,
    color: "rgba(21,21,21,0)",
  },
  BackButton: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: theme.spacing(0, 0, 0, 12.5),
    margin: theme.spacing(16, 0, 8, 0),
    "& div": {
      width: "40px",
      height: "4px",
      background: "var(--light)",
    },
    "& span": {
      fontSize: "clamp(16px, 2vw, 24px)",
      fontWeight: 700,
      color: "var(--light)",
    },
    [theme.breakpoints.down(600)]: {
      padding: theme.spacing(0, 0, 0, 2),
      "& div": {
        width: "25px",
        height: "3px",
        background: "white",
      },
    },
  },
  footerText: {
    cursor: "pointer",
    textDecoration: "none",
    fontSize: "clamp(36px, 3vw, 70px);",
    [theme.breakpoints.down(600)]: {
      fontSize: "clamp(26px, 3vw, 90px);",
    },
  },
}));

const Commingsoon = () => {
  const params = useParams();
  const global = globalStyles();
  console.log(params);
  const classes = useStyle();
  const { isLight, projectsLinks } = useContext(ThemeContext);

  const [windowSize, setWindowSize] = useState(true);

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        if (window.innerWidth <= 900) {
          setWindowSize(false);
        }
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount

  const route = useRouter();

  return (
    <Container
      maxWidth="xl"
      className={clsx(
        classes.constiner,
        isLight ? global.footer_bg_light : global.footer_bg
      )}
      style={{ backgroundSize: "80% !important" }}
    >
      {windowSize ? <AnimatedCursor
        innerSize={12}
        outerSize={30}
        color={isLight ? "21,21,21" : "255, 255, 255"}
        outerAlpha={0.2}
        innerScale={1.5}
        outerScale={4}
        hasBlendMode={true}
        outerStyle={
          windowSize
            ? {
              border: "1px solid var(--light)",
            }
            : { display: "none" }
        }
        innerStyle={windowSize ? {} : { display: "none" }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      /> : null}
      <Appbar />
      <Box className={classes.BackButton} onClick={() => route.back()}>
        <div className="link"></div>
        <span className="link">BACK</span>
      </Box>
      <Box maxWidth={"lg"} className={classes.commingSoon}>
        {/* <video src="/commingsoon.mp4" autoPlay loop muted /> */}
        <Typography
          variant="h2"
          color="secondary"
          className={classes.titleLine1}
        >
          <span className={classes.word}> COMING </span>
          <br /> SOON
        </Typography>
        <Box className="line"></Box>
        <Box>
          <Typography variant="body2" color={"secondary"}>
            Can’t wait?
          </Typography>
          <Typography
            component={"a"}
            href={projectsLinks[params?.commingsoon]}
            variant="h3"
            color={"secondary"}
            className={classes.footerText}
            aria-label="behance"
          >
            Watch it on Github :)
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Commingsoon;
