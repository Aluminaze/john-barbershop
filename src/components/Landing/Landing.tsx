import { useStyles } from "./styles";
import { Intro } from "components/Intro";
import { useAppTheme } from "hooks/useAppTheme";
import { PriceList } from "components/PriceList";
import { About } from "components/About";
import { Footer } from "components/Footer";
import { SECTION } from "variables";

export const Landing = () => {
  const classes = useStyles();
  const theme = useAppTheme();

  return (
    <>
      <main className={classes.main}>
        <article className={classes.acticle}>
          <section
            id={SECTION.INTRO}
            className={classes.section}
            style={{ backgroundColor: theme.customColor.green_pine }}
          >
            <div className={classes.container}>
              <div className={classes.block}>
                <Intro />
              </div>
            </div>
          </section>
          <section id={SECTION.PRICE_LIST} className={classes.section}>
            <div className={classes.container}>
              <div className={classes.block}>
                <PriceList />
              </div>
            </div>
          </section>
          <section id={SECTION.ABOUT} className={classes.section}>
            <div className={classes.container}>
              <div className={classes.block}>
                <About />
              </div>
            </div>
          </section>
        </article>
      </main>
      <footer
        id={SECTION.FOOTER}
        className={classes.footer}
        style={{ backgroundColor: theme.customColor.green_pine }}
      >
        <div className={classes.container}>
          <Footer />
        </div>
      </footer>
    </>
  );
};
