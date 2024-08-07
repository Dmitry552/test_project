import React from "react";

const addLayout = (Component) => {
    const Layout: React.FC<any> = Component.layout;
    delete Component.layout;

    return (props: any) => {
        return (
            <Layout {...props}>
                <Component/>
            </Layout>
        );
    }
}

export default addLayout;
