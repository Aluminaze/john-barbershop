import Typography from "@mui/material/Typography";
import { MServices } from "components/Services";
import { MLocation } from "components/Location";
import { useStyles } from "./styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import barbershopImg from "./img/barbershop.png";
import { useAppTheme } from "hooks/useAppTheme";
import { motion } from "framer-motion";

const contentVar = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { delay: 0.5 } },
};

const infoVar = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 1, delayChildren: 1, staggerChildren: 0.2 },
  },
};

const infoItemVar = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const Intro = () => {
  const classes = useStyles();
  const theme = useAppTheme();
  const isLessThan960 = useMediaQuery(theme.breakpoints.down("desktopS_960"));

  return (
    <div className={classes.block}>
      <motion.div
        className={classes.content}
        variants={contentVar}
        initial="hidden"
        animate="visible"
      >
        {!isLessThan960 && (
          <img className={classes.img} src={barbershopImg} alt="staff-img" />
        )}
        <motion.div
          className={classes.info}
          variants={infoVar}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={classes.header} variants={infoItemVar}>
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
          </motion.div>

          <motion.div className={classes.devider} variants={infoItemVar} />
          <MServices variants={infoItemVar} />

          <motion.div className={classes.devider} variants={infoItemVar} />
          <MLocation variants={infoItemVar} />
        </motion.div>
      </motion.div>
    </div>
  );
};
