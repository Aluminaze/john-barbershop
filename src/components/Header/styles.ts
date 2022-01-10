import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles((theme: Theme) => {
  return {
    header: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      display: "flex",
      justifyContent: "center",
      height: 70,
      backgroundColor: theme.customColor.background.primary.lightMode,
      boxShadow: "0 3px 5px rgba(57, 63, 72, 0.3)",
      zIndex: 9999,
    },
    container: {
      width: "1440px",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 1rem",
    },
    headerLogo: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
  };
});
