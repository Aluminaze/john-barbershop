import Typography from "@mui/material/Typography";
import { useStyles } from "./styles";

import haircutImg from "./img/haircut.png";
import shavingImg from "./img/shaving.png";
import careImg from "./img/care.png";

export const Services = () => {
  const classes = useStyles();

  return (
    <div className={classes.block}>
      <Typography variant="play_bold" sx={{ fontSize: "1.4rem" }}>
        Наши услуги
      </Typography>
      <div className={classes.items}>
        <div className={classes.item}>
          <div>
            <img className={classes.img} src={haircutImg} alt="haircut-img" />
          </div>
          <Typography variant="play_regular" sx={{ fontSize: "1.4rem" }}>
            Стрижка
          </Typography>
        </div>
        <div className={classes.item}>
          <div>
            <img className={classes.img} src={shavingImg} alt="shaving-img" />
          </div>
          <Typography variant="play_regular" sx={{ fontSize: "1.4rem" }}>
            Бритье
          </Typography>
        </div>
        <div className={classes.item}>
          <div>
            <img className={classes.img} src={careImg} alt="care-img" />
          </div>
          <Typography variant="play_regular" sx={{ fontSize: "1.4rem" }}>
            Уход
          </Typography>
        </div>
      </div>
    </div>
  );
};
