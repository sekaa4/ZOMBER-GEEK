import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import DevelopersPage from "../../models/DevelopersPage";
import Pages from "../../models/Pages";
import classes from "./developers.module.scss";
import DevelopersLinks from "../../models/DevelopersLinks";
import DevelopersNames from "../../models/DevelopersNames";
import RSSLogo from "../../assets/images/rs-school-js.webp";
import Gear from "../../assets/images/gear.png";

const Developers: FC = () => {
  const navigate = useNavigate();

  const backToMainHandler = () => {
    navigate(Pages.main);
  };

  return (
    <div className={classes.developersPage}>
      <header className={classes.header}>
        <Button
          title={DevelopersPage.BACK_TO_MAIN}
          onClickHandler={backToMainHandler}
        />
      </header>
      <main className={classes.main}>
        <img src={Gear} alt="gear img" className={classes.gear} />
        <h1 className={classes.title}>Developers:</h1>
        <ul className={classes.devList}>
          <li>
            <a href={DevelopersLinks.IMMELSTRONDEV} className={classes.devLink}>
              {DevelopersNames.IMMELSTRONDEV}
            </a>
          </li>
          <li>
            <a href={DevelopersLinks.SEKAA} className={classes.devLink}>
              {DevelopersNames.SEKAA}
            </a>
          </li>
          <li>
            <a href={DevelopersLinks.SERG_YANK} className={classes.devLink}>
              {DevelopersNames.SERG_YANK}
            </a>
          </li>
        </ul>
      </main>
      <footer className={classes.footer}>
        <a href="https://rs.school/js/" className={classes.logoLink}>
          <img src={RSSLogo} alt="rss logo" className={classes.logo} />
        </a>
      </footer>
    </div>
  );
};

export default Developers;
