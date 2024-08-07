import React, {FC} from "react";
import vector from '../images/vector.svg';
import image1 from '../images/image1.png';
import '../styles/benefitsList.scss';

const BenefitsList: FC = () => {
    return(
        <section className="wrapper">
            <div className="benefits">
                <div className="benefit benefit__text">
                    <div className="text">
                        <h3>Mit uns erreicht Ihre Anzeige jeden Arbeitssuchenden!</h3>
                        <p>
                            Maximieren Sie die Sichtbarkeit Ihrer Stellenanzeige und finden Sie die besten Talente für Ihr Unternehmen mit mehr als 500 Partner Stellenbörsen, Regionalportalen und Fachportalen.
                        </p>
                    </div>
                    <div className="icon">
                        <img src={image1} alt="image"/>
                    </div>
                </div>
                <div className="benefit benefit__image">
                    <div className="icon">
                        <img src={image1} alt="image"/>
                    </div>
                    <div className="text">
                        <h3>Jedes Unternehmen hat einen Mitarbeiter</h3>
                        <p>
                            Wir haben den Prozess der Stellenveröffentlichung für Sie verbessert. Mit unserem neuen, benutzerfreundlichen Dashboard können Sie den gesamten Rekrutierungsprozess einfach und effizient steuern. In unserer Datenbank sind 95% der Lebensläufe vollständig ausgefüllt, was Ihnen umfassende und präzise Informationen über die Qualifikationen der Bewerber liefert.
                        </p>
                    </div>
                </div>
                <div className="benefit benefit__text">
                    <div className="text">
                        <h3>Mehr Erfolg durch gezielte Jobschaltung!</h3>
                        <p>
                            Studien zeigen das 87% der Unternehmen ihre Mitarbeiter finden, indem sie ihre offenen Stellen ausschreiben. Vertrauen auch Sie auf unsere effiziente Rekrutierungslösung und besetzen Sie Ihre Positionen schnell und zielgerichtet.
                        </p>
                    </div>
                    <div className="icon">
                        <img src={image1} alt="image"/>
                    </div>
                </div>
                <div className="benefit benefit__image">
                    <div className="icon">
                        <img src={image1} alt="image"/>
                    </div>
                    <div className="text">
                        <h3>Ausgezeichnete Kundenservice</h3>
                        <ul>
                            <li>
                                100% Myself-Service  veröffentlichen Sie sofort Ihre Stellenanzeigen online.
                            </li>
                            <li>
                                Entscheiden Sie sich für  Premium-Stellenanzeige  und profitieren Sie von einem ansprechenden Employer-Profil-Design
                            </li>
                            <li>
                                Ein fester Ansprechpartner kümmert sich persönlich um all Ihre Anliegen.
                            </li>
                        </ul>
                        <p>
                            Nutzen Sie unsere Kostenlose Kundenservice. <br/>
                            Mo - Fr. 10.00 bis 22.00 Uhr
                        </p>
                    </div>
                </div>
                <div className="vector">
                    <img src={vector} alt="vector"/>
                </div>
                <div className="tag tag1">
                    <div className="tag__body">
                        <p>
                            500
                        </p>
                    </div>
                </div>
                <div className="tag tag2">
                    <div className="tag__body">
                        <p>
                            95%
                        </p>
                    </div>
                </div>
                <div className="tag tag3">
                    <div className="tag__body">
                        <p>
                            87%
                        </p>
                    </div>
                </div>
                <div className="tag tag4">
                    <div className="tag__body">
                        <p>
                            100%
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BenefitsList;
