import React, {FC, useEffect} from "react";
import {useFormik} from "formik";
import {useDropzone} from 'react-dropzone';
import * as Yup from 'yup';
import '../styles/addServiceForm.scss';

import iconFolder from '../images/icons/iconFolder.svg';
import iconDropZone from '../images/icons/iconDropZone.svg';
import iconAttention from '../images/icons/iconAttention.svg';
import iconClip from '../images/icons/iconClip.svg';

type TProps = {
    setShowModal: (value: boolean) => void
    addService: (values) => void
}

const AddServiceForm: FC<TProps> = ({setShowModal, addService}) => {

    const {getRootProps, getInputProps, open, isDragActive} = useDropzone({
        noClick: true,
        noKeyboard: true
    });

    const formik = useFormik({
        initialValues: {
            title: '',
            details: '',
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Required'),
            details: Yup.string().min(3,'Invalid details')
        }),
        onSubmit: (values, {resetForm}) => {
            handleAddService(values);
            resetForm()
        },
    });

    const handleAddService = (values) => {
        console.log();
        addService(values);
    }

    return(
        <div className="add_service">
            <div className="add_service_top">
                <div className="add_service_top__title">
                    <img src={iconFolder} alt="icon"/>
                    <h3>
                        Fügen Sie einen Block hinzu
                    </h3>
                </div>
                <div className="add_service_top__text">
                    <p>
                        Bitte geben Sie alle erforderlichen Informationen ein, um einen Block hinzuzufügen.
                    </p>
                </div>
            </div>
            <form className="add_service_form" onSubmit={formik.handleSubmit}>
                <div {...getRootProps({className: 'dropzone'})}>
                    <div className={!isDragActive ? "dropzone__block" : "dropzone__block active"}>
                        <input {...getInputProps()} />
                        <div className="dropzone__block__icon">
                            <img src={iconDropZone} alt="icon"/>
                        </div>
                        <div className="dropzone__block__title">
                            <div className="block_title">
                                <p>
                                    Das Icon sollte klar erkennbar sein. Vermeiden Sie komplexe Details und stellen Sie sicher, dass es gut sichtbar ist. Farben sollten ansprechend und professionell wirken, passend zur Marke oder Unternehmensidentität
                                </p>
                                <img src={iconAttention} alt="icon"/>
                            </div>
                            <div className="block_bottom">
                                <p>
                                    *png, *jpg, *jpeg, *svg
                                </p>
                                <img src={iconClip} alt="icon"/>
                            </div>
                        </div>
                    </div>
                    <button className="dropzone__btn" type="button" onClick={open}>
                        Icon hochladen
                        <img src={iconClip} alt="icon"/>
                    </button>
                </div>
                <div className={formik.errors.title ? "add_form_title error" : "add_form_title"}>
                    <label htmlFor="title">Title<span>*</span></label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        placeholder="BRUTIS GmbH"
                        onChange={formik.handleChange}
                        value={formik.values.title}
                    />
                    <span className="formik_error">{formik.errors.title}</span>
                </div>
                <div className={formik.errors.details ? "add_form_details error" : "add_form_details"}>
                    <label htmlFor="details">Details (Optional)</label>
                    <textarea
                        id="details"
                        name="details"
                        placeholder="BRUTIS GmbH"
                        onChange={formik.handleChange}
                        value={formik.values.details}
                    />
                    <span className="formik_error">{formik.errors.details}</span>
                </div>
                <div className="bottom">
                    <div className="button_block">
                        <button type="button" className="btn_clear" onClick={() => setShowModal(false)}>
                            Doch nicht
                        </button>
                        <button type="submit" className="btn_ok">
                            Speichern
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddServiceForm;
