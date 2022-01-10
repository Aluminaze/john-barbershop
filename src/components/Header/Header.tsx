import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Icons } from "components/Icons";
import { useStyles } from "./styles";

import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)(({ theme }) => ({
  color: theme.customColor.text.inverted.lightMode,
  backgroundColor: theme.customColor.green_pine,

  "&:hover": {
    backgroundColor: theme.customColor.green_pine,
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.container}>
        <div className={classes.headerLogo}>
          <Icons.Barber sx={{ fontSize: 40 }} />
          <Typography variant="play_bold" sx={{ fontSize: "1.7rem" }}>
            JOHN Barbershop
          </Typography>
        </div>

        <CustomButton variant="contained" sx={{ fontSize: "1rem" }}>
          Записаться онлайн
        </CustomButton>
      </div>
    </div>
  );
};
