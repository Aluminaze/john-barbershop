import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles((theme: Theme) => {
  return {
    block: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    items: {
      display: "flex",
      gap: "40px",
    },
    item: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      cursor: "pointer",
    },
    itemText: {
      "&.MuiTypography-root": {
        fontSize: "1.3rem",

        [theme.breakpoints.down("desktopS_960")]: {
          fontSize: "1.1rem",
        },
      },
    },
    img: {
      height: "60px",

      [theme.breakpoints.down("tablet_768")]: {
        height: "40px",
      },
    },
  };
});
