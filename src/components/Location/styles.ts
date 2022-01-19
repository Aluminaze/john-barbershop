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
      flexDirection: "column",
      gap: "10px",
    },
    item: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
  };
});
