import { useStyles } from "./styles";
import { Intro } from "components/Intro";
import { useAppTheme } from "hooks/useAppTheme";
import { PriceList } from "components/PriceList";
import { About } from "components/About";
import { Footer } from "components/Footer";

export const Landing = () => {
  const classes = useStyles();
  const theme = useAppTheme();

  return (
    <>
      <main className={classes.main} style={{ marginTop: "70px" }}>
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
                <PriceList />
              </div>
            </div>
          </section>
          <section className={classes.section}>
            <div className={classes.container}>
              <div className={classes.block}>
                <About />
              </div>
            </div>
          </section>
        </article>
      </main>
      <footer
        className={classes.main}
        style={{ backgroundColor: theme.customColor.green_pine }}
      >
        <div className={classes.container}>
          <Footer />
        </div>
      </footer>
    </>
  );
};
