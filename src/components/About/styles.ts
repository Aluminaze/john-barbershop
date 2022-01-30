import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles((theme: Theme) => ({
  block: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    padding: "100px 0 50px 0",
  },
  blockTitle: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
  },
  cards: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },
  card: {
    width: "70%",
    minHeight: "240px",
    display: "flex",
    alignSelf: "center",
    boxShadow: "-4px 23px 45px -2px rgba(60, 62, 64, 0.4)",
  },
  cardInfo: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    flexBasis: "65%",
    padding: "35px",
    gap: "20px",
    backgroundColor: "#0a2533",
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
  cardImg: {
    display: "flex",
    flexBasis: "35%",
    justifyContent: "center",
    alignItems: "center",
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

      [theme.breakpoints.down("desktopL_1680")]: {
        fontSize: "1.2rem",
      },
    },
  },
}));
