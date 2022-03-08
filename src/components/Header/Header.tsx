import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useStyles } from "./styles";
import { Link } from "react-scroll";

import { styled } from "@mui/material/styles";
import { SECTION } from "variables";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useAppTheme } from "hooks/useAppTheme";
import { appConfig } from "appConfig";
import { motion } from "framer-motion";
import { Icons } from "components/Icons";

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
  const isMoreThanTablet960 = useMediaQuery(
    theme.breakpoints.up("desktopS_960")
  );
  const isMoreThanTablet768 = useMediaQuery(theme.breakpoints.up("tablet_768"));

  const handleSignUp = (): void => {
    window.location.href = appConfig.yclients;
  };

  return (
    <div className={classes.header}>
      <div className={classes.container}>
        <div className={classes.headerLogo}>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            style={{
              overflow: "visible",
              stroke: "#000000",
              strokeWidth: 1,
              strokeLinejoin: "round",
              strokeLinecap: "round",
            }}
          >
            <motion.path
              d="M12.026 14.116c-3.475 1.673-7.504 3.619-8.484 4.09-1.848.889-3.542-1.445-3.542-1.445l8.761-4.226 3.265 1.581zm7.93 6.884c-.686 0-1.393-.154-2.064-.479-1.943-.941-2.953-3.001-2.498-4.854.26-1.057-.296-1.201-1.145-1.612l-14.189-6.866s1.7-2.329 3.546-1.436c1.134.549 5.689 2.747 9.614 4.651l.985-.474c.85-.409 1.406-.552 1.149-1.609-.451-1.855.564-3.913 2.51-4.848.669-.321 1.373-.473 2.054-.473 2.311 0 4.045 1.696 4.045 3.801 0 1.582-.986 3.156-2.613 3.973-1.625.816-2.765.18-4.38.965l-.504.245.552.27c1.613.789 2.754.156 4.377.976 1.624.819 2.605 2.392 2.605 3.97 0 2.108-1.739 3.8-4.044 3.8zm-2.555-12.815c.489 1.022 1.876 1.378 3.092.793 1.217-.584 1.809-1.893 1.321-2.916-.489-1.022-1.876-1.379-3.093-.794s-1.808 1.894-1.32 2.917zm-3.643 3.625c0-.414-.335-.75-.75-.75-.414 0-.75.336-.75.75s.336.75.75.75.75-.336.75-.75zm6.777 3.213c-1.215-.588-2.604-.236-3.095.786-.491 1.022.098 2.332 1.313 2.919 1.215.588 2.603.235 3.094-.787.492-1.021-.097-2.33-1.312-2.918z"
              fill="#FFFFFF"
              animate={{
                opacity: [0, 0.3, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                pathLength: [0, 0.2, 0.5, 0.7, 1, 1, 1, 0.7, 0.5, 0.2, 0],
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
                repeat: Infinity,
                repeatDelay: 1.5,
              }}
            />
          </motion.svg>
          <Typography variant="play_bold" className={classes.headerLogoText}>
            JOHN Barber
          </Typography>
        </div>

        {isMoreThanTablet960 && (
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

        <div className={classes.actions}>
          <a
            href={`tel:+${appConfig.phoneNumber}`}
            className={classes.phoneLink}
          >
            <Icons.Phone sx={{ color: theme.customColor.green_pine }} />
            {isMoreThanTablet768 && (
              <Typography variant="exo2_regular">
                {appConfig.phoneLabel}
              </Typography>
            )}
          </a>

          <CustomButton
            variant="contained"
            sx={{ fontSize: "1rem" }}
            onClick={handleSignUp}
          >
            Записаться онлайн
          </CustomButton>
        </div>
      </div>
    </div>
  );
};
