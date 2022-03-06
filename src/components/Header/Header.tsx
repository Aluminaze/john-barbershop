import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useStyles } from "./styles";
import scissorsImg from "./img/scissors.png";
import { Link } from "react-scroll";

import { styled } from "@mui/material/styles";
import { SECTION } from "variables";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useAppTheme } from "hooks/useAppTheme";
import { config } from "config";
import { motion } from "framer-motion";

const navVar = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.8 },
  },
};

const navItemVar = {
  hidden: {
    x: -25,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const CustomButton = styled(Button)(({ theme }) => ({
  color: theme.customColor.text.inverted.lightMode,
  backgroundColor: theme.customColor.green_pine,
  lineHeight: 1,

  "&:hover": {
    backgroundColor: theme.customColor.green_pine,
  },
}));

export const Header = () => {
  const classes = useStyles();
  const theme = useAppTheme();
  const isMoreThanTablet768px = useMediaQuery(
    theme.breakpoints.up("tablet_768")
  );

  const handleSignUp = (): void => {
    window.location.href = config.yclients;
  };

  return (
    <div className={classes.header}>
      <div className={classes.container}>
        <div className={classes.headerLogo}>
          <img
            className={classes.headerLogoImg}
            src={scissorsImg}
            alt="scissorsImg"
          />
          <Typography variant="play_bold" className={classes.headerLogoText}>
            JOHN Barber
          </Typography>
        </div>

        {isMoreThanTablet768px && (
          <motion.ul
            variants={navVar}
            initial="hidden"
            whileInView="visible"
            className={classes.nav}
          >
            <motion.li variants={navItemVar} className={classes.navLink}>
              <Link
                to={SECTION.INTRO}
                spy={true}
                smooth={true}
                duration={500}
                offset={-10}
              >
                <Typography variant="exo2_regular" sx={{ fontSize: "1.2rem" }}>
                  Главная
                </Typography>
              </Link>
            </motion.li>
            <motion.li variants={navItemVar} className={classes.navLink}>
              <Link
                to={SECTION.PRICE_LIST}
                spy={true}
                smooth={true}
                duration={500}
                offset={10}
              >
                <Typography variant="exo2_regular" sx={{ fontSize: "1.2rem" }}>
                  Усулуги и цены
                </Typography>
              </Link>
            </motion.li>
            <motion.li variants={navItemVar} className={classes.navLink}>
              <Link
                to={SECTION.ABOUT}
                spy={true}
                smooth={true}
                duration={500}
                offset={10}
              >
                <Typography variant="exo2_regular" sx={{ fontSize: "1.2rem" }}>
                  О нас
                </Typography>
              </Link>
            </motion.li>
          </motion.ul>
        )}

        <CustomButton
          variant="contained"
          sx={{ fontSize: "1rem" }}
          onClick={handleSignUp}
        >
          Записаться онлайн
        </CustomButton>
      </div>
    </div>
  );
};
