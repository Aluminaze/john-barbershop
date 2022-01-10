import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles((theme: Theme) => {
  return {
    app: {
      height: "100%",
      overflow: "auto hidden",
    },
    main: {
      height: "auto",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop: "70px",
    },
    container: {
      height: "100%",
      width: "1440px",
      display: "flex",
      flexDirection: "column",
    },
    block: {
      height: "calc(100vh - 70px)",
      width: "100%",
    },
    [theme.breakpoints.down("desktopM_1440")]: {
      container: {
        width: "100%",
      },
    },
  };
});
