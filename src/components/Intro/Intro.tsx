import Typography from "@mui/material/Typography";
import { Icons } from "components/Icons";
import manImg from "./img/man.png";
import { useStyles } from "./styles";

export const Intro = () => {
  const classes = useStyles();

  return (
    <div className={classes.block}>
      <div className={classes.left}>
        <img className={classes.img} src={manImg} alt="man-img" />
      </div>
      <div className={classes.right}>
        <Typography variant="play_bold" sx={{ fontSize: "2rem" }}>
          Добро пожаловать
        </Typography>

        <div className={classes.items}>
          <div className={classes.item}>
            <Icons.Location sx={{ fontSize: 40 }} />
            <Typography variant="play_bold" sx={{ fontSize: "1.3rem" }}>
              г. Калининград, ул. Багратиона, 43-47
            </Typography>
          </div>
          <div className={classes.item}>
            <Icons.Calendar sx={{ fontSize: 40 }} />
            <Typography variant="play_bold" sx={{ fontSize: "1.3rem" }}>
              7 дней в неделю
            </Typography>
          </div>
          <div className={classes.item}>
            <Icons.Time sx={{ fontSize: 40 }} />
            <Typography variant="play_bold" sx={{ fontSize: "1.3rem" }}>
              10:00 - 21:00
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
