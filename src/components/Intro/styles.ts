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
      gap: "40px",
    },
    left: {
      flexBasis: "40%",
      display: "flex",
      justifyContent: "center",
    },
    img: {
      maxWidth: "400px",
    },
    right: {
      flexBasis: "60%",
      display: "flex",
      flexDirection: "column",
      gap: "50px",
    },
    items: {
      display: "flex",
      flexDirection: "column",
      gap: "30px",
    },
    item: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
    },
  };
});
