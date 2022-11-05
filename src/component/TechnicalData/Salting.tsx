import s from '../../styles/Information.module.css';
import {SaltingType} from "../../bll/types";
import React from "react";

type SaltingPropsType = {
    salting: SaltingType
}

const Salting:React.FC<SaltingPropsType> = ({salting}) => {

    const {dry, wet} = salting

    return (
        <div className={s.container}>
            <div className={s.title}>Посолка</div>
            <div className='flex justify-center'>По сухому</div>
            <div className={s.tableElement}>
                <div>Расчетный вес:</div>
                <div>{dry.totalWeight.min} - {dry.totalWeight.max} гр на 1 кг</div>
            </div>
            <div className={s.tableElement}>
                <div>Время посолки:</div>
                <div>{dry.saltingTime} ч</div>
            </div>
            <div className='flex justify-center'>Рассолом</div>
            <div className={s.tableElement}>
                <div>Концентрация раствора:</div>
                <div>{wet.concentration} %</div>
            </div>
            <div className={s.tableElement}>
                <div>PH раствора:</div>
                <div>{wet.brinePH.min} - {wet.brinePH.max}</div>
            </div>
            <div className={s.tableElement}>
                <div>Время посолки:</div>
                <div>{wet.saltingTime} ч</div>
            </div>


        </div>
    );
};

export default Salting;