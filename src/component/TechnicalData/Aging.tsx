import s from '../../styles/Information.module.css';
import {AgingType} from "../../bll/types";
import React from "react";

type AgingPropsType = {
    aging: AgingType
}

const Aging:React.FC<AgingPropsType> = ({aging}) => {

    const {agingTime, agingTemperature, agingHumidity, care} = aging

    return (
        <div className={s.container}>
            <div className={s.title}>Созревание</div>
            <div className={s.tableElement}>
                <div>Время созревания:</div>
                <div>{agingTime.min} - {agingTime.max} дней</div>
            </div>
            <div className={s.tableElement}>
                <div>Температура:</div>
                <div>{agingTemperature.min} - {agingTemperature.max} &deg;С</div>
            </div>
            <div className={s.tableElement}>
                <div>Влажность:</div>
                <div>{agingHumidity.min} - {agingHumidity.max} %</div>
            </div>
            <div className={s.tableElement}>
                <div>Уход:</div>
                <div className='text-right break-all'>{care}</div>
            </div>
        </div>
    );
};

export default Aging;