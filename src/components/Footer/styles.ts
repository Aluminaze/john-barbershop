import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles((theme: Theme) => ({
  block: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
  },
  links: {
    display: "flex",
    gap: "15px",
  },
}));
