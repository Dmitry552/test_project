import React, {FC} from "react";
import '../../styles/modal.scss';

import cross from "../../images/icons/cross.svg";

type TProps = {
    show: boolean,
    setShowModal: (value: boolean) => void
    title?: string
}

const Modal: FC<TProps> = ({show, setShowModal, children, title}) => {
    return(
        <div
            className={show ? "modal_wrapper active" : "modal_wrapper"}
            onClick={() => setShowModal(false)}
        >
            <div className="modal_content" onClick={(e) => e.stopPropagation()}>
                <div className="top">
                    <h3>
                        {title}
                    </h3>
                    <div className="top__cross" onClick={() => setShowModal(false)}>
                        <img className="top__cross__icon" src={cross} alt="icon"/>
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
}

export default Modal;
