import { createTheme } from "@mui/material/styles";
// import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = (isLight) =>
  createTheme({
    // type: isLight ? "light" : "dark",
    palette: isLight
      ? {
          type: "light",
          primary: {
            main: "#ffff",
            light: "",
            dark: "",
          },
          secondary: {
            main: "#151515",
          },
        }
      : {
          type: "dark",
          primary: {
            main: "#151515",
            light: "",
            dark: "",
          },
          secondary: {
            main: "#fff",
          },
        },
    typography: {
      h1: {
        fontFamily: "Neue Helvetica Medium",
        fontSize: "min(calc(4px + 1vw) , 96px)",
      },
      h2: {
        fontFamily: "Neue Helvetica Bold",
        // fontSize: "min(calc(6px + 5vw) , 83px)",
        fontSize: "clamp(28px, 4vw, 80px);",
        lineHeight: "1",
        // color: '#fff',
      },
      h3: {
        fontFamily: "Neue Helvetica Bold",
        fontSize: "clamp(36px, 3vw, 70px);",
        lineHeight: "1.3",
      },
      h4: {
        fontFamily: "Neue Helvetica Bold",
        fontSize: "clamp(28px, 4vw, 36px);",
        // color: '#fff',
      },
      h5: {
        fontFamily: "Neue Helvetica Medium",
        fontSize: "calc(10px + 2vw)",
        // color: '#fff',
      },
      h6: {
        fontFamily: "Neue Helvetica Light",
        WebkitTextStroke: "1px var(--light)",
        color: isLight ? "#ffff" : "#151515",
        fontSize: "calc(6px + 5vw)",
        lineHeight: "1",
      },
      body1: {
        fontFamily: "Neue Helvetica Roman",
        fontSize: "clamp(18px, 1.5vw, 28px);",
      },
      body2: {
        fontFamily: "Neue Helvetica Roman",
        fontSize: "clamp(18px, 1.4vw, 24px);",
        fontWeight: "normal",
      },
      body3: {
        fontFamily: "Neue Helvetica Roman",
        fontSize: "30px",
      },
      fontFamily: "Neue Helvetica Roman" || "Roboto",
    },
    overrides: {
      MuiButton: {},
    },
  });

export default theme;
