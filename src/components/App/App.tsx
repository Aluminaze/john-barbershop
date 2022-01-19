import { Header } from "components/Header";
import { useStyles } from "./styles";
import Typography from "@mui/material/Typography";
import { Intro } from "components/Intro";
import { useAppTheme } from "hooks/useAppTheme";

export function App() {
  const classes = useStyles();
  const theme = useAppTheme();

  return (
    <div className={classes.app}>
      <Header />
      <main className={classes.main}>
        <article className={classes.acticle}>
          <section
            className={classes.section}
            style={{ backgroundColor: theme.customColor.green_pine }}
          >
            <div className={classes.container}>
              <div className={classes.block}>
                <Intro />
              </div>
            </div>
          </section>
          <section className={classes.section}>
            <div className={classes.container}>
              <div className={classes.block}>
                <Typography variant="play_bold" sx={{ fontSize: "1.7rem" }}>
                  BLOCK 2
                </Typography>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
