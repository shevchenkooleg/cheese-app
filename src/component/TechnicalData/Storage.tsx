import React from 'react';
import {StorageType} from "../../bll/types";
import s from "../../styles/Information.module.css";

type StoragePropsType = {
    storage: StorageType
}

const Storage:React.FC<StoragePropsType> = ({storage}) => {

    const {storageTemperature} = storage

    return (
        <div className={s.container}>
            <div className={s.title}>Хранение</div>
            <div className={s.tableElement}>
                <div>Температура хранения:</div>
                <div>{storageTemperature.min} - {storageTemperature.max} &deg;C</div>
            </div>
        </div>
    );
};

export default Storage;