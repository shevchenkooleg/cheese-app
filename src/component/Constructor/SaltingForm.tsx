import React, {useState} from 'react';
import s from "../../styles/Constructor.module.css";
import ApplyCancelBtnBlock from "../uneversal/ApplyCancelBtnBlock";
import {PATH} from "../../utils/appPath";
import SingleSelect from "../uneversal/SingleSelect";
import IntegerStep from "../uneversal/IntegerStep";
import DoubleSlider from "../uneversal/DoubleSlider";

const SaltingForm = () => {

    const [saltingType, setSaltingType] = useState('')
    const [concentration, setConcentration] = useState(20)
    const [brinePH, setBrinePH] = useState([5.2,5.3] as [number, number])
    const [totalSaltWeight, setTotalSaltWeight] = useState([20,22] as [number, number])
    const [totalSaltTime, setTotalTime] = useState(1)

    const onSubmitHandler = () => {
        saltingType === 'Рассол'
            ? console.log(saltingType, concentration, brinePH, totalSaltTime)
            : console.log(saltingType, totalSaltWeight, totalSaltTime)

    }



    return (
        <div>
            <div className={s.main}>
                <SingleSelect title={'Тип посолки'} valuePool={['Рассол','По-сухому']} placeholder={'выберите тип посолки'}
                              callback={setSaltingType} value={saltingType}/>
                {saltingType === 'Рассол' && <IntegerStep title={'Концентрация раствора, %'} minRange={1} maxRange={50}
                                                          postfix={'%'} value={concentration} callback={setConcentration}
                />}
                {saltingType === 'Рассол' && <DoubleSlider title={'ph раствора'} minRange={5} maxRange={6} step={0.1}
                                                           value={brinePH} callback={setBrinePH}/>}
                {saltingType === 'По-сухому' && <DoubleSlider title={'Количество соли на 1 кг веса сыра, г'}
                                                              minRange={1} maxRange={50} step={1} value={totalSaltWeight}
                                                              callback={setTotalSaltWeight}
                />}
                {saltingType && <IntegerStep title={'Время посолки'} minRange={1} maxRange={24} postfix={'hour'}
                                             value={totalSaltTime} callback={setTotalTime}
                />}
            </div>
            <div className={s.btnBlock}>
                <ApplyCancelBtnBlock btnData={[
                    {title:'Назад', linkPath: PATH.LIBRARY.CHEESES.CONSTRUCTOR.COUPS, callback:()=>{}},
                    {title:'Далее',linkPath:PATH.LIBRARY.CHEESES.CONSTRUCTOR.DRYING, callback:()=>{onSubmitHandler()}}]}/>
            </div>
        </div>
    );
};

export default SaltingForm;