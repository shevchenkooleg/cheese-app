import s from '../../styles/Information.module.css';
import {DataRangeType, DryingType} from "../../bll/types";
import React from "react";

type DryingPropsType = {
    drying: DryingType
}

const Drying:React.FC<DryingPropsType> = ({drying}) => {
    const {dryingTime, dryingTemperature, dryingHumidity} = drying

    return (
        <div className={s.container}>
            <div className={s.title}>Сушка</div>
            <div className={s.tableElement}>
                <div>Время обсушки:</div>
                <div>{dryingTime.min} - {dryingTime.max} часов</div>
            </div>
            <div className={s.tableElement}>
                <div>Температура:</div>
                <div>{dryingTemperature.min} - {dryingTemperature.max} &deg;C</div>
            </div>
            <div className={s.tableElement}>
                <div>Влажность:</div>
                <div>{dryingHumidity.min} - {dryingHumidity.max} %</div>
            </div>
        </div>
    );
};

export default Drying;