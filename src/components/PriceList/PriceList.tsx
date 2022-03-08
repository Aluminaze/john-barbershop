import Typography from "@mui/material/Typography";
import { useStyles } from "./styles";
import shaveImg from "./img/shave.png";
import chairImg from "./img/chair.png";
import { motion } from "framer-motion";
import { motionTitleVar } from "motionVariants";

interface IServiceList {
  name: string;
  price: number;
}

interface ICategoryList {
  title: string;
  data: IServiceList[];
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

const categories: ICategoryList[] = [
  {
    title: "Основные",
    data: services,
  },
  {
    title: "Комплексные",
    data: complexServices,
  },
  {
    title: "Дополнительные",
    data: additionalServices,
  },
];

const categoryTitleVar = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2 },
  }),
};

const categoryListVar = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
};

const categoryListItemVar = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const PriceList = () => {
  const classes = useStyles();

  return (
    <div className={classes.block}>
      <img src={shaveImg} alt="shave-img" className={classes.shaveImg} />
      <img src={chairImg} alt="shave-img" className={classes.chairImg} />
      <div className={classes.content}>
        <motion.div
          className={classes.titleWrap}
          variants={motionTitleVar}
          initial="hidden"
          custom={1}
          whileInView="visible"
          viewport={{ amount: 0.3, once: true }}
        >
          <Typography variant="exo2_bold" className={classes.title}>
            Услуги и цены
          </Typography>
        </motion.div>

        {categories.map((category) => (
          <div className={classes.category} key={category.title}>
            <motion.div
              variants={categoryTitleVar}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ amount: 0.4, once: true }}
            >
              <Typography variant="exo2_bold" sx={{ fontSize: "1.7rem" }}>
                {category.title}
              </Typography>
            </motion.div>
            <motion.div
              className={classes.list}
              variants={categoryListVar}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
            >
              {category.data.map((service) => (
                <motion.div
                  key={service.name + service.price}
                  className={classes.listItem}
                  variants={categoryListItemVar}
                >
                  <Typography
                    variant="exo2_regular"
                    sx={{ fontSize: "1.3rem" }}
                  >
                    {service.name}
                  </Typography>
                  <Typography
                    variant="exo2_bold"
                    className={classes.listItemPrice}
                  >
                    {service.price} ₽
                  </Typography>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
