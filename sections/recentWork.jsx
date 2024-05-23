import { Box, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import NFTMarketplace from "./projects/Doof";
// import globalStyles from "../Components/globalStyles";
import clsx from "clsx";
import Gyanmarg from "./projects/Gyanmarg";
import Chatbuddy from "./projects/Chatbuddy";
import Parkwise from "./projects/parkWise";
import yellowButterfly from "../Assets/Images/Light/butterfly2.svg?url";
import butterfly from "../Assets/Images/Light/butterfly.svg?url";
import CopyInsert from "./projects/CopyInsert";

const useStyles = makeStyles((theme) => ({
  recentworkSection: {
    marginTop: 100,
    [theme.breakpoints.down("lg")]: {
      marginTop: 50,
      padding: "0 20px",
      // border: "1px solid red",
      "& $titleLine1": {
        marginTop: 15,
      },
      "& $Emergenie": {
        width: "100%",
        // height: "100%",
      },
      "& $Photostudio": {
        width: "100%",
        // height: "100%",
        // marginTop: 0,
        // flex: ".5",
      },
      "& $LetsConnect": {
        // border: "1px solid white",
        width: "100%",
        // height: "100%",
      },
      "& $Inpulse": {
        // border: "1px solid white",
        width: "100%",
        // height: "100%",
      },
      "& $Codeaxes": {
        width: "100%",
        // height: "100%",
      },
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 20px",
      "& $heroTitle": {
        marginLeft: 0,
        marginRight: 0,
        padding: theme.spacing(0, 4, 0, 0),
      },
      "& $titleLine1": {
        marginTop: 15,
      },
      "& $Emergenie": {
        marginTop: 30,
      },
      "& $Photostudio": {
        marginTop: 60,
      },
      "& $LetsConnect": {
        marginTop: 60,
      },
      "& $Inpulse": {
        marginTop: 60,
      },
      "& $Codeaxes": {
        marginTop: 60,
      },
    },
  },
  heroTitle: {
    marginTop: theme.spacing(6),
    marginLeft: "150px",
    marginRight: "auto",
    borderBottom: "2px solid var(--light)",
    width: "fit-content",
    // border: '2px solid white',
    padding: theme.spacing(0, 25, 0, 5),
    [theme.breakpoints.down("lg")]: {
      marginLeft: "50px",
      padding: theme.spacing(0, 20, 0, 5),
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
      padding: theme.spacing(0, 0, 0, 0),
    },
  },
  titleLine1: {
    paddingBottom: 10,
  },
  Emergenie: {
    // marginTop: "-0.4rem",
    position: "relative",
    // marginTop: "0.1rem",
  },
  Photostudio: {
    // marginTop: "-3em",
    // marginTop: ".1em",
  },
  LetsConnect: {
    marginTop: "0em",
    // marginTop: ".1em",
  },
  Inpulse: {
    // marginTop: "-8em",
    // marginTop: ".1em",
  },
  Codeaxes: {
    // marginTop: "-5em",
    // marginTop: ".1em",
  },
  yellowImage: {
    position: "absolute",
    top: "8%",
    left: "-70%",
    zIndex: 2,
    height: "13vw",
    width: "13vw",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "right",
    backgroundImage: `url(${yellowButterfly.src})`,
    [theme.breakpoints.down("lg")]: {
      left: "160px",
      top: "-45px",
      transform: "rotateY(180deg)",
      width: "80px",
      height: "80px",
    },
    [theme.breakpoints.down(800)]: {
      left: "140px",
      top: "-45px",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  butterfly: {
    position: "absolute",
    top: "-43%",
    right: "-6%",
    zIndex: 2,
    height: "-webkit-fill-available",
    width: "9vw",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "right",
    backgroundImage: `url(${butterfly.src})`,
    [theme.breakpoints.down(1600)]: {
      top: "-40%",
    },
  },
  row1: {
    gap: "20px",
    padding: "0px 50px",
    // border: "1px solid green",
    [theme.breakpoints.down("lg")]: {
      padding: "80px 20px 0px 20px",
      justifyContent: "space-between !important",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "0px",
      padding: "30px 0px 0px 0px",
    },
  },
  row2: {
    gap: "20px",
    padding: "0px 50px",
    marginTop: "40px",
    [theme.breakpoints.down("lg")]: {
      padding: "30px 20px 0px 20px",
      justifyContent: "space-between !important",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "0px",
      padding: "0px",
      marginTop: "0px",
    },
  },
  row3: {
    padding: "0px 50px",
    marginTop: "40px",
    [theme.breakpoints.down("lg")]: {
      padding: "30px 20px 0px 20px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0px",
      marginTop: "0px",
    },
  },
}));

export default function Recentwork({ global, isLight }) {
  const classes = useStyles();

  return (
    <>
      <Box
        component="section"
        className={clsx(classes.recentworkSection, global.starBg)}
      >
        <Box component="div" className={clsx(global.title, classes.heroTitle)}>
          <Typography
            component="small"
            color="secondary"
            className={global.titleNo}
          >
            03
          </Typography>
          <Typography
            variant="h2"
            color="secondary"
            className={classes.titleLine1}
          >
            FEATURED WORK
          </Typography>
        </Box>

        <Box className={clsx(global.section, classes.row1)}>
          <Box
            component="div"
            className={clsx(global.bigCirle, global.arrowRightBottom)}
          >
            <Box className={global.whiteCircle}>
              <Typography variant="body2" className={global.circleText}>
                Breathing in the aroma of <br /> CREATIVITY. ✨
              </Typography>
            </Box>
          </Box>

          <Box component="div" className={classes.Emergenie}>
            {isLight ? <Box className={classes.yellowImage}></Box> : ""}
            <CopyInsert global={global} />
          </Box>

          <Box component="div" className={classes.Photostudio}>
            <NFTMarketplace global={global} />
          </Box>
        </Box>

        <Box className={clsx(global.section, classes.row2)}>
          <Box component="div" className={classes.LetsConnect}>
            <Gyanmarg global={global} />
          </Box>
          <Box component="div" className={classes.Inpulse}>
            <Chatbuddy global={global} />
          </Box>
        </Box>

        {/* <Box style={{ display: "flex" }}>
          <Box component="div" className={clsx(classes.Codeaxes, classes.row3)}>
            <Parkwise global={global} />
          </Box>
          <Box
            component="div"
            className={clsx(global.bigCirle, global.arrowLeft)}
            style={{ position: "relative" }}
          >
            {isLight ? <Box className={classes.butterfly}></Box> : null}
            <Box className={global.whiteCircle}>
              <Typography variant="body2" className={global.circleText}>
                This one is special 💜
              </Typography>
            </Box>
          </Box>
        </Box> */}
      </Box>
    </>
  );
}
