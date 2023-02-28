import { FC } from "react";
import { useNavigate } from "react-router-dom";
import ConstantsString from "../../models/ConstantsString";
import Pages from "../../models/Pages";
import Button from "../button/Button";
import classes from "./header.module.scss";

const Header: FC = () => {
  const navigate = useNavigate();

  const rulesLinkHandler = () => {
    window.open(ConstantsString.RULES_URL, "_blank");
  };

  const exitLinkHandler = () => {
    navigate(Pages.main);
  };
  return (
    <header className={classes.header}>
      <Button
        title="Rules"
        classNames={[classes["header-button"]]}
        onClickHandler={rulesLinkHandler}
      />
      <Button
        title="Exit"
        classNames={[classes["header-button"]]}
        onClickHandler={exitLinkHandler}
      />
    </header>
  );
};

export default Header;
