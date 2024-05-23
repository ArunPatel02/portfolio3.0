import { makeStyles } from "@mui/styles";
import arrowRight from "../Assets/Images/arrow-right.svg?url";
import arrowDown from "../Assets/Images/arrow-down.svg?url";
import arrowRightBottom from "../Assets/Images/arrow-right-bottom.svg?url";
import arrowLeft from "../Assets/Images/arrow-left.svg?url";
import arrowLeftBottom from "../Assets/Images/arrow-left-bottom.svg?url";
import bgStars from "../Assets/Images/Bgstars.webp";
import footerBg from "../Assets/Images/Footerbg.svg?url";
import footerBgLight from "../Assets/Images/Light/footer.svg?url";

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
    // maxWidth: "300px",
    // maxHeight: "300px",
    // minWidth: "20vw",
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
    // filter: "invert(1)",1
  },
  arrowDown: {
    // transform:' translate(50%, 45%)',
    marginLeft: "190px",
    marginTop: "100px",
    backgroundImage: `url(${arrowDown.src})`,
    // backgroundSize: "300px 150px",
    backgroundPosition: "center",
    backgroundSize: "auto 55%",
    filter: theme.palette.type === "dark" ? "invert(1)" : "",
  },
  arrowRightBottom: {
    backgroundImage: `url(${arrowRightBottom.src})`,
    // backgroundSize: "300px 200px",
    backgroundPosition: "center",
    backgroundSize: "55%",
    alignSelf: "flex-end",
    transform: "translate(0px, 130px)",
    filter: theme.palette.type === "dark" ? "invert(1)" : "",
  },
  arrowLeft: {
    backgroundImage: `url(${arrowLeft.src})`,
    // backgroundSize: "300px 80px",
    backgroundPosition: "center",
    backgroundSize: "55%",
    // transform: 'translate(50%, 60%)',
    marginLeft: "120px",
    marginTop: "180px",
    filter: theme.palette.type === "dark" ? "invert(1)" : "",
  },
  arrowLeftBottom: {
    backgroundImage: `url(${arrowLeftBottom.src})`,
    // backgroundSize: "300px 150px",
    backgroundPosition: "center",
    backgroundSize: "55%",
    // transform: 'translate(30%, -45%)',
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
    [theme.breakpoints.down("lg")]: {
      // height: "32px",
    },
  },
  starBg: {
    backgroundImage: `url(${bgStars.src})`,
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
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

export default globalStyles;
