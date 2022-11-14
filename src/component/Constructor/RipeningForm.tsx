import React, {useState} from 'react';
import MultipleSelect from "../uneversal/MultipleSelect";
import DoubleSlider from "../uneversal/DoubleSlider";
import s from '../../styles/Constructor.module.css'
import ApplyCancelBtnBlock from "../uneversal/ApplyCancelBtnBlock";
import {PATH} from "../../utils/appPath";
import IntegerStep from "../uneversal/IntegerStep";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {setRipening} from "../../bll/slices/newRecipeSlice";

const RipeningForm = () => {

    const dispatch = useAppDispatch()
    const newRecipeData = useAppSelector(state => state.newRecipe.ripening)
    const [leavenTitle, setLeavenTitle] = useState(newRecipeData.leaven ? newRecipeData.leaven.title : [] as string[])
    const [leavenTime, setLeavenTime] = useState(newRecipeData.leaven ? [newRecipeData.leaven.time.min, newRecipeData.leaven.time.max] as [number, number] : [30, 40] as [number, number])
    const [enzymeTitle, setEnzymeTitle] = useState( newRecipeData.enzyme ? newRecipeData.enzyme.title : [] as string[])
    const [clottingTemperature, setClottingTemperature] = useState(newRecipeData.enzyme ? newRecipeData.enzyme.clotting.temperature : 36)
    const [clottingK, setClottingK] = useState(newRecipeData.enzyme ? newRecipeData.enzyme.clotting.k : 1.5)

    const onSubmitHandler = () => {
        const ripeningData = {
            leaven: {
                title: leavenTitle,
                time: {min: leavenTime[0], max: leavenTime[1]},
            },
            enzyme: {
                title: enzymeTitle,
                clotting: {temperature: clottingTemperature, k: clottingK},
            },
        }
        dispatch(setRipening({ripening: ripeningData}))
    }


    //todo сделать привязку к типам заквасок
    //todo сделать привязку к типам ферментов

    return (
        <div>
            <div className={s.main}>
                <MultipleSelect title={'Тип закваски'}
                                valuePool={['Biochem SLB 10U', 'Biochem SLB 20U', 'Biochem SLB 30U']}
                                placeholder={'Выберите тип закваски'} value={leavenTitle} callback={setLeavenTitle}
                />
                <DoubleSlider title={'Время до внесения фермента'} minRange={10} maxRange={60} step={1}
                              value={leavenTime} callback={setLeavenTime}
                />
                <MultipleSelect title={'Тип фермента'}
                                valuePool={['Hansen NATUREN Premium Plus 1400NB', 'Hansen NATUREN Premium Plus 3400NB']}
                                placeholder={'Выберите тип фермента'} value={enzymeTitle} callback={setEnzymeTitle}
                />
                <IntegerStep title={'Температура сквашивания'} minRange={30} maxRange={50} postfix={"deg"} step={1}
                             value={clottingTemperature} callback={setClottingTemperature}
                />
                <IntegerStep title={'Коэффициент флокуляции'} minRange={1} maxRange={3} postfix={"unit"} step={0.5}
                             value={clottingK} callback={setClottingK}
                />
            </div>
            <div className={s.btnBlock}>
                <ApplyCancelBtnBlock btnData={[
                    {
                        title: 'Назад', linkPath: PATH.LIBRARY.CHEESES.CONSTRUCTOR.PASTEURIZATION, callback: () => {
                        }
                    },
                    {
                        title: 'Далее', linkPath: PATH.LIBRARY.CHEESES.CONSTRUCTOR.CUTTING, callback: () => {
                            onSubmitHandler()
                        }
                    }]}/>
            </div>
        </div>
    );
};

export default RipeningForm;