import React, {FC, useEffect} from "react";
import ServiceItem from "./ServiceItem";
import '../styles/serviceList.scss';

import {useDispatch, useSelector} from "react-redux";
import {getServices, deleteService} from "../store/reducers/serviceReducer";


const ServiceList: FC = () => {
    const {services} = useSelector(({services}) => services);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getServices());
    }, []);

    const handlerDelete = (id: number) => {
        dispatch(deleteService(id))
    }

    return (
        <div className="service_list">
            {
                services.map((service) => {
                    return <ServiceItem
                        key={service.id}
                        service={service}
                        deleteItem={handlerDelete}
                    />
                })
            }
        </div>
    );
}

export default ServiceList;
