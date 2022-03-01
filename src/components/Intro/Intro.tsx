import Typography from "@mui/material/Typography";
import { Services } from "components/Services";
import { Location } from "components/Location";
import { useStyles } from "./styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import barbershopImg from "./img/barbershop.png";
import { useAppTheme } from "hooks/useAppTheme";

export const Intro = () => {
  const classes = useStyles();
  const theme = useAppTheme();
  const isLessThan960 = useMediaQuery(theme.breakpoints.down("desktopS_960"));

  return (
    <div className={classes.block}>
      <div className={classes.content}>
        {!isLessThan960 && (
          <img className={classes.img} src={barbershopImg} alt="staff-img" />
        )}
        <div className={classes.info}>
          <div className={classes.header}>
            {isLessThan960 && (
              <div>
                <img
                  className={classes.img}
                  src={barbershopImg}
                  alt="staff-img"
                />
              </div>
            )}
            <div className={classes.headerInfo}>
              <Typography
                variant="exo2_bold"
                className={classes.headerInfoTitleText}
              >
                Добро пожаловать!
              </Typography>
              <Typography
                variant="exo2_regular"
                className={classes.headerInfoText}
              >
                JOHN Barber - место, где ты приобретешь свой неповторимый и
                уникальный мужской имидж
              </Typography>
            </div>
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
