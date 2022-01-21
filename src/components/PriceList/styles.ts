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
    backgroundColor: "rgba(255,255,255,.4)",
    backdropFilter: "blur(2px)",
  },
  title: {
    display: "flex",
    justifyContent: "center",
  },
  shaveImg: {
    position: "absolute",
    top: "10%",
    left: 0,
    height: "350px",
  },
  chairImg: {
    position: "absolute",
    bottom: "10%",
    right: 0,
    height: "300px",
  },
  category: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
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
    transition: "all 0.3s ease-out",

    "&:hover": {
      backgroundColor: theme.customColor.green_pine,
      borderColor: "#FFFFFF",

      "& span": {
        color: "#FFFFFF",
      },
    },
  },
}));
