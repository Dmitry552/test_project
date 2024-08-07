import React, {FC} from "react";
import {TService} from "../types/types";
import '../styles/serviceItem.scss';

import cross from '../images/icons/cross.svg';

type TProps = {
    service: TService,
    deleteItem: (id: number) => void
}

const ServiceItem: FC<TProps> = ({service, deleteItem}) => {

    const handlerDelete = () => {
        deleteItem(service.id);
    }

    return (
        <div className="service">
            <div className="top">
                <img src={service.icon} alt="icon"/>
                <h3>{service.title}</h3>
                <div className="cross" onClick={() => deleteItem(service.id)}>
                    <img className="cross__icon" src={cross} alt="icon"/>
                </div>
            </div>
            <div>
                <p>{service.description}</p>
            </div>
        </div>
    );
}

export default ServiceItem;
