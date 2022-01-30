import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles((theme: Theme) => {
  return {
    main: {
      height: "auto",
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
    acticle: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
    },
    section: {
      flexGrow: 1,
      height: "100%",
      display: "flex",
      justifyContent: "center",
    },
    container: {
      height: "100%",
      width: "1440px",
      display: "flex",
      flexDirection: "column",
    },
    block: {
      minHeight: "calc(100vh - 70px)",
      width: "100%",
    },
    [theme.breakpoints.down("desktopM_1440")]: {
      container: {
        width: "100%",
      },
    },
  };
});
