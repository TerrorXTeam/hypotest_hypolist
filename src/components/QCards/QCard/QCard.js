import React from 'react';
import Aux from '../../../hoc/Aux'
import style from './Qcard.module.css'

const QCard = () => (
    <Aux>
        <div className={style.card}>
            <div className={style.center_logo}>
                <i className="fas fa-rss"></i></div>
            <div className={style.card_title}>
                <p className={style.survey_name}>Interested in python content?</p>
            </div>
        </div>
    </Aux>
)
export default QCard;