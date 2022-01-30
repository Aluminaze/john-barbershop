import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles((theme: Theme) => ({
  block: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    gap: "20px",

    [theme.breakpoints.down("desktopS_960")]: {
      padding: "10px",
    },
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  copyright: {
    display: "flex",
    gap: "8px",
  },
  copyrightText: {
    "&.MuiTypography-root": {
      fontSize: "1.7rem",
      color: "#ffffff",

      [theme.breakpoints.down("desktopS_960")]: {
        fontSize: "1.35rem",
      },
    },
  },
}));
