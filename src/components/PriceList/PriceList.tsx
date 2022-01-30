import Typography from "@mui/material/Typography";
import { useStyles } from "./styles";
import shaveImg from "./img/shave.png";
import chairImg from "./img/chair.png";

interface IServiceList {
  name: string;
  price: number;
}

const services: IServiceList[] = [
  { name: "Мужская стрижка", price: 1200 },
  { name: "Удлинённая стрижка ножницами", price: 1500 },
  { name: "Стрижка под насадку", price: 400 },
  { name: "Студент", price: 1000 },
  { name: "Детская стрижка", price: 800 },
  { name: "Коррекция бороды и усов", price: 800 },
  { name: "Королевское бритьё", price: 1000 },
  { name: "Камуфляж седины (волосы)", price: 1000 },
  { name: "Камуфляж седины (борода и усы)", price: 800 },
  { name: "Снять бороду (триммер)", price: 300 },
];

const complexServices: IServiceList[] = [
  { name: "Стрижка + коррекция бороды", price: 1500 },
  { name: "Стрижка + королевское бритьё", price: 1800 },
  { name: "Стрижка + камуфляж", price: 1800 },
  { name: "Коррекция бороды + камуфляж", price: 1400 },
  { name: "Папа + сын", price: 1700 },
  { name: "Папа с бородой + сын", price: 2000 },
];

const additionalServices: IServiceList[] = [
  { name: "Мытьё и укладка", price: 400 },
  { name: "Коррекция бровей", price: 400 },
  { name: "Воск", price: 400 },
];

export const PriceList = () => {
  const classes = useStyles();

  return (
    <div className={classes.block}>
      <img src={shaveImg} alt="shave-img" className={classes.shaveImg} />
      <img src={chairImg} alt="shave-img" className={classes.chairImg} />
      <div className={classes.content}>
        <div className={classes.titleWrap}>
          <Typography variant="play_bold" className={classes.title}>
            Услуги и цены
          </Typography>
        </div>

        <div className={classes.category}>
          <Typography variant="play_bold" sx={{ fontSize: "1.7rem" }}>
            Основные
          </Typography>
          <div className={classes.list}>
            {services.map((service) => (
              <div className={classes.listItem}>
                <Typography variant="play_regular" sx={{ fontSize: "1.3rem" }}>
                  {service.name}
                </Typography>
                <Typography
                  variant="play_bold"
                  sx={{ fontSize: "1.3rem", minWidth: "60px" }}
                >
                  {service.price} ₽
                </Typography>
              </div>
            ))}
          </div>
        </div>

        <div className={classes.category}>
          <Typography variant="play_bold" sx={{ fontSize: "1.7rem" }}>
            Комплексные
          </Typography>
          <div className={classes.list}>
            {complexServices.map((service) => (
              <div className={classes.listItem}>
                <Typography variant="play_regular" sx={{ fontSize: "1.3rem" }}>
                  {service.name}
                </Typography>
                <Typography
                  variant="play_bold"
                  sx={{ fontSize: "1.3rem", minWidth: "60px" }}
                >
                  {service.price} ₽
                </Typography>
              </div>
            ))}
          </div>
        </div>

        <div className={classes.category}>
          <Typography variant="play_bold" sx={{ fontSize: "1.7rem" }}>
            Дополнительные
          </Typography>
          <div className={classes.list}>
            {additionalServices.map((service) => (
              <div className={classes.listItem}>
                <Typography variant="play_regular" sx={{ fontSize: "1.3rem" }}>
                  {service.name}
                </Typography>
                <Typography
                  variant="play_bold"
                  sx={{ fontSize: "1.3rem", minWidth: "60px" }}
                >
                  {service.price} ₽
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
