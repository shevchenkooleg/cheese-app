import React, {useState} from 'react';
import s from "../../styles/Constructor.module.css";
import IntegerStep from "../uneversal/IntegerStep";
import DoubleSlider from "../uneversal/DoubleSlider";
import ApplyCancelBtnBlock from "../uneversal/ApplyCancelBtnBlock";
import {PATH} from "../../utils/appPath";

const PasteurizationForm = () => {

    const [pasteurizationTemperature, setPasteurizationTemperature] = useState(72)
    const [pasteurizationTime, setPasteurizationTime] = useState(15)
    const [coolingTemperature, setCoolingTemperature] = useState([36,37] as [number, number])
    const [milkPH, setMilkPH] = useState([6.4,6.5] as [number, number])

    const onSubmitHandler = () => {
        console.log(pasteurizationTemperature, pasteurizationTime, coolingTemperature, milkPH)
    }


    return (
        <div>
            <div className={s.main}>
                <IntegerStep title={'Температура термической обработки'} minRange={0} maxRange={100} step={1}
                             postfix={'deg'} value={pasteurizationTemperature} callback={setPasteurizationTemperature}
                />
                <IntegerStep title={'Время термической обработки'} minRange={1} maxRange={60} step={1} postfix={"sec"}
                             value={pasteurizationTime} callback={setPasteurizationTime}
                />
                <DoubleSlider title={'Температура охлаждения'} minRange={20} maxRange={40} step={1}
                              value={coolingTemperature} callback={setCoolingTemperature}
                />
                <DoubleSlider title={'pH обработанного молока'} minRange={6} maxRange={7} step={0.1} value={milkPH}
                              callback={setMilkPH}
                />


            </div>
            <div className={s.btnBlock}>
                <ApplyCancelBtnBlock btnData={[
                    {title:'Назад', linkPath: PATH.LIBRARY.CHEESES.CONSTRUCTOR.MAIN, callback:()=>{}},
                    {title:'Далее',linkPath:PATH.LIBRARY.CHEESES.CONSTRUCTOR.RIPENING, callback:()=>{onSubmitHandler()}}]}/>
            </div>

        </div>
    );
};

export default PasteurizationForm;