import Typography from "@mui/material/Typography";
import { useStyles } from "./styles";
import { motion } from "framer-motion";
import { forwardRef, LegacyRef } from "react";

import haircutImg from "./img/haircut.png";
import shavingImg from "./img/shaving.png";
import careImg from "./img/care.png";

export const Services = forwardRef((props, ref: LegacyRef<any>) => {
  const classes = useStyles();

  return (
    <div className={classes.block} ref={ref}>
      <Typography variant="exo2_bold" sx={{ fontSize: "1.4rem" }}>
        Наши услуги
      </Typography>
      <div className={classes.items}>
        <div className={classes.item}>
          <div>
            <img className={classes.img} src={haircutImg} alt="haircut-img" />
          </div>
          <Typography variant="exo2_regular" className={classes.itemText}>
            Стрижка
          </Typography>
        </div>
        <div className={classes.item}>
          <div>
            <img className={classes.img} src={shavingImg} alt="shaving-img" />
          </div>
          <Typography variant="exo2_regular" className={classes.itemText}>
            Бритье
          </Typography>
        </div>
        <div className={classes.item}>
          <div>
            <img className={classes.img} src={careImg} alt="care-img" />
          </div>
          <Typography variant="exo2_regular" className={classes.itemText}>
            Уход
          </Typography>
        </div>
      </div>
    </div>
  );
});

export const MServices = motion(Services);
