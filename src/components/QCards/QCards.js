import React from "react";
import Aux from "../../hoc/Aux";
import style from "./QCards.module.css";
import Qcard from "./QCard/QCard";
import { FaLightbulb, FaBlog, FaTv } from 'react-icons/fa'
import { GoRss } from 'react-icons/go'





const QCards = () => (
  <Aux>
    <div className={style.card_list}>
      <Qcard icon={<FaLightbulb />} surveyHeader="Product launch, would love some helping info." />
      <Qcard icon={<GoRss />} surveyHeader="Feedback on my app?" />
      <Qcard icon={<FaTv />} surveyHeader="Validating our Idea." />
      <Qcard icon={<FaBlog />} surveyHeader="Would you be interesed in these type of articles?" />
      <Qcard icon={<GoRss />} surveyHeader="Product feedback." />
      <Qcard icon={<FaLightbulb />} surveyHeader="Improving our homepage" />
      <Qcard icon={<FaLightbulb />} surveyHeader="What you can do with our HoneyCompany?" />
      <Qcard icon={<FaTv />} surveyHeader="Does this minimal pivot landing page do the job?" />
    </div>
  </Aux>
);
export default QCards;
