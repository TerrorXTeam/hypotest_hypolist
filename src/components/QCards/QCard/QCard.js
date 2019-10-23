import React from 'react';
import Aux from '../../../hoc/Aux'
import style from './Qcard.module.css'


const QCard = (props) => (
    <Aux>
        <div className={style.card}>
            <div className={style.center_logo}>
            
                {props.icon}
                </div>
            <div className={style.card_title}>
                <p className={style.survey_name} > {props.surveyHeader}</p>
            </div>
        </div>
    </Aux>
)
export default QCard;