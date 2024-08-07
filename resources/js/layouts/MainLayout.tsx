import * as React from 'react';
import Header from "../components/common/Header";

type TProps = {
    children: React.ReactNode
};

const MainLayout: React.FC<TProps> = ({children}) => {
    return (
        <>
            <Header/>
            {children}
        </>
    );
};

export default MainLayout;
