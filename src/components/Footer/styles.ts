import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles((theme: Theme) => ({
  block: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "35px 20px",
    gap: "20px",

    [theme.breakpoints.down("desktopS_960")]: {
      padding: "25px 20px 35px 20px",
    },
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  link: {
    transition: "0.3s",

    "&:hover": {
      transform: "translateY(-7px)",
    },
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
