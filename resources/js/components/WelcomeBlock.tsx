import React, {FC} from "react";
import '../styles/welcomeBlock.scss';

import background from '../images/backgroundWelcome.png';
import icon from '../images/icons/arrow_right.svg';

const WelcomeBlock: FC = () => {
    return (
        <section className="welcome">
            <div
                className="welcome__image"
                style={{backgroundImage: `url(${background})`}}
            >
            </div>
            <div className="welcome__text_block">
                <div className="text">
                    <h1>Hilfe & Schullungen</h1>
                    <p>Hier finden Sie Antworten auf alle Ihre Fragen über Nutzung von WORKBERRY Jobbörse.</p>
                    <div>
                        <button className="text__btn">
                            Stellenanzeige  auswählen
                            <img src={icon} alt="icon"/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WelcomeBlock;
