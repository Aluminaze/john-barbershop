import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Icons } from "components/Icons";
import { config } from "config";
import { useAppTheme } from "hooks/useAppTheme";
import { useStyles } from "./styles";

export const Footer = () => {
  const classes = useStyles();
  const theme = useAppTheme();
  const isLessThan960 = useMediaQuery(theme.breakpoints.down("desktopS_960"));

  return (
    <div className={classes.block}>
      <div className={classes.links}>
        <a
          className={classes.link}
          target="_blank"
          rel="noreferrer"
          href={config.whatsapp}
        >
          <Icons.Whatsapp
            sx={{ color: "#ffffff", fontSize: `${isLessThan960 ? 30 : 40}px` }}
          />
        </a>
        <a
          className={classes.link}
          target="_blank"
          rel="noreferrer"
          href={config.instagram}
        >
          <Icons.Instagram
            sx={{ color: "#ffffff", fontSize: `${isLessThan960 ? 30 : 40}px` }}
          />
        </a>
      </div>
      <div className={classes.copyright}>
        <Typography
          variant="exo2_bold"
          className={classes.copyrightText}
          noWrap
        >
          &copy; {new Date().getFullYear()}
        </Typography>
        <Typography variant="play_bold" className={classes.copyrightText}>
          JOHN Barber
        </Typography>
      </div>
    </div>
  );
};
