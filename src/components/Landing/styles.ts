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
      position: "relative",
    },
    sectionWithBorder: {
      flexGrow: 1,
      height: "100%",
      display: "flex",
      justifyContent: "center",
      position: "relative",

      "&:before": {
        content: "''",
        position: "absolute",
        height: "50px",
        top: "-30px",
        left: 0,
        right: 0,
        borderTopLeftRadius: "30px",
        borderTopRightRadius: "30px",
        width: "100%",
        backgroundColor: "#fff",
        boxShadow: "0px -5px 5px -5px rgba(34, 60, 80, 0.6)",
      },
    },
    sectionBackground: {
      zIndex: -1,
      backgroundRepeat: "repeat",
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    container: {
      height: "100%",
      width: "1440px",
      display: "flex",
      flexDirection: "column",
    },
    block: {
      minHeight: "calc(100vh)",
      paddingTop: "70px",
      width: "100%",
    },
    [theme.breakpoints.down("desktopM_1440")]: {
      container: {
        width: "100%",
      },
    },
    footer: {
      display: "flex",
      justifyContent: "center",
      flexGrow: 1,
    },
  };
});
