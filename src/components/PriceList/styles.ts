import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles((theme: Theme) => ({
  block: {
    position: "relative",
    minHeight: "100%",
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
  },
  content: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    maxWidth: "600px",
    padding: "50px 0",
    zIndex: 999,
    gap: "40px",
    backgroundColor: "rgba(255,255,255,.7)",
    backdropFilter: "blur(6px)",

    [theme.breakpoints.down("tablet_768")]: {
      gap: "20px",
      padding: "30px 0",
    },
  },
  titleWrap: {
    display: "flex",
    justifyContent: "center",
  },
  title: {
    "&.MuiTypography-root": {
      fontSize: "2rem",

      [theme.breakpoints.down("desktopS_960")]: {
        fontSize: "1.7rem",
      },
    },
  },
  shaveImg: {
    position: "absolute",
    top: "10%",
    left: 0,
    height: "350px",

    [theme.breakpoints.down("desktopL_1680")]: {
      left: "5%",
    },
    [theme.breakpoints.down("tablet_768")]: {
      height: "250px",
    },
  },
  chairImg: {
    position: "absolute",
    bottom: "5%",
    right: 0,
    height: "300px",

    [theme.breakpoints.down("desktopL_1680")]: {
      right: "5%",
    },
    [theme.breakpoints.down("tablet_768")]: {
      height: "250px",
    },
  },
  category: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    padding: "0px 15px",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 15px",
    borderBottom: "1px solid",
    borderColor: "#000000",

    [theme.breakpoints.down("desktopS_960")]: {
      padding: "7px 15px",
    },
    [theme.breakpoints.down("tablet_768")]: {
      padding: "7px 0px",
    },
  },
  listItemPrice: {
    "&.MuiTypography-root": {
      fontSize: "1.3rem",
      minWidth: "70px",
      textAlign: "right",
    },
  },
}));
