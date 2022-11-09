import React, {CSSProperties, useState} from 'react';
import s from "../../styles/Constructor.module.css";
import IntegerStep from "../uneversal/IntegerStep";
import ApplyCancelBtnBlock from "../uneversal/ApplyCancelBtnBlock";
import {PATH} from "../../utils/appPath";
import SingleSelect from '../uneversal/SingleSelect';
import MyCheckBox from "../uneversal/MyCheckBox";
import DoubleSlider from "../uneversal/DoubleSlider";

const CuttingForm = () => {


    const [cuttingType, setCuttingType] = useState('')
    const [kneadingTime, setKneadingTime] = useState(15)
    const [secondHeating, setSecondHeating] = useState(false)
    const [secondHeatingTemperature, setSecondHeatingTemperature] = useState([38.5,39.5] as [number,number])
    const [secondHeatingTime, setSecondHeatingTime] = useState([10,15] as [number,number])

    const onSubmitHandler = () => {
        secondHeating
            ? console.log(cuttingType, kneadingTime, secondHeating, secondHeatingTemperature, secondHeatingTime)
            : console.log(cuttingType, kneadingTime, secondHeating)

    }


    return (
        <div>
            <div className={s.main}>
                <SingleSelect title={'Разрезка сгустка'} valuePool={['Горох','Фундук','Кокос']}
                              placeholder={'Выберите размер разрезки сгустка'} value={cuttingType} callback={setCuttingType}
                />
                <IntegerStep title={'Время вымешивания'} minRange={0} maxRange={40} postfix={'min'} value={kneadingTime}
                             callback={setKneadingTime}
                />
                <MyCheckBox title={'Второе нагревание'} callback={setSecondHeating} isChecked={secondHeating}
                            style={{'fontSize': '16px','marginTop': '20px'} as CSSProperties}
                />
                {secondHeating && <DoubleSlider title={'Температура второго нагревания'} minRange={35} maxRange={45}
                                                step={0.1} value={secondHeatingTemperature}
                                                callback={setSecondHeatingTemperature}
                />}
                {secondHeating && <DoubleSlider title={'Время второго нагревания'} minRange={5} maxRange={30} step={1}
                                                value={secondHeatingTime} callback={setSecondHeatingTime}/>}


            </div>
            <div className={s.btnBlock}>
                <ApplyCancelBtnBlock btnData={[
                    {title:'Назад', linkPath: PATH.LIBRARY.CHEESES.CONSTRUCTOR.RIPENING, callback:()=>{}},
                    {title:'Далее',linkPath:PATH.LIBRARY.CHEESES.CONSTRUCTOR.SPICES, callback:()=>{onSubmitHandler()}}]}/>
            </div>
        </div>
    );
};

export default CuttingForm;