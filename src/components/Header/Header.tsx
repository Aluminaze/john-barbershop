import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useStyles } from "./styles";
import scissorsImg from "./img/scissors.png";
import { Link } from "react-scroll";

import { styled } from "@mui/material/styles";
import { SECTION } from "variables";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useAppTheme } from "hooks/useAppTheme";

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
          <ul className={classes.nav}>
            <li className={classes.navLink}>
              <Link
                to={SECTION.INTRO}
                spy={true}
                smooth={true}
                duration={500}
                offset={-10}
              >
                <Typography variant="play_regular" sx={{ fontSize: "1.2rem" }}>
                  Главная
                </Typography>
              </Link>
            </li>
            <li className={classes.navLink}>
              <Link
                to={SECTION.PRICE_LIST}
                spy={true}
                smooth={true}
                duration={500}
                offset={10}
              >
                <Typography variant="play_regular" sx={{ fontSize: "1.2rem" }}>
                  Усулуги и цены
                </Typography>
              </Link>
            </li>
            <li className={classes.navLink}>
              <Link
                to={SECTION.ABOUT}
                spy={true}
                smooth={true}
                duration={500}
                offset={10}
              >
                <Typography variant="play_regular" sx={{ fontSize: "1.2rem" }}>
                  О нас
                </Typography>
              </Link>
            </li>
          </ul>
        )}

        <CustomButton variant="contained" sx={{ fontSize: "1rem" }}>
          Записаться онлайн
        </CustomButton>
      </div>
    </div>
  );
};
