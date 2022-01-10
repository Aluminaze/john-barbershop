import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles((theme: Theme) => {
  return {
    block: {
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    left: {
      flexBasis: "40%",
      border: "1px solid red",
      display: "flex",
      justifyContent: "center",
    },
    img: {
      maxWidth: "400px",
    },
    right: {
      border: "1px solid red",
      flexBasis: "60%",
    },
  };
});
