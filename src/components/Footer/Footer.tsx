import Typography from "@mui/material/Typography";
import { Icons } from "components/Icons";
import { useStyles } from "./styles";

export const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.block}>
      <div className={classes.links}>
        <a
          target="_blank"
          rel="noreferrer"
          href={"https://api.whatsapp.com/send/?phone=79114614366"}
        >
          <Icons.Whatsapp sx={{ color: "#ffffff", fontSize: "40px" }} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={"https://www.instagram.com/john_barbershop39/"}
        >
          <Icons.Instagram sx={{ color: "#ffffff", fontSize: "40px" }} />
        </a>
      </div>
      <Typography
        variant="play_bold"
        sx={{ fontSize: "1.7rem", color: "#ffffff" }}
      >
        &copy; {new Date().getFullYear()} JOHN Barber
      </Typography>
    </div>
  );
};
