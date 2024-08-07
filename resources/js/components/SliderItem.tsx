import React, {FC} from "react";
import '../styles/sliderItem.scss';

import photo from '../images/photo.png';
import star from '../images/icons/Star.svg';

const SliderItem: FC = () => {
    return(
        <div className="slider_item_wrapepr">
            <div className="card">
                <div className="card__img">
                    <img src={photo} alt="photo"/>
                </div>
                <div className="card__text">
                    <div className="card__text__rating">
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                    </div>
                    <h3>
                        Effiziente Vermittlung von Talenten
                    </h3>
                    <p>
                        Unsere Zusammenarbeit mit Erotikstadt war außergewöhnlich effizient und erfolgreich. Die Plattform hat es uns ermöglicht, schnell und unkompliziert genau die Talente zu finden, die wir für unser Unternehmen gesucht haben. Besonders beeindruckt hat uns die intuitive Bedienung und die Qualität der Kandidatenprofile. Wir freuen uns auf eine fortgesetzte erfolgreiche Partnerschaft.
                    </p>
                    <div className="card__text__cookie">
                        <p className="name">Markus Becker</p>
                        <p className="position">Geschäftsführer, Nightlife Entertainment GmbH</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SliderItem;
