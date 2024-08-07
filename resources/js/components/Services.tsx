import React, {FC, useState} from 'react';
import ServiceList from "./ServiceList";
import Modal from "./common/Modal";
import AddServiceForm from "./AddServiceForm";
import {addService} from "../store/reducers/serviceReducer";
import {useDispatch} from "react-redux";
import '../styles/services.scss';

import background from '../images/backgroundService.png';
import icon from '../images/icons/plus.svg';
import {TAddServiceData} from "../types/types";


const Services: FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const dispatch = useDispatch();

    const handleOpenModal = () => {
        setShowModal(true);
    }

    const handleAddService = (values: TAddServiceData) => {
        dispatch(addService(values));
        setShowModal(false);
    }

    return (
        <section
            className="services_wrapper"
            style={{backgroundImage: `url(${background})`}}
        >
            <div className="services">
                <h1>
                    Wie können wir Ihnen <span>weiterhelfen?</span>
                </h1>
                <ServiceList/>
                <div className="services__add" onClick={handleOpenModal}>
                    <img src={icon} alt="plus"/>
                    <button>Hinzufügen</button>
                </div>
            </div>
            <Modal
                title="Hinzufügen"
                show={showModal}
                setShowModal={setShowModal}
            >
                <AddServiceForm
                    setShowModal={setShowModal}
                    addService={handleAddService}
                />
            </Modal>
        </section>
    );
}

export default Services;
