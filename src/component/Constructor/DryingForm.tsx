import React, {useState} from 'react';
import s from "../../styles/Constructor.module.css";
import ApplyCancelBtnBlock from "../uneversal/ApplyCancelBtnBlock";
import {PATH} from "../../utils/appPath";
import DoubleSlider from "../uneversal/DoubleSlider";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {setDrying} from "../../bll/slices/newRecipeSlice";

const DryingForm = () => {

    const dispatch = useAppDispatch()
    const newRecipeData = useAppSelector(state=>state.newRecipe.drying)
    const [dryingTime, setDryingTime] = useState(newRecipeData.dryingTime
        ? [newRecipeData.dryingTime.min, newRecipeData.dryingTime.max] as [number, number]
        : [12,24] as [number,number])
    const [dryingTemperature, setDryingTemperature] = useState(newRecipeData.dryingTemperature
        ? [newRecipeData.dryingTemperature.min, newRecipeData.dryingTemperature.max] as [number, number]
        : [10,12] as [number,number])
    const [dryingHumidity, setDryingHumidity] = useState(newRecipeData.dryingHumidity
        ? [newRecipeData.dryingHumidity.min, newRecipeData.dryingHumidity.max] as [number, number]
        : [85,90] as [number,number])

    const onSubmitHandler = () => {
        const dryingData = {
            dryingTime: {min: dryingTime[0], max: dryingTime[1]},
            dryingTemperature: {min: dryingTemperature[0], max: dryingTemperature[1]},
            dryingHumidity: {min: dryingHumidity[0], max: dryingHumidity[1]},
        }
        dispatch(setDrying({drying: dryingData}))

    }

    return (
        <div>
            <div className={s.main}>
                <DoubleSlider title={'Время обсушки, часов'} minRange={1} maxRange={48} step={1} value={dryingTime}
                              callback={setDryingTime}
                />
                <DoubleSlider title={'Температура обсушки, \u00b0C'} minRange={5} maxRange={20} step={1}
                              value={dryingTemperature} callback={setDryingTemperature}
                />
                <DoubleSlider title={'Влажность, %'} minRange={50} maxRange={100} step={1} value={dryingHumidity}
                              callback={setDryingHumidity}
                />
            </div>
            <div className={s.btnBlock}>
                <ApplyCancelBtnBlock btnData={[
                    {title:'Назад', linkPath: PATH.LIBRARY.CHEESES.CONSTRUCTOR.SALTING, callback:()=>{}},
                    {title:'Далее',linkPath:PATH.LIBRARY.CHEESES.CONSTRUCTOR.AGING, callback:()=>{onSubmitHandler()}}]}/>
            </div>
        </div>
    );
};

export default DryingForm;