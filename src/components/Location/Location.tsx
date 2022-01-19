import Typography from "@mui/material/Typography";
import { Icons } from "components/Icons";
import { useStyles } from "./styles";

export const Location = () => {
  const classes = useStyles();

  return (
    <div className={classes.block}>
      <Typography variant="play_bold" sx={{ fontSize: "1.4rem" }}>
        Мы находимся и работаем
      </Typography>
      <div className={classes.items}>
        <div className={classes.item}>
          <Icons.Location sx={{ fontSize: 28 }} />
          <Typography variant="play_regular" sx={{ fontSize: "1.3rem" }}>
            г. Калининград, ул. Багратиона, 43-47
          </Typography>
        </div>
        <div className={classes.item}>
          <Icons.Calendar sx={{ fontSize: 28 }} />
          <Typography variant="play_regular" sx={{ fontSize: "1.3rem" }}>
            7 дней в неделю
          </Typography>
        </div>
        <div className={classes.item}>
          <Icons.Time sx={{ fontSize: 28 }} />
          <Typography variant="play_regular" sx={{ fontSize: "1.3rem" }}>
            10:00 - 21:00
          </Typography>
        </div>
      </div>
    </div>
  );
};
