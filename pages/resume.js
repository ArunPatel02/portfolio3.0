import Appbar from "@/sections/Appbar/appbar";
import { Box, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import logo from "../Assets/Images/Resume/logo.png";
import Mail from "../Assets/Images/Resume/mail.svg";
import Network from "../Assets/Images/Resume/network.svg";
import Behance from "../Assets/Images/Resume/Behance.svg";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  mainConainer: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(10, 12),
    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(10, 1),
    },
  },
  flexContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  detailContainer: {
    display: "flex",
    gap: "20px",
    flexGrow: 1,
    alignItems: "center",
  },
  logoWrapper: {
    // height: "100%",
    // flex: "0 0 auto",
    "& img": {
      objectFit: "contain",
      height: "80px",
      width: "80px",
    },
  },
  contactsWrapper: {
    width: "fit-content",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    "& .contactCard": {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      cursor: "pointer",
      "& svg": {
        "& path": {
          fill: "var(--light)",
        },
      },
    },
  },
  resumeDetailWrapper: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  resumeDetail1: {
    flex: ".5",
  },
  resumeDetail2: {
    flex: ".4",
  },
  workLocationAndDuration: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px 0px",
    alignItems: "center",
    flexWrap : "wrap",
    gap: "10px",
    "& p:first-child": {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      gap: "5px",
      "& svg path": {
        fill: "var(--light)",
      },
    },
  },
  workHeader: {
    color: "#1778c5",
    fontWeight: "500",
    margin: "0px 0px 10px 0px",
  },
  workDetails: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginLeft: "1em",
    marginBottom: "40px",
  },
  projectDetails: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginLeft: "1em",
    marginBottom: "20px",
  },
  academic: {
    fontWeight: "600",
    margin: "50px 0px 10px 0px",
    [theme.breakpoints.down("sm")]: {
      margin: "0px 0px 10px 0px",
    },
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" component="main">
      <Appbar />
      {/* <Box component="section" className={classes.mainConainer}>
        <Box className={classes.flexContainer}>
          <Box className={classes.detailContainer}>
            <Box className={classes.logoWrapper}>
              <Image src={logo} alt="logo" />
            </Box>
            <Box>
              <Typography variant="h4" color="secondary">
                Arun Patel
              </Typography>
              <Typography variant="body1" color="secondary">
                UI/UX Designer
              </Typography>
            </Box>
          </Box>
          <Box className={classes.contactsWrapper}>
            <Box className="contactCard">
              <Mail />
              <Typography variant="body2" color="secondary">
                +91 9479163344
              </Typography>
            </Box>
            <Link href="https://abhinavvgupta.com">
              <Box className="contactCard">
                <Network />
                <Typography variant="body2" color="secondary">
                  abhinavvgupta.com
                </Typography>
              </Box>
            </Link>
            <Link href="mailto:abhinavofficial120@gmail.com">
              <Box className="contactCard">
                <Mail />
                <Typography variant="body2" color="secondary">
                  abhinavv.gupta19@gmail.com
                </Typography>
              </Box>
            </Link>
            <Link href="https://www.behance.net/abhinavvgupta">
              <Box className="contactCard">
                <Behance />
                <Typography variant="body2" color="secondary">
                  Behance
                </Typography>
              </Box>
            </Link>
          </Box>
        </Box>
        <Box className={classes.resumeDetailWrapper}>
          <Box className={classes.resumeDetail1}>
            <Typography variant="body2" color="secondary" marginTop={"40px"}>
              As a UI/UX designer with over 4 years of experience, I am
              passionate about creating intuitive and engaging digital
              experiences for users. My expertise lies in conducting user
              research, creating wireframes and prototypes, and designing
              visually appealing interfaces that enhance the user experience.
            </Typography>
            <Typography
              variant="body1"
              color="secondary"
              style={{ fontWeight: "600", margin: "40px 0px 20px 0px" }}
            >
              Work Experience
            </Typography>
            <Typography
              variant="body1"
              color="secondary"
              className={classes.workHeader}
            >
              UI/UX Designer
            </Typography>
            <Typography variant="body2" color="secondary">
              June 1, 2023 - Present
            </Typography>
            <Box component="div" className={classes.workLocationAndDuration}>
              <Typography variant="body2" color="secondary">
                <Network /> Go Inbound Pvt. Ltd.
              </Typography>
              <Typography variant="body2" color="secondary">
                Full time | Singapore
              </Typography>
            </Box>
            <Box component="ul" className={classes.workDetails}>
              <Typography component="li" variant="body2" color="secondary">
                Led redesign projects for dental and event websites, resulting
                in a 40% improvement in overall user satisfaction.
              </Typography>
              <Typography component="li" variant="body2" color="secondary">
                Implemented data-driven design decisions based on user
                analytics, reducing bounce rate by 10%.
              </Typography>
              <Typography component="li" variant="body2" color="secondary">
                Developed wireframes and prototypes using industrystandard
                tools, facilitating efficient communication between design and
                development teams.
              </Typography>
              <Typography component="li" variant="body2" color="secondary">
                Refined existing designs for complex CRMs and developed
                intricate wireframes to assist in mobile/web app development,
                resulting in a 30% decrease in bug fixes.
              </Typography>
            </Box>
            <Typography
              variant="body1"
              color="secondary"
              className={classes.workHeader}
            >
              Lead User Interface Designer
            </Typography>
            <Typography variant="body2" color="secondary">
              December 30, 2021 - April 01, 2023
            </Typography>
            <Box component="div" className={classes.workLocationAndDuration}>
              <Typography variant="body2" color="secondary">
                <Network /> Webcube Infotech.
              </Typography>
              <Typography variant="body2" color="secondary">
                Full time | Halifax (Canada)
              </Typography>
            </Box>
            <Box component="ul" className={classes.workDetails}>
              <Typography component="li" variant="body2" color="secondary">
                Responsible for interface design, user flow mapping, and overall
                user experience.
              </Typography>
              <Typography component="li" variant="body2" color="secondary">
                Creating brand identity assets, as well as spearheading website
                experience improvements, Projects include data visualisation,
                event branding, and advertising design.
              </Typography>
              <Typography component="li" variant="body2" color="secondary">
                Created storyboards and personas as per users, and incorporated
                them into design decisions, resulting in an improved and
                significant design creation.
              </Typography>
            </Box>
            <Typography
              variant="body1"
              color="secondary"
              className={classes.workHeader}
            >
              UI/UX Designer
            </Typography>
            <Typography variant="body2" color="secondary">
              August 28, 2022 - November, 2022
            </Typography>
            <Box component="div" className={classes.workLocationAndDuration}>
              <Typography variant="body2" color="secondary">
                <Network /> Whalesbook Intern.
              </Typography>
              <Typography variant="body2" color="secondary">
                Intern | Banglore (India)
              </Typography>
            </Box>
            <Box component="ul" className={classes.workDetails}>
              <Typography component="li" variant="body2" color="secondary">
                Improve the end-to-end experience of Whalesbook mobile Platform
                by conducting usability reviews, identifying UX issues and
                proposing design recommendations.
              </Typography>
              <Typography component="li" variant="body2" color="secondary">
                Fostered collaboration and consistency across teams by working
                closely with founder and developers.
              </Typography>
              <Typography component="li" variant="body2" color="secondary">
                Created interaction strategies that helped, developing
                navigation and flow, designing wireframes and interactive
                prototypes, organizing content, and advocating for the needs and
                goals of real users.
              </Typography>
            </Box>
          </Box>
          <Box className={classes.resumeDetail2}>
            <Typography
              variant="body1"
              color="secondary"
              className={classes.academic}
            >
              Academic Background
            </Typography>
            <Typography variant="body2" color="secondary" marginBottom={"10px"}>
              Institute of Techonology and Management Gwalior
            </Typography>
            <Typography variant="body2" color="secondary">
              Bachelor of Technology in Computer Science and Engineering | 2019
              - 2023 | CGPA: 8.24/10.0
            </Typography>
            <Typography
              variant="body1"
              color="secondary"
              style={{ fontWeight: "600", margin: "20px 0px 10px 0px" }}
            >
              Skills
            </Typography>
            <Typography
              variant="body2"
              color="secondary"
              style={{ margin: "10px 0px 10px 0px" }}
            >
              Design
            </Typography>
            <Typography variant="body2" color="secondary">
              UX Research • User Interaction Design • Agile Development •
              Journey Mapping • Information Architecture • Prototyping •
              Wireframming • Web/ App Design • Usability Testing • Data
              Visualization • Product Management
            </Typography>
            <Typography
              variant="body2"
              color="secondary"
              style={{ margin: "20px 0px 10px 0px" }}
            >
              Tools & Software
            </Typography>
            <Typography variant="body2" color="secondary">
              Figma • Adobe XD • Adobe Illustrator • Adobe Photoshop • InVision
              • Webflow • Protopie
            </Typography>
            <Typography
              variant="body1"
              color="secondary"
              style={{ fontWeight: "600", margin: "30px 0px 20px 0px" }}
            >
              Projects
            </Typography>
            <Box component="div" className={classes.workLocationAndDuration}>
              <Typography variant="body2" color="secondary">
                <Network /> MyGenie: OnDemand Services App (Case Study)
              </Typography>
            </Box>
            <Box component="ul" className={classes.projectDetails}>
              <Typography component="li" variant="body2" color="secondary">
                MyGenie provides a platform that allows skilled and experienced
                professionals(Genies) to connect with users looking for specific
                services. Once on the platform, our match-making algorithm
                identifies professionals who are closest to the users
                requirements and available at the requested time and date.
              </Typography>
            </Box>
            <Box component="div" className={classes.workLocationAndDuration}>
              <Typography variant="body2" color="secondary">
                <Network /> CodeNinja (Web Design)
              </Typography>
            </Box>
            <Box component="ul" className={classes.projectDetails}>
              <Typography component="li" variant="body2" color="secondary">
                CodeNinja is a service based platform that create error-free,
                secured, and easily-scalable software solutions tailored to your
                specific business requirements. Which uses the latest
                technologies to build interactive, highly responsive, innovative
                products that will boost your business processes.
              </Typography>
            </Box>
            <Box component="div" className={classes.workLocationAndDuration}>
              <Typography variant="body2" color="secondary">
                <Network /> NFT Marketplace (Web/App Design)
              </Typography>
            </Box>
            <Box component="ul" className={classes.projectDetails}>
              <Typography component="li" variant="body2" color="secondary">
                Explore rare digital art and collectibles in a vibrant
                marketplace where creativity meets cryptocurrency. Our NFT
                platform offers a secure and intuitive space for artists and
                collectors to mint, purchase, and trade unique tokens.
              </Typography>
            </Box>
            <Box component="div" className={classes.workLocationAndDuration}>
              <Typography variant="body2" color="secondary">
                <Network /> Crypto Trading App (App Design)
              </Typography>
            </Box>
            <Box component="ul" className={classes.projectDetails}>
              <Typography component="li" variant="body2" color="secondary">
                Trade on the go with our app-swift, secure crypto transactions
                at your fingertips.
              </Typography>
            </Box>
            <Typography
              variant="body1"
              color="secondary"
              style={{ fontWeight: "600", margin: "20px 0px 20px 0px" }}
            >
              Certifications
            </Typography>
            <Box component="ul" className={classes.projectDetails}>
              <Typography component="li" variant="body2" color="secondary">
                Foundations of User Experience (UX) <br />
                Google - Certified 2022
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box> */}
    </Container>
  );
};

export default Resume;
