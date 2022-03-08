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
    content: {
      flexBasis: "60%",
      display: "flex",
      alignItems: "center",
      backgroundColor: "rgba(255,255,255,.8)",
      backdropFilter: "blur(7px)",
      borderRadius: "8px",
      padding: "30px 25px",
      margin: "0 20px",
      gap: "30px",

      [theme.breakpoints.down("desktopS_1280")]: {
        flexBasis: "80%",
      },
      [theme.breakpoints.down("desktopS_960")]: {
        flexBasis: "90%",
      },
      [theme.breakpoints.down("tablet_768")]: {
        backgroundColor: "rgba(255,255,255,.8)",
        margin: "0px 0px",
        padding: "25px 20px",
      },
    },
    img: {
      maxHeight: "500px",
      [theme.breakpoints.down("desktopS_960")]: {
        maxHeight: "80px",
      },
    },
    info: {
      display: "flex",
      flexDirection: "column",
      gap: "30px",

      [theme.breakpoints.down("tablet_768")]: {
        gap: "15px",
      },
    },
    header: {
      display: "flex",
      gap: "20px",
    },
    headerInfo: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    headerInfoTitleText: {
      "&.MuiTypography-root": {
        fontSize: "1.7rem",

        [theme.breakpoints.down("desktopS_960")]: {
          fontSize: "1.4rem",
        },
      },
    },
    headerInfoText: {
      "&.MuiTypography-root": {
        fontSize: "1.3rem",

        [theme.breakpoints.down("desktopS_960")]: {
          fontSize: "1.1rem",
        },
      },
    },
    devider: {
      width: "100%",
      display: "flex",
      borderBottom: "1px solid rgba(0, 0, 0, .5)",
    },
  };
});
