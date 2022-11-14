import s from '../../styles/Information.module.css';
import {LayoutType} from "../../bll/types";
import React from "react";

type LayoutPropsType = {
    layout: LayoutType
}

const Layout: React.FC<LayoutPropsType> = ({layout}) => {

    const {type = ['some type'], milkPH} = layout
    const typeLayoutForRendering = type.join(', ')

    return (
        <div className={s.container}>
            <div className={s.title}>Выкладка</div>
            <div className={s.tableElement}>
                <div>способ выкладки:</div>
                <div className='text-right'>{typeLayoutForRendering}</div>
            </div>
            <div className={s.tableElement}>
                <div>pH зерна после выкладки:</div>
                <div>{milkPH.min} - {milkPH.max}</div>
            </div>
        </div>
    );
};

export default Layout;