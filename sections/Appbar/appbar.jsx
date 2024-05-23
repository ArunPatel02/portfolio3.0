import React from "react";
import LogoLight from "../../Assets/Images/LogoLight.svg";
import LogoDark from "../../Assets/Images/LogoDark.svg";
// import LogoName from "../../Assets/Images/AbhinavGupta.svg";
import { makeStyles } from "@mui/styles";
import { Box, useColorScheme } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "@/pages/_app";
import AOS from "aos";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const useStyles = makeStyles((theme) => ({
  nav: {
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    zIndex: 99,
    backdropFilter: "blur(5px)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `40px ${theme.spacing(12.5)}`,
    paddingBottom: "20px",
    display: "flex",
    [theme.breakpoints.down("lg")]: {
      padding: "40px 50px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "25px 50px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px 10px 20px",

      "& $navlinks": {
        display: "none",
      },
      "& label": {
        transform: "scale(0.8)",
      },
    },
  },
  LogoContainer: {
    // marginRight: "32px",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      // marginRight: "12px",
      // transform: "scale(0.8)",
    },
    // width: "47px",
    // marginTop: "-0.3em",
    "& svg": {
      // width: "100%",
      // height: "100%",
      color: "var(--dark)",
      "&>path": {
        fill: "var(--light)",
      },
      "& g>path": {
        fill: "var(--light)",
      },
    },
  },
  LogoContainer1: {
    marginRight: "32px",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      marginRight: "12px",
      // transform: "scale(.8)",
    },
    width: "47px",
  },
  logoname: {
    // flexGrow: 1,
    width: "130px",
    height: "38px",
    "& svg path": {
      fill: "var(--light)",
    },
  },
  navlinks: {
    display: "flex",
    justifyContent: "space-between",
    listStyle: "none",
    width: "18%",
    "& a": {
      color: "white",
    },
    "& a:link": {
      textDecoration: "none",
    },
  },
}));

export default function Appbar() {
  const classes = useStyles();

  const { setisLight, isLight, toggleThememode } = useContext(ThemeContext);

  // console.log("--this is value of context", contextValue);

  const handleChange = (event) => {
    // setState({ ...state, [event.target.name]: event.target.checked });
    if (event.target.checked) {
      document.querySelector("body").classList.add("light");

      toggleThememode();
    } else {
      // document.querySelector("body").style.transition = "all 0s ease-in 1s";
      document.querySelector("body").classList.remove("light");

      toggleThememode();

      // document.querySelector("body").classList.add("dark");
    }
  };
  const pathName = usePathname();
  console.log(pathName);

  return (
    <Box component="nav" className={clsx(classes.nav, "aos_nav_me")}>
      <Box
        className={
          pathName?.includes("/copyinsert")
            ? classes.LogoContainer1
            : classes.LogoContainer
        }
        // style={pathName === "/" ? {} : { "& svg g path": { fill: "white" } }}
      >
        {pathName === "/" ? (
          <LogoLight
            id="stick-logo"
            style={{ textAlign: "center" }}
            width="160px"
            height="30px"
          />
        ) : (
          <Link href="/" aria-label="home">
            <LogoDark
              id="stick-logo"
              style={{ textAlign: "center" }}
              width="160px"
              height="38px"
            />
          </Link>
        )}
      </Box>

      <Box>
        <input
          type="checkbox"
          id="theme-toggle"
          // class="theme-toggle"
          checked={isLight}
          onChange={handleChange}
        />
        <label for="theme-toggle" style={{ textAlign: "center" }}></label>
      </Box>
    </Box>
  );
}
