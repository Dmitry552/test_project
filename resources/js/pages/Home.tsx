import React from "react";
import MainLayout from "../layouts/MainLayout";
import addLayout from "../hofs/addLayout";
import WelcomeBlock from "../components/WelcomeBlock";
import Services from "../components/Services";
import OfferBlock from "../components/OfferBlock";
import BenefitsList from "../components/BenefitsList";
import SliderBlock from "../components/SliderBlock";
import '../styles/home.scss';

import {useSelector} from "react-redux";

const Home = () => {

    return (
        <div className="home">
            <WelcomeBlock/>
            <Services/>
            <OfferBlock/>
            <BenefitsList/>
            <SliderBlock/>
        </div>
    );
}

Home.layout = MainLayout;

export default addLayout(Home);
