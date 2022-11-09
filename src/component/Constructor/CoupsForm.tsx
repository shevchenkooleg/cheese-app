import React, {useState} from 'react';
import s from "../../styles/Constructor.module.css";
import MyCheckBox from "../uneversal/MyCheckBox";
import IntegerStep from "../uneversal/IntegerStep";
import ApplyCancelBtnBlock from "../uneversal/ApplyCancelBtnBlock";
import {PATH} from "../../utils/appPath";
import DoubleSlider from "../uneversal/DoubleSlider";
import SingleSelect from "../uneversal/SingleSelect";

const CoupsForm = () => {


    const [firstCoupTime, setFirstCoupTime] = useState(1)
    const [totalCoupsCount, setTotalCoupsCount] = useState(6)
    const [restCoupsTimeInterval, setRestCoupsTimeInterval] = useState([30,40] as [number, number])
    const [totalDrainageTime, setTotalDrainageTime] = useState([3,5] as [number, number])
    const [milkPH, setMilkPH] = useState([5.2,5.3] as [number, number])
    const [finalAction, setFinalAction] = useState(false)
    const [finalActionType, setFinalActionType] = useState('')

    const onSubmitHandler = () => {
        finalAction
            ? console.log(firstCoupTime, totalCoupsCount, restCoupsTimeInterval, totalDrainageTime, milkPH, finalAction, finalActionType)
            : console.log(firstCoupTime, totalCoupsCount, restCoupsTimeInterval, totalDrainageTime, milkPH, finalAction)

    }

    return (
        <div>
            <div className={s.main}>
                <IntegerStep title={'Время первого переворота'} minRange={1} maxRange={120} postfix={'min'}
                             value={firstCoupTime} callback={setFirstCoupTime}
                />
                <IntegerStep title={'Общее количество переворотов'} minRange={1} maxRange={8} value={totalCoupsCount}
                             callback={setTotalCoupsCount}
                />
                <DoubleSlider title={'Интервал между следующими переворотами, минут'} minRange={5} maxRange={60}
                              step={1} value={restCoupsTimeInterval} callback={setRestCoupsTimeInterval}
                />
                <DoubleSlider title={'Время дренажирования, часов'} minRange={1} maxRange={24} step={0.5}
                              value={totalDrainageTime} callback={setTotalDrainageTime}
                />
                <DoubleSlider title={'pH зерна целевой'} minRange={4} maxRange={6} step={0.1} value={milkPH}
                              callback={setMilkPH}
                />
                <MyCheckBox title={'Финальное действие'} callback={setFinalAction} isChecked={finalAction} style={{}} />
                {finalAction && <SingleSelect valuePool={['подготовка к росту дрожжей','остановка кислотности']}
                                              title={''} placeholder={'выберете финальное действие'}
                                              value={finalActionType} callback={setFinalActionType}
                />}
            </div>
            <div className={s.btnBlock}>
                <ApplyCancelBtnBlock btnData={[
                    {title:'Назад', linkPath: PATH.LIBRARY.CHEESES.CONSTRUCTOR.LAYOUT, callback:()=>{}},
                    {title:'Далее',linkPath:PATH.LIBRARY.CHEESES.CONSTRUCTOR.SALTING, callback:()=>{onSubmitHandler()}}]}/>
            </div>
        </div>
    );
};

export default CoupsForm;