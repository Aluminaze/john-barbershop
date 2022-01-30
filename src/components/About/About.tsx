import Typography from "@mui/material/Typography";
import { useStyles } from "./styles";
import teamImg from "./img/team.png";
import staffImg from "./img/staff.png";
import networkImg from "./img/network.png";

interface ICardStruct {
  img: any;
  title: string;
  info: string[];
  cardColor: string;
}

const cards: ICardStruct[] = [
  {
    img: teamImg,
    title: "Команда",
    info: [
      "Наша команда - это в первую очередь друзья, объединённые одной общей идеей.",
      "Мы мастера своего дела, приходи к нам и убедись в этом сам!",
    ],
    cardColor: "#4ec0c4",
  },
  {
    img: staffImg,
    title: "Мастера",
    info: [
      "У нас работают мастера своего дела!",
      "Барбер должен уметь всё: от стрижки до поднятия настроения гостя. Именно этим мы отличаемся от других.",
      "Именно поэтому в списке лучших мест города находится именно JOHN Barber!",
    ],
    cardColor: "#f89630",
  },
  {
    img: networkImg,
    title: "Социальные сети",
    info: [
      "Мы активно ведем и публикуем информацию о нас в социальных сетях!",
      "Присоединяйся к нам, мы будем рады тебя видеть!",
    ],
    cardColor: "#96a99f",
  },
];

export const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.block}>
      <div className={classes.blockTitle}>
        <Typography variant="play_bold" className={classes.blockTitleText}>
          О нас
        </Typography>
      </div>

      <div className={classes.cards}>
        {cards.map((cardItem) => (
          <div className={classes.card} key={cardItem.title}>
            <div
              className={classes.cardImgBlock}
              style={{ backgroundColor: cardItem.cardColor }}
            >
              <img
                src={cardItem.img}
                alt={cardItem.title}
                className={classes.cardImg}
              />
            </div>
            <div className={classes.cardInfo}>
              <Typography variant="play_bold" className={classes.cardInfoTitle}>
                {cardItem.title}
              </Typography>

              <div className={classes.cardInfoTextWrap}>
                {cardItem.info.map((infoText) => (
                  <Typography
                    variant="play_regular"
                    className={classes.cardInfoText}
                    sx={{ fontSize: "1.4rem", color: "#e5e7eb" }}
                  >
                    {infoText}
                  </Typography>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
