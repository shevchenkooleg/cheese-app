import React, {useState} from 'react';
import s from "../../styles/Constructor.module.css";
import MyCheckBox from "../uneversal/MyCheckBox";
import IntegerStep from "../uneversal/IntegerStep";
import ApplyCancelBtnBlock from "../uneversal/ApplyCancelBtnBlock";
import {PATH} from "../../utils/appPath";
import DoubleSlider from "../uneversal/DoubleSlider";
import SingleSelect from "../uneversal/SingleSelect";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {setCoups} from "../../bll/slices/newRecipeSlice";
import {CoupsType} from "../../bll/types";

const CoupsForm = () => {

    const dispatch = useAppDispatch()
    const newRecipeData = useAppSelector(state=>state.newRecipe.coups)
    const [firstCoupTime, setFirstCoupTime] = useState(newRecipeData ? newRecipeData.first : 1)
    const [totalCoupsCount, setTotalCoupsCount] = useState(newRecipeData ? newRecipeData.restCount : 6)
    const [restCoupsTimeInterval, setRestCoupsTimeInterval] = useState(newRecipeData.restTime
        ? [newRecipeData.restTime.min, newRecipeData.restTime.max] as [number, number]
        : [30,40] as [number, number])
    const [totalDrainageTime, setTotalDrainageTime] = useState(newRecipeData.totalTime
        ? [newRecipeData.totalTime.min, newRecipeData.totalTime.min] as [number, number]
        : [3,5] as [number, number])
    const [drainageType, setDrainageType] = useState(newRecipeData ? newRecipeData.drainageType : '')
    const [milkPH, setMilkPH] = useState(newRecipeData.milkPH
        ? [newRecipeData.milkPH.min, newRecipeData.milkPH.max] as [number, number]
        : [5.2,5.3] as [number, number])
    const [finalAction, setFinalAction] = useState(!!newRecipeData.finalAction)
    const [finalActionType, setFinalActionType] = useState(newRecipeData.finalAction ? newRecipeData.finalAction : '')
    const [finalTime, setFinalTime] = useState(newRecipeData.finallyTime
        ? [newRecipeData.finallyTime.min, newRecipeData.finallyTime.max] as [number, number]
        : [6,8] as [number, number])
    const [finalTemperature, setFinalTemperature] = useState(newRecipeData.finallyTemperature
        ? [newRecipeData.finallyTemperature.min, newRecipeData.finallyTemperature.max] as [number, number]
        : [6,8] as [number, number])

    const onSubmitHandler = () => {
        let coupsData: CoupsType = {
            first: firstCoupTime,
            restCount: totalCoupsCount,
            restTime: {min: restCoupsTimeInterval[0], max: restCoupsTimeInterval[1]},
            totalTime: {min: totalDrainageTime[0], max: totalDrainageTime[1]},
            drainageType: drainageType,
            milkPH: {min: milkPH[0], max: milkPH[1]},
            finallyTime: null,
            finalAction: null,
            finallyTemperature: null,
        }
        finalAction ? coupsData.finallyTime = {min: 6, max: 8} : null
        finalAction ? coupsData.finalAction = finalActionType : null
        finalAction ? coupsData.finallyTemperature = {min: 6, max: 8} : null
        dispatch(setCoups({coups: coupsData}))
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
                <SingleSelect title={'тип прессования'} value={drainageType} valuePool={['самопрессование', 'исскуственное прессование']}
                              placeholder={'выберите тип прессования'} callback={setDrainageType}
                />
                <DoubleSlider title={'pH зерна целевой'} minRange={4} maxRange={6} step={0.1} value={milkPH}
                              callback={setMilkPH}
                />
                <MyCheckBox title={'Финальное действие'} callback={setFinalAction} isChecked={finalAction} style={{}} />
                {finalAction && <SingleSelect valuePool={['подготовка к росту дрожжей','остановка кислотности']}
                                              title={''} placeholder={'выберете финальное действие'}
                                              value={finalActionType} callback={setFinalActionType}
                />}
                {finalAction && <DoubleSlider title={'Время финального действия'} minRange={0} maxRange={24} step={0.1}
                                              value={finalTime} callback={setFinalTime}/>}
                {finalAction && <DoubleSlider title={'Температура финального действия'} minRange={0} maxRange={36} step={0.1}
                                              value={finalTemperature} callback={setFinalTemperature}/>}
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