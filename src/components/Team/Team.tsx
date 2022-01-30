import Typography from "@mui/material/Typography";
import { useStyles } from "./styles";
import teamImg from "./img/team.png";
import staffImg from "./img/staff.png";
import networkImg from "./img/network.png";

export const Team = () => {
  const classes = useStyles();

  return (
    <div className={classes.block}>
      <div className={classes.blockTitle}>
        <Typography variant="play_bold" sx={{ fontSize: "2rem" }}>
          О нас
        </Typography>
      </div>

      <div className={classes.cards}>
        <div className={classes.card}>
          <div
            className={classes.cardImg}
            style={{ backgroundColor: "#4ec0c4" }}
          >
            <div>
              <img src={teamImg} alt="teamImg" />
            </div>
          </div>
          <div className={classes.cardInfo}>
            <Typography
              variant="play_bold"
              sx={{ fontSize: "1.8rem", color: "#ffffff" }}
            >
              Команда
            </Typography>

            <div className={classes.cardInfoText}>
              <Typography
                variant="play_regular"
                sx={{ fontSize: "1.4rem", color: "#e5e7eb" }}
              >
                Наша команда - это в первую очередь друзья, объединённые одной
                общей идеей.
              </Typography>
              <Typography
                variant="play_regular"
                sx={{ fontSize: "1.4rem", color: "#e5e7eb" }}
              >
                Мы мастера своего дела, приходи к нам и убедись в этом сам!
              </Typography>
            </div>
          </div>
        </div>

        <div className={classes.card}>
          <div
            className={classes.cardImg}
            style={{ backgroundColor: "#f89630" }}
          >
            <div>
              <img src={staffImg} alt="staffImg" />
            </div>
          </div>
          <div className={classes.cardInfo}>
            <Typography
              variant="play_bold"
              sx={{ fontSize: "1.8rem", color: "#ffffff" }}
            >
              Мастера
            </Typography>

            <div className={classes.cardInfoText}>
              <Typography
                variant="play_regular"
                sx={{ fontSize: "1.4rem", color: "#e5e7eb" }}
              >
                У нас работают мастера своего дела!
              </Typography>
              <Typography
                variant="play_regular"
                sx={{ fontSize: "1.4rem", color: "#e5e7eb" }}
              >
                Барбер должен уметь всё: от стрижки до поднятия настроения
                гостя. Именно этим мы отличаемся от других.
              </Typography>
              <Typography
                variant="play_regular"
                sx={{ fontSize: "1.4rem", color: "#e5e7eb" }}
              >
                Именно поэтому в списке лучших мест города находится именно JOHN
                Barbershop!
              </Typography>
            </div>
          </div>
        </div>

        <div className={classes.card}>
          <div
            className={classes.cardImg}
            style={{ backgroundColor: "#96a99f" }}
          >
            <div>
              <img src={networkImg} alt="networkImg" />
            </div>
          </div>
          <div className={classes.cardInfo}>
            <Typography
              variant="play_bold"
              sx={{ fontSize: "1.8rem", color: "#ffffff" }}
            >
              Социальные сети
            </Typography>

            <div className={classes.cardInfoText}>
              <Typography
                variant="play_regular"
                sx={{ fontSize: "1.4rem", color: "#e5e7eb" }}
              >
                Мы активно ведем и публикуем информацию о нас в социальных
                сетях!
              </Typography>
              <Typography
                variant="play_regular"
                sx={{ fontSize: "1.4rem", color: "#e5e7eb" }}
              >
                Присоединяйся к нам, мы будем рады тебя видеть!
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
