import React from 'react';
import s from '../../styles/Information.module.css'
import {RipeningType} from "../../bll/types";

type RipeningPropsType = {
    ripening: RipeningType
}

const Ripening: React.FC<RipeningPropsType> = ({ripening}) => {

    const {leaven, enzyme} = ripening

    return (
        <div className={s.container}>
            <div className={s.title}>Заквасочные культуры</div>
            <div className={s.tableElement}>
                <div>Культуры:</div>
                <div>{leaven.title}</div>
            </div>
            <div className={s.tableElement}>
                <div>Дозировка:</div>
                <div>{leaven.value.min} - {leaven.value.max} литров</div>
            </div>
            <div className={s.altTableElement}>
                <div>Время созревания</div>
            </div>
            <div className={s.tableElement}>
                <div>смеси:</div>
                <div>{leaven.time.min} - {leaven.time.max} минут</div>
            </div>
            <div className={s.tableElement}>
                <div>Фермент:</div>
                <div className={s.enzyme}>{enzyme.title}</div>
            </div>
            <div className={s.tableElement}>
                <div>Дозировка:</div>
                <div>{enzyme.value.min} - {enzyme.value.max} литров</div>
            </div>
            <div className={s.tableElement}>
                <div>Время свертывания:</div>
                <div>{enzyme.clotting.time} минут</div>
            </div>
            <div className={s.tableElement}>
                <div>Температура свертывания:</div>
                <div>{enzyme.clotting.temperature} &deg;C</div>
            </div>
            <div className={s.tableElement}>
                <div>Коэффициент флокуляции:</div>
                <div>{enzyme.clotting.k}</div>
            </div>

        </div>
    );
};

export default Ripening;