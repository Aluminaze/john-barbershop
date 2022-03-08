import Typography from "@mui/material/Typography";
import { Icons } from "components/Icons";
import { useStyles } from "./styles";

import { appConfig } from "appConfig";
import { motion } from "framer-motion";
import { forwardRef, LegacyRef } from "react";

export const Location = forwardRef((props, ref: LegacyRef<any>) => {
  const classes = useStyles();

  return (
    <div className={classes.block} ref={ref}>
      <Typography variant="exo2_bold" sx={{ fontSize: "1.4rem" }}>
        Мы находимся и работаем
      </Typography>

      <a href={appConfig["2gis"]} target="_blank" rel="noreferrer">
        <div className={classes.items}>
          <div className={classes.item}>
            <Icons.Location sx={{ fontSize: "30px" }} />
            <Typography variant="exo2_regular" className={classes.itemText}>
              г. Калининград, ул. Багратиона, 43-47
            </Typography>
          </div>
          <div className={classes.item}>
            <Icons.Calendar sx={{ fontSize: "30px" }} />
            <Typography variant="exo2_regular" className={classes.itemText}>
              7 дней в неделю
            </Typography>
          </div>
          <div className={classes.item}>
            <Icons.Time sx={{ fontSize: "30px" }} />
            <Typography variant="exo2_regular" className={classes.itemText}>
              10:00 - 21:00
            </Typography>
          </div>
        </div>
      </a>
    </div>
  );
});

export const MLocation = motion(Location);
