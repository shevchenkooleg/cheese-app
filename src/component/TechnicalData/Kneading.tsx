import s from '../../styles/Information.module.css'
import React from "react";
import {KneadingType} from "../../bll/types";

type KneadingPropsType = {
    kneading: KneadingType
}

const Kneading: React.FC<KneadingPropsType> = ({kneading}) => {

    const {time} = kneading

    return (
        <div className={s.container}>
            <div className={s.title}>Вымешивание</div>
            <div className={s.tableElement}>
                <div>Время вымешивания:</div>
                <div>{time} минут</div>
            </div>
        </div>
    );
};

export default Kneading;