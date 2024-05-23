import { FormControl, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  formControl: {
    margin: "10px 0",
    "& .MuiOutlinedInput-root": {
      borderRadius: "5px",
    },
    "& fieldset": {
      display: "none",
    },
    width: "100%",
  },
  input: {
    background: "#F0F0F0",
    borderRadius: "5px",
  },
  dropdownRoot: {
    borderRadius: "5px !important",
    background: "#F0F0F0 !important",
  },
  inputFont: {
    fontWeight: 500,
    letterSpacing: ".5px",
  },
}));

function CustomInput({ label, varient = "outlined", ...rest }) {
  const classes = useStyles();
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <TextField
        label={label}
        classes={{ root: classes.input }}
        inputProps={{
          className: classes.inputFont,
        }}
        variant={varient}
        // variant="standard"
        size="small"
        {...rest}
      />
    </FormControl>
  );
}

export default CustomInput;
