import "../styles/globals.css";
import * as React from "react";
// import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import Loading from "@/sections/Loading";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "aos/dist/aos.css"; // You can also use <link> for styles

const clientSideEmotionCache = createEmotionCache();

export const ThemeContext = React.createContext();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const [isLight, setisLight] = React.useState(true);

  const toggleThememode = () => {
    setisLight((pre) => !pre);
  };

  const [isLoading, setisLoading] = React.useState(true);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setisLoading(false);
    }, 0);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const projectsLinks = {
    chatbuddy: "https://github.com/ArunPatel02/chatbuddy",
  };

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <title>Arun Patel ✦ Software Engineer</title>
        <meta property="og:title" content="Arun Patel ✦ Software Engineer" />
        <meta
          name="description"
          property="og:description"
          content="Hi, I'm Arun Patel. A software engineer transforming problems into fun and approachable solutions for all. With years of expertise, I craft intuitive user experiences that captivate and engage. Explore my portfolio for a journey through innovative development solutions."
        />
        <link rel="preconnect" href="https://va.vercel-scripts.com"></link>
        {/* <!-- Image to display --> */}
        {/* <!-- Replace   «example.com/image01.jpg» with your own --> */}
        <meta
          property="og:image"
          content="https://arunpatel.vercel.app/logo.png/"
        />

        {/* <!-- No need to change anything here --> */}
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/jpeg" />

        {/* <!-- Size of image. Any size up to 300. Anything above 300px will not work in WhatsApp --> */}
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />

        {/* <!-- Website to visit when clicked in fb or WhatsApp--> */}
        <meta property="og:url" content="https://arunpatel.vercel.app/" />

        <meta name="author" content="Arun Patel" />
        <link rel="canonical" href="https://arunpatel.vercel.app/" />

        {/* <!-- Chrome, Firefox OS and Opera --> */}
        <meta name="theme-color" content="#151515" />
        {/* <!-- Windows Phone --> */}
        <meta name="msapplication-navbutton-color" content="#151515" />
        {/* <!-- iOS Safari --> */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#151515" />

        <meta
          name="keywords"
          content="Arun, Patel,  Software engineer, user experience, software designer, india, arun patel, Arun Patel portfolio, Arun portfolio, developer portfolio, user interface, information architecture, motion, developer, software developer portfolio, React developer, MERN stack developer, React Native developer, Frontend developer, JavaScript developer, Full-stack developer, UI/UX developer, Web app developer, Mobile app developer, React.js expert, Node.js developer, MongoDB developer, Express.js developer, Redux developer, GraphQL developer, React Native app developer, Cross-platform developer, Responsive web developer, API developer, Software engineer, Arun Patel, React developer, MERN stack developer, React Native developer, Arun Patel frontend developer, Arun Patel JavaScript developer, Arun Patel full-stack developer, Arun Patel UI/UX developer, Arun Patel web app developer, Arun Patel mobile app developer, Arun Patel React.js expert, Arun Patel Node.js developer, Arun Patel MongoDB developer, Arun Patel Express.js developer, Arun Patel Redux developer, Arun Patel GraphQL developer, Arun Patel React Native app developer, Arun Patel cross-platform developer, Arun Patel responsive web developer, Arun Patel API developer, Arun Patel software engineer"
        />
      </Head>
      <ThemeProvider theme={theme(isLight)}>
        <ThemeContext.Provider
          value={{ isLight, setisLight, toggleThememode, projectsLinks }}
        >
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {isLoading ? (
            <>
            </>
            // <Loading />
          ) : (
            <>
              <Component
                {...pageProps}
                toggleThememode={toggleThememode}
                isLight={isLight}
              />
              <Analytics />
              <SpeedInsights />
            </>
          )}
        </ThemeContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}
