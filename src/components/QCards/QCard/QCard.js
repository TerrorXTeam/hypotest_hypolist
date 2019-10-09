import React from 'react';
import Aux from '../../../hoc/Aux'
import Qcard from './Qcard.css'

const QCard = () => (
    <Aux>
        <div className={Qcard.card}>
            <div className={Qcard.center_logo}>
                <i className="fas fa-rss"></i></div>
            <div className={Qcard.card_title}>
                <p className={Qcard.survey_name}>Interested in python content?</p>
            </div>
        </div>
    </Aux>
)
export default QCard;