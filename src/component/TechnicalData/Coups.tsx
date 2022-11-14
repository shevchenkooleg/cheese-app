import s from '../../styles/Information.module.css';
import React from "react";
import {CoupsType} from "../../bll/types";

type CoupsPropsType = {
    coups: CoupsType
}

const Coups:React.FC<CoupsPropsType> = ({coups}) => {

    const {first, restCount, restTime, totalTime, drainageType, milkPH, finallyTime, finalAction, finallyTemperature} = coups

    return (
        <div className={s.container}>
            <div className={s.title}>Переворот</div>
            <div className={s.tableElement}>
                <div>Первый переворот:</div>
                <div>{first} минут</div>
            </div>
            <div className={s.tableElement}>
                <div>Общее количество:</div>
                <div>{restCount}</div>
            </div>
            <div className={s.tableElement}>
                <div>Интервал:</div>
                <div>{restTime.min} - {restTime.max} минут</div>
            </div>
            <div className={s.tableElement}>
                <div>Время дренажирования:</div>
                <div className='text-right'>{totalTime.min} - {totalTime.max} минут</div>
            </div>
            <div className={s.tableElement}>
                <div>Тип прессования:</div>
                <div className='text-right'>{drainageType}</div>
            </div>
            <div className={s.tableElement}>
                <div>pH зерна после дренажирования:</div>
                <div>{milkPH.min} - {milkPH.max}</div>
            </div>
            {finallyTime && <div className={s.tableElement}>
                <div>Время с момента закладки заквасок:</div>
                <div className='text-right'>{finallyTime.min} - {finallyTime.max} часов</div>
            </div>}
            {finallyTemperature && <div className={s.tableElement}>
                <div>Остановка набора кислотности:</div>
                <div className='text-right'>{finalAction} {finallyTemperature.min} - {finallyTemperature.max} &deg;С</div>
            </div>}
        </div>
    );
};

export default Coups;