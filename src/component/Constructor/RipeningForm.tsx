import React, {useState} from 'react';
import MultipleSelect from "../uneversal/MultipleSelect";
import DoubleSlider from "../uneversal/DoubleSlider";
import s from '../../styles/Constructor.module.css'
import ApplyCancelBtnBlock from "../uneversal/ApplyCancelBtnBlock";
import {PATH} from "../../utils/appPath";
import IntegerStep from "../uneversal/IntegerStep";

const RipeningForm = () => {

    const [leavenTitle, setLeavenTitle] = useState([] as string[])
    const [leavenTime, setLeavenTime] = useState([30,40] as [number, number])
    const [enzymeTitle, setEnzymeTitle] = useState([] as string[])
    const [clottingTemperature, setClottingTemperature] = useState(36)
    const [clottingK, setClottingK] = useState(1.5)

    const onSubmitHandler = () => {
        console.log(leavenTitle, leavenTime, enzymeTitle, clottingTemperature, clottingK)
    }


    // const ripening = {
    //     leaven: {
    //         title: '',
    //         time: {min: 30, max: 40},
    //     },
    //     enzyme: {
    //         title: 'Hansen NATUREN Premium Plus 1400NB',
    //         clotting: {temperature: 36, k: 1.5},
    //     },
    // }


    //todo сделать привязку к типам заквасок
    //todo сделать привязку к типам ферментов

    return (
        <div>
            <div className={s.main}>
                <MultipleSelect title={'Тип закваски'} valuePool={['Biochem SLB 10U','Biochem SLB 20U','Biochem SLB 30U']}
                                placeholder={'Выберите тип закваски'} value={leavenTitle} callback={setLeavenTitle}
                />
                <DoubleSlider title={'Время до внесения фермента'} minRange={10} maxRange={60} step={1}
                              value={leavenTime} callback={setLeavenTime}
                />
                <MultipleSelect title={'Тип фермента'} valuePool={['Hansen NATUREN Premium Plus 1400NB','Hansen NATUREN Premium Plus 3400NB']}
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
                    {title:'Назад', linkPath:PATH.LIBRARY.CHEESES.CONSTRUCTOR.PASTEURIZATION, callback:()=>{}},
                    {title:'Далее',linkPath:PATH.LIBRARY.CHEESES.CONSTRUCTOR.CUTTING, callback:()=>{onSubmitHandler()}
                    }]}/>
            </div>
        </div>
    );
};

export default RipeningForm;