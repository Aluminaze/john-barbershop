import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles((theme: Theme) => ({
  block: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    padding: "50px 0",

    [theme.breakpoints.down("tablet_768")]: {
      padding: "30px 0px",
      gap: "25px",
    },
  },
  blockTitle: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
  },
  blockTitleText: {
    "&.MuiTypography-root": {
      fontSize: "2rem",

      [theme.breakpoints.down("desktopS_960")]: {
        fontSize: "1.7rem",
      },
    },
  },
  cards: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",

    [theme.breakpoints.down("tablet_768")]: {
      gap: "15px",
      padding: "0 20px",
    },
  },
  card: {
    width: "70%",
    minHeight: "240px",
    display: "flex",
    alignSelf: "center",
    boxShadow: "-4px 23px 45px -2px rgba(60, 62, 64, 0.4)",
    borderRadius: "30px",
    overflow: "hidden",

    [theme.breakpoints.down("desktopS_960")]: {
      width: "85%",
    },

    [theme.breakpoints.down("tablet_768")]: {
      width: "100%",
      flexDirection: "column",
    },
  },
  cardInfo: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    flexBasis: "65%",
    padding: "35px",
    gap: "20px",
    backgroundColor: "#0a2533",

    [theme.breakpoints.down("tablet_768")]: {
      padding: "20px",
    },
  },
  cardInfoTitle: {
    "&.MuiTypography-root": {
      color: "#ffffff",
      fontSize: "1.8rem",

      [theme.breakpoints.down("desktopL_1680")]: {
        fontSize: "1.6rem",
      },
    },
  },
  cardImgBlock: {
    position: "relative",
    display: "flex",
    flexBasis: "35%",
    justifyContent: "center",
    alignItems: "center",

    [theme.breakpoints.down("tablet_768")]: {
      padding: "20px 0",
    },
  },
  cardDecorImg: {
    position: "absolute",
    left: 0,
    top: 0,
    height: "40%",
  },
  cardImg: {
    [theme.breakpoints.down("tablet_768")]: {
      width: "100px",
      heigh: "auto",
    },
  },
  cardInfoTextWrap: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  cardInfoText: {
    "&.MuiTypography-root": {
      color: "#e5e7eb",
      fontSize: "1.4rem",

      [theme.breakpoints.down("desktopS_960")]: {
        fontSize: "1.2rem",
      },
    },
  },
}));
