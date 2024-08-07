import React, {FC} from 'react';
import '../../styles/DropDownMenu/burgerButton.scss';

type TProps = {
    show: boolean
    onClick: () => void
}
const BurgerButton: FC<TProps> = ({show, onClick}) => {
    return (
        <div>
            <input type="checkbox" id="burger-checkbox" className="burger-checkbox"/>
            <label className="burger" htmlFor="burger-checkbox" onClick={onClick}></label>
        </div>
    );
};

export default BurgerButton;
