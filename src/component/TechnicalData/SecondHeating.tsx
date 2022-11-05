import s from '../../styles/Information.module.css'
import {DataRangeType, SecondHeatingType} from "../../bll/types";
import React from "react";

type SecondHeatingPropsType = {
    secondHeating: SecondHeatingType
}

const SecondHeating: React.FC<SecondHeatingPropsType> = ({secondHeating}) => {

    const {heatingTemperature, heatingTime} = secondHeating

    return (
        <div className={s.container}>
            <div className={s.title}>Второе нагревание</div>
            <div className={s.tableElement}>
                <div>Температура:</div>
                <div>{heatingTemperature.min} - {heatingTemperature.max} &deg;C</div>
            </div>
            <div className={s.tableElement}>
                <div>Время нагревания:</div>
                <div>{heatingTime.min} - {heatingTime.max} минут</div>
            </div>
        </div>
    );
};

export default SecondHeating;