import React, {ChangeEvent, useState} from 'react';
import s from "../../styles/Constructor.module.css";
import TextArea from "antd/lib/input/TextArea";
import ApplyCancelBtnBlock from "../uneversal/ApplyCancelBtnBlock";
import {PATH} from "../../utils/appPath";
import DoubleSlider from "../uneversal/DoubleSlider";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {setAging, setStorage} from "../../bll/slices/newRecipeSlice";

const AgingForm = () => {

    const dispatch = useAppDispatch()
    const newRecipeAgingData = useAppSelector(state => state.newRecipe.aging)
    const newRecipeStorageData = useAppSelector(state => state.newRecipe.storage)
    const [agingTime, setAgingTime] = useState(newRecipeAgingData.agingTime
        ? [newRecipeAgingData.agingTime.min, newRecipeAgingData.agingTime.max] as [number, number]
        : [30, 60] as [number, number])
    const [agingTemperature, setAgingTemperature] = useState(newRecipeAgingData.agingTime
        ? [newRecipeAgingData.agingTemperature.min, newRecipeAgingData.agingTemperature.max] as [number, number]
        : [10, 12] as [number, number])
    const [agingHumidity, setAgingHumidity] = useState(newRecipeAgingData.agingTime
        ? [newRecipeAgingData.agingTime.min, newRecipeAgingData.agingTime.max] as [number, number]
        : [85, 90] as [number, number])
    const [care, setCare] = useState(newRecipeAgingData ? newRecipeAgingData.care : '')
    const [storageTemperature, setStorageTemperature] = useState(newRecipeStorageData.storageTemperature
        ? [newRecipeStorageData.storageTemperature.min, newRecipeStorageData.storageTemperature.max] as [number, number]
        : [10, 12] as [number, number])

    const onTextAreaChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setCare(e.currentTarget.value)
    }

    const onSubmitHandler = () => {
        const agingData = {
            agingTime: {min: agingTime[0], max: agingTime[1]},
            agingTemperature: {min: agingTemperature[0], max: agingTemperature[1]},
            agingHumidity: {min: agingHumidity[0], max: agingHumidity[1]},
            care: care
        }
        const storageDate = {
            storageTemperature: {min: storageTemperature[0], max: storageTemperature[1]},
        }
        dispatch(setAging({aging: agingData}))
        dispatch(setStorage({storage: storageDate}))
    }


    return (
        <div>
            <div className={s.main}>
                <DoubleSlider title={'Время созревания, дней'} minRange={1} maxRange={365} step={1} value={agingTime}
                              callback={setAgingTime}
                />
                <DoubleSlider title={'Температура созревания, \u00b0C'} minRange={5} maxRange={20} step={1}
                              value={agingTemperature} callback={setAgingTemperature}
                />
                <DoubleSlider title={'Влажность, %'} minRange={50} maxRange={100} step={1} value={agingHumidity}
                              callback={setAgingHumidity}
                />
                <TextArea rows={4} placeholder="комментарии по созреванию"
                          onChange={onTextAreaChangeHandler} value={care}/>
                <DoubleSlider title={'Условия хранения, \u00b0C'} minRange={5} maxRange={20} step={1}
                              value={storageTemperature} callback={setStorageTemperature}
                />
            </div>
            <div className={s.btnBlock}>
                <ApplyCancelBtnBlock btnData={[
                    {
                        title: 'Назад', linkPath: PATH.LIBRARY.CHEESES.CONSTRUCTOR.DRYING, callback: () => {
                        }
                    },
                    {
                        title: 'Далее', linkPath: `${PATH.LIBRARY.CHEESES.MAIN}/NEW`, new: true, callback: () => {
                            onSubmitHandler()
                        }
                    }]}/>
            </div>
        </div>
    );
};

export default AgingForm;