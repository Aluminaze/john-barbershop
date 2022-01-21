import Typography from "@mui/material/Typography";
import { Services } from "components/Services";
import { Location } from "components/Location";
import { useStyles } from "./styles";

import staffImg from "./img/staff.png";

export const Intro = () => {
  const classes = useStyles();

  return (
    <div className={classes.block}>
      <div className={classes.content}>
        <img className={classes.img} src={staffImg} alt="staff-img" />
        <div className={classes.info}>
          <div className={classes.header}>
            <Typography variant="play_bold" sx={{ fontSize: "2rem" }}>
              Добро пожаловать!
            </Typography>
            <Typography variant="play_regular" sx={{ fontSize: "1.4rem" }}>
              JOHN Barbershop - место, где ты приобретешь свой неповторимый и
              уникальный мужской имидж
            </Typography>
          </div>

          <div className={classes.devider} />
          <Services />

          <div className={classes.devider} />
          <Location />
        </div>
      </div>
    </div>
  );
};
