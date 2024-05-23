import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: theme.spacing(4),
    display: "flex",
  },
  textStroke: {
    WebkitTextStrokeColor: "var(--textStroke)",
    WebkitTextStrokeWidth: "1px",
    color: "var(--dark)",
  },
}));

export default function TextStroke({ number, text }) {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography variant="h3" color="secondary" className={classes.textStroke}>
        {number}.
      </Typography>
      <Typography variant="h3" color="secondary">
        &nbsp;{text}
      </Typography>
    </Box>
  );
}
