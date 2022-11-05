import s from '../../styles/Information.module.css'
import {CuttingType} from "../../bll/types";
import React from "react";

type CuttingPropsType = {
    cutting: CuttingType
}

const Cutting: React.FC<CuttingPropsType> = ({cutting}) => {

    const {size, type} = cutting
    const typeForRendering = type.join(', ')

    return (
        <div className={s.container}>
            <div className={s.title}>Нарезка</div>
            <div className={s.tableElement}>
                <div>Разрезка сгустка:</div>
                <div>{size.width} * {size.long} см</div>
            </div>
            <div className={s.tableElement}>
                <div>Тип нарезки:</div>
                <div className={s.cutting}>{typeForRendering}</div>
            </div>
        </div>
    );
};

export default Cutting;