import React, {useState} from 'react';
import s from "../../styles/Constructor.module.css";
import ApplyCancelBtnBlock from "../uneversal/ApplyCancelBtnBlock";
import {PATH} from "../../utils/appPath";
import SingleSelect from "../uneversal/SingleSelect";
import IntegerStep from "../uneversal/IntegerStep";
import DoubleSlider from "../uneversal/DoubleSlider";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {setSalting} from "../../bll/slices/newRecipeSlice";

const SaltingForm = () => {

    const dispatch = useAppDispatch()
    const newRecipeData = useAppSelector(state=> state.newRecipe.salting)
    const [saltingType, setSaltingType] = useState(newRecipeData.saltingType ? newRecipeData.saltingType : '')
    const [concentration, setConcentration] = useState(newRecipeData && newRecipeData.wet
        ? newRecipeData.wet.concentration : 20)
    const [brinePH, setBrinePH] = useState(newRecipeData && newRecipeData.wet
        ? [newRecipeData.wet.brinePH.min, newRecipeData.wet.brinePH.max] as [number, number]
        : [5.2,5.3] as [number, number])
    const [totalSaltWeight, setTotalSaltWeight] = useState(newRecipeData && newRecipeData.dry
        ? [newRecipeData.dry.totalWeight.min, newRecipeData.dry.totalWeight.max] as [number, number]
        : [20,22] as [number, number])
    const [totalSaltTime, setTotalTime] = useState(newRecipeData && newRecipeData.dry ? newRecipeData.dry.saltingTime : 1)

    const onSubmitHandler = () => {
        const saltingData = {
            saltingType: saltingType,
            dry:{
                totalWeight: {min: totalSaltWeight[0], max: totalSaltWeight[1]},
                saltingTime: totalSaltTime,
            },
            wet:{
                concentration: concentration,
                brinePH: {min: brinePH[0], max: brinePH[1]},
                saltingTime: totalSaltTime,
            }
        }
        dispatch(setSalting({salting: saltingData}))
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