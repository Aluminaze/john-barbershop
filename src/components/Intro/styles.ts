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
      maxWidth: "200px",
    },
    content: {
      flexBasis: "60%",
      display: "flex",
      alignItems: "center",
      backgroundColor: "rgba(255,255,255,.5)",
      borderRadius: "25px",
      padding: "30px 25px",
      margin: "0 20px",
      gap: "30px",
    },
    info: {
      display: "flex",
      flexDirection: "column",
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
