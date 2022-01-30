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
          <Icons.Location sx={{ fontSize: "30px" }} />
          <Typography variant="play_regular" className={classes.itemText}>
            г. Калининград, ул. Багратиона, 43-47
          </Typography>
        </div>
        <div className={classes.item}>
          <Icons.Calendar sx={{ fontSize: "30px" }} />
          <Typography variant="play_regular" className={classes.itemText}>
            7 дней в неделю
          </Typography>
        </div>
        <div className={classes.item}>
          <Icons.Time sx={{ fontSize: "30px" }} />
          <Typography variant="play_regular" className={classes.itemText}>
            10:00 - 21:00
          </Typography>
        </div>
      </div>
    </div>
  );
};
