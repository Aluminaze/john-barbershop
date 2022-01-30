import { Header } from "components/Header";
import { useStyles } from "./styles";
import { Routes, Route } from "react-router-dom";
import { Landing } from "components/Landing";

export function App() {
  const classes = useStyles();

  return (
    <Routes>
      <Route
        path="*"
        element={
          <div className={classes.app}>
            <Header />
            <Landing />
          </div>
        }
      />
    </Routes>
  );
}
