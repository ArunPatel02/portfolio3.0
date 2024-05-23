"use client";
import Appbar from "@/sections/Appbar/appbar";
import Intro from "@/sections/Intro";
import Overview from "@/sections/overview";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import Recentwork from "@/sections/recentWork";
import { makeStyles } from "@mui/styles";
import arrowRight from "../Assets/Images/arrow-right.svg?url";
import arrowDown from "../Assets/Images/arrow-down.svg?url";
import arrowRightBottom from "../Assets/Images/arrow-right-bottom.svg?url";
import arrowLeft from "../Assets/Images/arrow-left.svg?url";
import arrowLeftBottom from "../Assets/Images/arrow-left-bottom.svg?url";
import Designs from "@/sections/designs";
import Footer from "@/sections/footer";
import bgStars from "../Assets/Images/Bgstars.webp";
import footerBg from "../Assets/Images/Footerbg.svg?url";
import lightBg from "../Assets/Images/lightbg.webp";
import footerBgLight from "../Assets/Images/Light/footer.svg?url";
import dynamic from "next/dynamic";
import Aos from "aos";
// You can also use <link> for styles
// ..

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const globalStyles = makeStyles((theme) => ({
  title: {
    width: "fit-content",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "fit-content",
      gap: "0px !important",
    },
  },
  titleNo: {
    position: "absolute",
    paddingLeft: "30px",
    transform: " translate(-135%, -35%)",
    borderBottom: "2px solid var(--light)",
    fontFamily: "Silk Serif Regular Italic",
    fontSize: "calc(5px + 2.5vw)",
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      marginLeft: 0,
      paddingLeft: 10,
      fontSize: 20,
    },
  },
  bigCirle: {
    height: "20vw",
    width: "20vw",
    borderRadius: "50%",
    border: "1px solid #151515",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    zIndex: 2,
    "&:hover": {
      "& $whiteCircle": {
        transform: "scale(1)",
      },
      "& $circleText": {
        transform: "scale(1)",
        opacity: 1,
      },
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },

  whiteCircle: {
    height: "100%",
    width: "100%",
    borderRadius: "50%",
    backgroundColor: "#151515",
    transform: "scale(0)",
    transition: "0.3s all ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  circleText: {
    transform: "scale(0)",
    opacity: 0,
    transitionDelay: "0.3s",
    transition: "0.4s all ease",
    color: "#151515",
    fontWeight: 400,
    filter: "invert(1)",
  },
  section: {
    display: "flex",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  arrowRight: {
    alignSelf: "flex-end",
    transform: " translate(25%, -5%)",
    backgroundImage: `url(${arrowRight.src})`,
    backgroundPosition: "center",
    backgroundSize: "55%",
    filter: theme.palette.type === "dark" ? "invert(1)" : "",
  },
  arrowDown: {
    marginLeft: "190px",
    marginTop: "100px",
    backgroundImage: `url(${arrowDown.src})`,
    backgroundPosition: "center",
    backgroundSize: "auto 55%",
    filter: theme.palette.type === "dark" ? "invert(1)" : "",
  },
  arrowRightBottom: {
    backgroundImage: `url(${arrowRightBottom.src})`,
    backgroundPosition: "center",
    backgroundSize: "55%",
    alignSelf: "flex-end",
    transform: "translate(0px, 130px)",
    filter: theme.palette.type === "dark" ? "invert(1)" : "",
  },
  arrowLeft: {
    backgroundImage: `url(${arrowLeft.src})`,
    backgroundPosition: "center",
    backgroundSize: "55%",
    marginLeft: "120px",
    marginTop: "180px",
    filter: theme.palette.type === "dark" ? "invert(1)" : "",
  },
  arrowLeftBottom: {
    backgroundImage: `url(${arrowLeftBottom.src})`,
    backgroundPosition: "center",
    backgroundSize: "55%",
    marginLeft: "100px",
    marginTop: "-2em",
    filter: theme.palette.type === "dark" ? "invert(1)" : "",
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
      height: "fit-content",
      "& span:nth-child(2)": {
        display: "none",
      },
    },
    [theme.breakpoints.down("lg")]: {},
  },
  starBg: {
    backgroundImage: `url(${bgStars.src})`,
    backgroundSize: "contain",
  },
  footer_bg: {
    backgroundImage: `url(${footerBg.src})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom",
    backgroundSize: "contain",
  },
  footer_bg_light: {
    backgroundImage: `url(${footerBgLight.src})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom",
    backgroundSize: "contain",
  },
}));

export default function Home({ toggleThememode, isLight }) {
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setisLoading(false);
    }, 0);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const global = globalStyles();

  const [windowSize, setWindowSize] = useState(true);

  useEffect(() => {
    Aos.init();
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
  }, [isLight]); // Empty array ensures that effect is only run on mount

  return (
    <Container
      disableGutters
      style={{
        position: "relative",
        margin: "0px auto",
        maxWidth: "1920px",
        backgroundImage: isLight
          ? `linear-gradient(rgba(255, 255, 255, .7), rgba(255, 255, 255, .7)), url(${lightBg.src})`
          : "",
        backgroundPosition: "0,0,0,0",
        backgroundSize: "auto, 45vw",
      }}
    >
      <>
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
        <Appbar isLight={isLight} toggleThememode={toggleThememode} />
        <Intro global={global} isLight={isLight} />
        <Designs global={global} isLight={isLight} windowSize={windowSize} />
        <Overview global={global} isLight={isLight} />
        <Recentwork global={global} isLight={isLight} />
        <Footer global={global} isLight={isLight} />
      </>
    </Container>
  );
}
