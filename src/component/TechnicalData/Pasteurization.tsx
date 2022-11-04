import {PasteurizationType} from "../../bll/types";
import s from '../../styles/Information.module.css'

type PasteurizationPropsType = {
    pasteurization: PasteurizationType
}

const Pasteurization: React.FC<PasteurizationPropsType> = ({pasteurization}) => {

    const {pasteurizationTemperature, pasteurizationTime, coolingTemperature, milkPH} = pasteurization

    return (
        <div className={s.container}>
            <div className={s.title}>Термическая обработка</div>
            <div className={s.tableElement}>
                <div>Пастеризация:</div>
                <div>{pasteurizationTemperature} &deg;C / {pasteurizationTime} сек</div>
            </div>
            <div className={s.tableElement}>
                <div>Охлаждение:</div>
                <div>{coolingTemperature.min} - {coolingTemperature.max} &deg;C</div>
            </div>
            <div className={s.altTableElement}>
                <div>pH пастеризованного</div>
            </div>
            <div className={s.tableElement}>
                <div>молока: </div>
                <div>{milkPH.min} - {milkPH.max}</div>
            </div>

        </div>
    );
};

export default Pasteurization;