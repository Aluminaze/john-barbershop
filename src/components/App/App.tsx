import { Header } from "components/Header";
import { useStyles } from "./styles";
import Typography from "@mui/material/Typography";
import { Intro } from "components/Intro";

export function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Header />
      <main className={classes.main}>
        <div className={classes.container}>
          <div className={classes.block}>
            <Intro />
          </div>
          <div className={classes.block}>
            <Typography variant="play_bold" sx={{ fontSize: "1.7rem" }}>
              BLOCK 2
            </Typography>
          </div>
        </div>
      </main>
    </div>
  );
}
