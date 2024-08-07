import React, {FC} from 'react';
import '../styles/offerBlock.scss';

const OfferBlock: FC = () => {
    return(
        <section className="offer">
            <div className="offer__fachwissen">
                <div className="offer__fachwissen__title">
                    <h1>
                        Fachwissen trifft auf Qualität:
                    </h1>
                    <p>
                        Ihre Vorteile mit WORKBERRY
                    </p>
                </div>
                <div className="offer__fachwissen__text">
                    <p>
                        Mit täglich über 300 Neuanmeldungen sind wir die am schnellsten wachsende Jobbörse in Deutschland. Wir bringen Arbeitgeber und Arbeitssuchende schnell und effektiv zusammen – sowohl in Vollzeit, Teilzeit, befristet, als auch auf Stundenbasis über alle Branchen und Fachgebiete hinweg.
                    </p>
                </div>
            </div>
            <div className="offer__list">
                <div className="offer__list__text">
                    <h3>Hirring UA</h3>
                    <p>
                        Verlassen Sie sich auf eine der meistbesuchte Online - Plattform für Fachkräfte aus der Ukraine.
                    </p>
                </div>
                <div className="offer__list__line"><div className="line"></div></div>
                <div className="offer__list__text">
                    <h3>Maximale Reichweite</h3>
                    <p>
                        Profitieren Sie von unseren Partner-  Netzwerken und schalten Síe Ihre Stellenangebote in mehr als 500  Jobbörsen mit einem Klick.
                    </p>
                </div>
                <div className="offer__list__line"><div className="line"></div></div>
                <div className="offer__list__text">
                    <h3>Employer Branding </h3>
                    <p>
                        Unsere Unternehmens - Hub mit Individuell entwickelten Layouts und Stellenanzeigen Design steht Ihnen Kostenlos zur Verfügung.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default OfferBlock;
