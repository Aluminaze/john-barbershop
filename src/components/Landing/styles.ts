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
    sectionDivider: {
      flexGrow: 1,
      minHeight: "50px",
      display: "flex",
      justifyContent: "center",
      backgroundColor: "#125a4c",
    },
    containerDivider: {
      width: "100%",
      height: "100%",
      borderTopLeftRadius: "30px",
      borderTopRightRadius: "30px",
      backgroundColor: theme.customColor.background.primary.lightMode,
      transform: "translateY(3px)",
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
