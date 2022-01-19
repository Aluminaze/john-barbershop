import Typography from "@mui/material/Typography";
import { Services } from "components/Services";
import { Location } from "components/Location";
import { useStyles } from "./styles";

import manImg from "./img/man.png";

export const Intro = () => {
  const classes = useStyles();

  return (
    <div className={classes.block}>
      <div className={classes.left}>
        <img className={classes.img} src={manImg} alt="man-img" />
      </div>
      <div className={classes.right}>
        <div className={classes.header}>
          <Typography variant="play_bold" sx={{ fontSize: "2rem" }}>
            JOHN Barbershop
          </Typography>
          <Typography variant="play_regular" sx={{ fontSize: "1.4rem" }}>
            Место, где ты приобретешь свой неповторимый и уникальный мужской
            имидж
          </Typography>
        </div>

        <div className={classes.devider} />
        <Services />

        <div className={classes.devider} />
        <Location />
      </div>
    </div>
  );
};
