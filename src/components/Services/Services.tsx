import Typography from "@mui/material/Typography";
import { useStyles } from "./styles";
import { motion } from "framer-motion";
import { forwardRef, LegacyRef } from "react";

import haircutImg from "./img/haircut.png";
import shavingImg from "./img/shaving.png";
import careImg from "./img/care.png";
import Tooltip from "@mui/material/Tooltip";
import { appConfig } from "appConfig";

interface IServiceItem {
  name: string;
  description: string;
  img: any;
  imgAlt: string;
}

const services: IServiceItem[] = [
  {
    name: "Стрижка",
    description: "Записаться на стрижку онлайн",
    img: haircutImg,
    imgAlt: "haircut-img",
  },
  {
    name: "Бритье",
    description: "Записаться на бритье онлайн",
    img: shavingImg,
    imgAlt: "shaving-img",
  },
  {
    name: "Уход",
    description: "Записаться на коррекцию онлайн",
    img: careImg,
    imgAlt: "care-img",
  },
];

export const Services = forwardRef((props, ref: LegacyRef<any>) => {
  const classes = useStyles();

  const handleClick = (): void => {
    window.location.href = appConfig.yclients;
  };

  return (
    <div className={classes.block} ref={ref}>
      <Typography variant="exo2_bold" sx={{ fontSize: "1.4rem" }}>
        Наши услуги
      </Typography>
      <div className={classes.items}>
        {services.map((serviceItem) => (
          <Tooltip
            title={serviceItem.description}
            key={serviceItem.name}
            disableInteractive
            arrow
          >
            <div className={classes.item} onClick={handleClick}>
              <div>
                <img
                  className={classes.img}
                  src={serviceItem.img}
                  alt={serviceItem.imgAlt}
                />
              </div>
              <Typography variant="exo2_regular" className={classes.itemText}>
                {serviceItem.name}
              </Typography>
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
});

export const MServices = motion(Services);
