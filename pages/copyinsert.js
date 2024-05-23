import Appbar from "@/sections/Appbar/appbar";
import { useRef } from 'react'
import { Box, Container, Typography, Modal, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import bg_yellow from "../Assets/Images/project/myqenie/Dark/yellow_bg.webp";
import Star from "../Assets/Images/project/myqenie/Dark/Star.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import GitHub from "@mui/icons-material/GitHub";
import globalStyles from "@/Components/globalStyles";
import Footer from "@/sections/FooterProject";
import clsx from "clsx";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import Head from "next/head";
import lightBg from "../Assets/Images/lightbg.webp";
import Aos from "aos";
import Lottie from "lottie-web";
import Link from "next/link";
// ..
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: true,
});

const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    height: "fit-content",
    // height: '100vh',
    // minHeight: '70vh',
    width: "100vw",
    maxWidth: "100vw",
    overflow: "hidden",
    backgroundImage: `url(${bg_yellow.src})`,
    backgroundSize: "cover",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("lg")]: {
      "& $bannerContentWrapper": {
        padding: "0px 50px",
      },
      "& $BackButton": {
        padding: "0px 50px",
        margin: theme.spacing(18, 0, 5, 0),
      },
    },
    [theme.breakpoints.down("md")]: {
      height: "fit-content",
      "& $bannerContentImageWrapper": {
        flex: 1,
        height: "35vh",
        // width : "50%",
        minWidth: "100%",
        "& $bannerContentImage": {
          width: "80vw",
          objectPositionX: "center !important",
          right: "50%",
          transform: "translateX(50%) !important",
        },
      },
      "& $bannerContent": {
        display: "none",
      },
      "& $BackButton": {
        padding: "0px 50px",
        margin: theme.spacing(12, 0, 5, 0),
      },
    },
    [theme.breakpoints.down("sm")]: {
      height: "120vw",
      minHeight: "60vh",
      "& $bannerContentWrapper": {
        padding: "0px",
      },
      "& $bannerContentImageWrapper": {
        height: "100%",
        "& $bannerContentImage": {
          width: "100vw",
        },
      },
      "& $BackButton": {
        padding: "0px 50px",
        margin: theme.spacing(10, 0, 5, 0),
      },
    },
    [theme.breakpoints.down("sm")]: {
      // height: "50vh",
      "& $bannerContentImageWrapper": {
        "& $bannerContentImage": {
          width: "85vw",
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      height: "50vh",
      "& $bannerContentImageWrapper": {
        "& $bannerContentImage": {
          width: "85vw",
        },
      },
    },
  },
  BackButton: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    zIndex: 100000,
    gap: "15px",
    zIndex: "10",
    padding: theme.spacing(0, 0, 0, 12.5),
    margin: theme.spacing(16, 0, 8, 0),
    "& div": {
      width: "40px",
      height: "4px",
      background: "white",
    },
    "& span": {
      fontSize: "clamp(16px, 2vw, 24px)",
      fontWeight: 700,
      color: "white",
    },
  },
  bannerHeadingWrapper: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    "& $bannerHeading:nth-child(1)": {
      transform: "translateX(-50px)",
    },
  },
  bannerHeading: {
    display: "flex",
    "& div": {
      display: "flex",
      alignItems: "center",
      width: "fit-content",
      minWidth: "fit-content",
    },
    "& div h1": {
      fontSize: "clamp(24px, 4vw, 64px)",
      color: "white",
      fontWeight: 700,
      textTransform: "uppercase",
    },
    "& div svg": {
      fontSize: "clamp(24px, 6vw, 113px);",
      color: "white",
    },
  },
  bannerContentWrapper: {
    flexGrow: 1,
    display: "flex",
    alignItems: "end",
    padding: `0px ${theme.spacing(12.5)}`,
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {},
  },
  bannerContent: {
    flex: ".4",
    fontSize: "clamp(16px, 1.5vw, 24px);",
    lineHeight: 1.5,
    color: "white",
    padding: "80px 0px",
  },
  bannerContentImageWrapper: {
    position: "relative",
    flex: ".55",
    width: "100%",
    height: "100%",
    minWidth: "600px",
  },
  bannerContentImage: {
    width: "100%",
    position: "absolute",
    bottom: -20,
    right: 0,
    objectFit: "contain",
    objectPosition: "bottom",
    zIndex: 12,
  },
  ProjectOverviewWrapper: {
    display: "flex",

    margin: "0px 20px",
    marginTop: theme.spacing(16),
    paddingBottom: "20px",

    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(8),
      flexDirection: "column-reverse",
      // "& $ProjectOverviewOutline": {
      //   // flex: "0 0 100%",
      //   // display: "flex",
      //   // gap: "30px",
      //   // flexWrap: "wrap",
      //   // justifyContent: "space-between",
      // },
    },
  },
  ProjectOverviewOutline: {
    flex: ".3",
    "& ul": {
      listStyle: "none",
      marginBottom: theme.spacing(6),
    },
    "& ul li": {
      marginBottom: theme.spacing(1),
    },
    "& ul li:nth-child(1)": {
      marginBottom: theme.spacing(1.75),
      textTransform: "uppercase",
      "& p": {
        fontWeight: 700,
        letterSpacing: "3px",
      },
    },
  },
  ProjectOverviewDetails: {
    flex: ".7",
    "&>p": {
      marginBottom: theme.spacing(4),
      lineHeight: theme.spacing(4),
    },
  },
  projectHeading: {
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(5),
  },
  projectOverviewImageWrapper: {
    margin: "0px 20px",
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(5),
    "& img": {
      width: "100%",
      height: "100%",
    },
  },
  question: {
    fontSize: "20px",
    fontWeight: "bold",
    // fontStyle: "italic",
    // paddingLeft: "20px",
    // borderLeft: "4px solid var(--light)",
  },
  backgroundLight: {
    backgroundPosition: "0,0,0,0",
    backgroundSize: "auto, 45vw",
    padding: "0px",
  },
  backgroundDark: {
    // zIndex: "-1",
    padding: "0px",
    height: "100vh",
    width: "100%",
    backgroundPosition: "0, 0",
    backgroundRepeat: "repeat",
    backgroundSize: "auto",
    // position: "fixed",
  },
  github: {
    marginTop: theme.spacing(0.5),
    color: "var(--light)",
    fontSize: "clamp(28px, 4vw, 36px);",
  }
}));

export default function Mygenie({ isLight }) {
  const global = globalStyles();
  const classes = useStyles();
  const route = useRouter();
  console.log(isLight);

  const animationContainer = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/animation.json",
    });
  }, []);

  const projectPrototypeAnimation = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: projectPrototypeAnimation.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/copyinsert.json",
    });
  }, []);

  const [windowSize, setWindowSize] = useState(true);
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

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
    <>
      <Head>
        <title>Arun Patel ✦ CopyInsert</title>
        <meta property="og:title" content="Arun Patel ✦ CopyInsert" />
        <meta
          name="description"
          property="og:description"
          content="Mobile application enabling users to create and save post
          descriptions with customizable fonts and hashtags.
          Implemented features include backup functionality and
          app password protection for enhanced security."
        />
        <link rel="canonical" href="https://www.abhinavvgupta.com/mygenie" />
        <meta
          name="keywords"
          content="React Native Arun Patel app, Social media post description generator, Hashtag generator app, Custom font app, Social media backup app, Google Drive backup app, Password-protected app, Social media assistant app, Content creation tool, Post enhancement app, Social media content manager, Post caption generator, Trending hashtag app, Font customization tool, Data backup and security app, Social media management app"
        />
      </Head>
      <Appbar />
      <Container
        maxWidth="1920px"
        style={{
          backgroundImage: isLight
            ? `linear-gradient(rgba(255, 255, 255, .7), rgba(255, 255, 255, .7)), url(${lightBg.src})`
            : "",
        }}
        className={clsx(
          isLight ? classes.backgroundLight : classes.backgroundDark
        )}
      >
        <Container component="section" className={classes.bannerContainer}>
          {windowSize ? (
            <AnimatedCursor
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
            />
          ) : null}
          <Box className={classes.BackButton} onClick={() => route.back()}>
            <div className="link"></div>
            <span className="link">BACK</span>
          </Box>
          <Box className={classes.bannerHeadingWrapper}>
            <Box className={classes.bannerHeading}>
              <div>
                <h1>CopyInsert</h1> <Star />
              </div>
              <div>
                <h1>CopyInsert</h1> <Star />
              </div>
              <div>
                <h1>CopyInsert</h1> <Star />
              </div>
              <div>
                <h1>CopyInsert</h1> <Star />
              </div>
              <div>
                <h1>CopyInsert</h1> <Star />
              </div>
              <div>
                <h1>CopyInsert</h1> <Star />
              </div>
              <div>
                <h1>CopyInsert</h1> <Star />
              </div>
              <div>
                <h1>CopyInsert</h1> <Star />
              </div>
            </Box>
            <Box className={classes.bannerHeading}>
              <div>
                <h1>CopyInsert</h1> <Star />
              </div>
              <div>
                <h1>CopyInsert</h1> <Star />
              </div>
              <div>
                <h1>CopyInsert</h1> <Star />
              </div>
              <div>
                <h1>CopyInsert</h1> <Star />
              </div>
              <div>
                <h1>CopyInsert</h1> <Star />
              </div>
              <div>
                <h1>CopyInsert</h1> <Star />
              </div>
              <div>
                <h1>CopyInsert</h1> <Star />
              </div>
              <div>
                <h1>CopyInsert</h1> <Star />
              </div>
            </Box>
          </Box>
          <Box className={classes.bannerContentWrapper}>
            <Box className={classes.bannerContent}>
              <p>
                Mobile application enabling users to create and save post
                descriptions with customizable fonts and hashtags.
                Implemented features include backup functionality and
                app password protection for enhanced security.
              </p>
            </Box>
            <Box className={classes.bannerContentImageWrapper}>
              {/* <Image
                src={Mobile}
                className={classes.bannerContentImage}
                alt="mobile"
                data-aos="fade-up"
                data-aos-duration="700"
              /> */}
              <div ref={animationContainer} className={classes.bannerContentImage}></div>
            </Box>
          </Box>
        </Container>
        <Container component={"section"} maxWidth={"lg"}>
          <Box
            className={classes.ProjectOverviewWrapper}
            style={{
              borderBottom: isLight
                ? "2px solid #EBEDE3"
                : "2px solid rgba(53, 57, 85, 1)",
            }}
          >
            <Box className={classes.ProjectOverviewOutline}>
              <ul>
                <li>
                  <Typography variant="body2" color="secondary">
                    Project type
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="secondary">
                    Independent
                  </Typography>
                </li>
              </ul>
              <ul>
                <li>
                  <Typography variant="body2" color="secondary">
                    Timeline
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="secondary">
                    02 weeks
                  </Typography>
                </li>
              </ul>
              <ul>
                <li>
                  <Typography variant="body2" color="secondary">
                    Skills
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="secondary">
                    React Native
                  </Typography>
                </li>
                {/* <li>
                  <Typography variant="body2" color="secondary">
                    Redux-Toolkit
                  </Typography>
                </li> */}
                <li>
                  <Typography variant="body2" color="secondary">
                    Tailwind CSS
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="secondary">
                    Firebase
                  </Typography>
                </li>
              </ul>
              <ul>
                <li>
                  <Typography variant="body2" color="secondary">
                    tools
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="secondary">
                    Expo
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="secondary">
                    GitHub
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="secondary">
                    VS Code
                  </Typography>
                </li>
              </ul>
            </Box>
            <Box className={classes.ProjectOverviewDetails}>
              <Typography
                variant="h3"
                color="secondary"
                className={classes.projectHeading}
              >
                CopyInsert - iOS/Android App
              </Typography>
              <Typography variant="body2" color="secondary">
                Elevate your social media presence with this powerful assistant designed to simplify content creation. Generate engaging post descriptions effortlessly and boost your reach with our intelligent hashtag generator, which analyzes trending topics for maximum visibility. Customize your posts with a variety of unique fonts to make your content stand out. Keep your data secure with automatic Google Drive backups and a password-protected interface, ensuring your information is always safe and accessible. Perfect for influencers, businesses, and casual users, this app makes it easy to create compelling, standout social media posts. Available on [iOS/Android/both].
              </Typography>
              <Typography
                variant="body2"
                color="secondary"
                className={classes.question}
              >
                👉 Why should I choose this app over other social media tools?
              </Typography>
              <Typography variant="body2" color="secondary">
                Choose this app for its ease of use, comprehensive features like post descriptions, hashtag generation, custom fonts, secure Google Drive backups, and password protection, ensuring standout and secure social media content.
              </Typography>
              <Box>
                <Link href="https://github.com/ArunPatel02/copy-inst" className="link" target="_blank">
                  <Tooltip title="Source Code" placement="top" arrow>
                    <GitHub className={classes.github} />
                  </Tooltip>
                </Link>
              </Box>
            </Box>
          </Box>
          <Box>
            {/* <Image
              src={projectOverview}
              alt="projectOverview"
              data-aos="zoom-in"
              data-aos-duration="500"
            /> */}
            <div ref={projectPrototypeAnimation} style={{ width: "100%", padding: "40px 0px 60px 0px" }}></div>
          </Box>
        </Container>

        <Container maxWidth="lg" component={"section"}>
          <Box>
            <Typography
              variant="body1"
              color={"secondary"}
              onClick={() => route.push("/chatbuddy")}
              style={{
                marginBottom: "40px",
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                gap: "10px",
              }}
            >
              Chatbuddy <ArrowForwardIosIcon />
            </Typography>
          </Box>
        </Container>
        <Container maxWidth="xl">
          <Footer global={global} isLight={isLight} />
        </Container>
      </Container>
    </>
  );
}
