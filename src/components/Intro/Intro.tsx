import Typography from "@mui/material/Typography";
import manImg from "./img/man.png";
import { useStyles } from "./styles";

export const Intro = () => {
  const classes = useStyles();

  return (
    <div className={classes.block}>
      <div className={classes.left}>
        <img className={classes.img} src={manImg} alt="man-img" />
      </div>
      <div className={classes.right}>
        <Typography variant="play_bold" sx={{ fontSize: "1.7rem" }}>
          Добро пожаловать
        </Typography>
      </div>
    </div>
  );
};
