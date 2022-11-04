import {MainInformationType} from "../../bll/types";
import s from '../../styles/Information.module.css'

type MainInformationPropsType = {
    mainInformation: MainInformationType
}

const MainInformation: React.FC<MainInformationPropsType> = ({mainInformation}) => {

    const {initialData} = mainInformation
    const {milkType, milkPH, protein, fat} = initialData
    const milkForRendering = milkType.join(', ')

    return (
        <div className={s.container}>
            <div className={s.title}>Требование к молоку:</div>
            <div className={s.tableElement}>
                <div>Молоко:</div>
                <div>{milkForRendering}</div>
            </div>
            <div className={s.tableElement}>
                <div>pH холодного молока:</div>
                <div>{milkPH.min} - {milkPH.max}</div>
            </div>
            <div className={s.tableElement}>
                <div>Белок:</div>
                <div>{protein.min} - {protein.max}</div>
            </div>
            <div className={s.tableElement}>
                <div>Жир:</div>
                <div>{fat.min} - {fat.max}</div>
            </div>
        </div>
    );
};

export default MainInformation;