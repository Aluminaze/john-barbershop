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
      gap: "40px",
    },
    left: {
      flexBasis: "40%",
      display: "flex",
      justifyContent: "center",
    },
    img: {
      maxWidth: "350px",
    },
    right: {
      flexBasis: "60%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "rgba(255,255,255,.5)",
      borderRadius: "25px",
      padding: "30px 25px",
      backdropFilter: "blur(10px)",
      margin: "0 20px",
      gap: "30px",
    },
    header: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    devider: {
      width: "100%",
      display: "flex",
      borderBottom: "1px solid rgba(0, 0, 0, .5)",
    },
  };
});
