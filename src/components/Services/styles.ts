import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles((theme: Theme) => {
  return {
    block: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    items: {
      display: "flex",
      gap: "40px",
    },
    item: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
    },
    img: {
      height: "60px",
    },
  };
});
