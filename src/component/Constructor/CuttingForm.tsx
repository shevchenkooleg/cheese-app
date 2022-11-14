import React, {CSSProperties, useState} from 'react';
import s from "../../styles/Constructor.module.css";
import IntegerStep from "../uneversal/IntegerStep";
import ApplyCancelBtnBlock from "../uneversal/ApplyCancelBtnBlock";
import {PATH} from "../../utils/appPath";
import SingleSelect from '../uneversal/SingleSelect';
import MyCheckBox from "../uneversal/MyCheckBox";
import DoubleSlider from "../uneversal/DoubleSlider";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {setCutting} from "../../bll/slices/newRecipeSlice";

const CuttingForm = () => {

    const dispatch = useAppDispatch()
    const newRecipeCuttingData = useAppSelector(state => state.newRecipe.cutting)
    const newRecipeKneadingData = useAppSelector(state => state.newRecipe.kneading)
    const newRecipeSecondHeatingData = useAppSelector(state => state.newRecipe.secondHeating)
    const [cuttingType, setCuttingType] = useState(newRecipeCuttingData ? newRecipeCuttingData.type : '')
    const [cuttingSize, setCuttingSize] = useState(newRecipeCuttingData.size ? newRecipeCuttingData.size.width : 1)
    const [kneadingTime, setKneadingTime] = useState(newRecipeKneadingData ? newRecipeKneadingData.time : 15)
    const [secondHeating, setSecondHeating] = useState(newRecipeSecondHeatingData && !!newRecipeSecondHeatingData.heatingTime)
    const [secondHeatingTemperature, setSecondHeatingTemperature] = useState(newRecipeSecondHeatingData && newRecipeSecondHeatingData.heatingTemperature
        ? [newRecipeSecondHeatingData.heatingTemperature.min, newRecipeSecondHeatingData.heatingTemperature.max] as [number, number]
        : [38.5, 39.5] as [number, number])
    const [secondHeatingTime, setSecondHeatingTime] = useState(newRecipeSecondHeatingData && newRecipeSecondHeatingData.heatingTime
        ? [newRecipeSecondHeatingData.heatingTime.min, newRecipeSecondHeatingData.heatingTime.max] as [number, number]
        : [10, 15] as [number, number])

    const onSubmitHandler = () => {
        let cuttingData
        secondHeating ? cuttingData = {
            cutting: {
                size: {width: cuttingSize, long: cuttingSize},
                type: cuttingType,

            },
            kneading: {
                time: kneadingTime
            },
            secondHeating: {
                heatingTemperature: {min: secondHeatingTemperature[0], max: secondHeatingTemperature[1]},
                heatingTime: {min: secondHeatingTime[0], max: secondHeatingTime[1]}
            },
        } : cuttingData = {
            cutting: {
                size: {width: cuttingSize, long: cuttingSize},
                type: cuttingType,

            },
            kneading: {
                time: kneadingTime
            },
            secondHeating: null,
        }
        dispatch(setCutting({cutting: cuttingData}))
    }


    return (
        <div>
            <div className={s.main}>
                <SingleSelect title={'Разрезка сгустка'} valuePool={['Горох', 'Фундук', 'Кокос']}
                              placeholder={'Выберите вид зерна'} value={cuttingType}
                              callback={setCuttingType}
                />
                <IntegerStep title={'Размер зерна'} minRange={0} maxRange={5} step={0.5} postfix={'cm'} value={cuttingSize}
                             callback={setCuttingSize}
                />
                <IntegerStep title={'Время вымешивания'} minRange={0} maxRange={40} postfix={'min'} value={kneadingTime}
                             callback={setKneadingTime}
                />
                <MyCheckBox title={'Второе нагревание'} callback={setSecondHeating} isChecked={secondHeating}
                            style={{'fontSize': '16px', 'marginTop': '20px'} as CSSProperties}
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
                    {
                        title: 'Назад', linkPath: PATH.LIBRARY.CHEESES.CONSTRUCTOR.RIPENING, callback: () => {
                        }
                    },
                    {
                        title: 'Далее', linkPath: PATH.LIBRARY.CHEESES.CONSTRUCTOR.SPICES, callback: () => {
                            onSubmitHandler()
                        }
                    }]}/>
            </div>
        </div>
    );
};

export default CuttingForm;