import React from "react";
import Aux from "../../hoc/Aux";
import style from "./QCards.module.css";
import Qcard from "./QCard/QCard";

const QCards = () => (
  <Aux>
    <div className={style.card_list}>
      <Qcard />
      <Qcard />
    </div>
  </Aux>
);
export default QCards;
