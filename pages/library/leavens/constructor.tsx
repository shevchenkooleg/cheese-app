import React, {useState} from 'react';
import s from "../../../src/styles/Constructor.module.css";
import UInput from "../../../src/component/uneversal/UInput";
import DoubleSlider from "../../../src/component/uneversal/DoubleSlider";
import ApplyCancelBtnBlock from "../../../src/component/uneversal/ApplyCancelBtnBlock";
import {PATH} from "../../../src/utils/appPath";
import {useAppDispatch} from "../../../src/utils/hooks";
import MyInput from "../../../src/component/uneversal/MyInput";
import SingleSelect from "../../../src/component/uneversal/SingleSelect";
import IntegerStep from "../../../src/component/uneversal/IntegerStep";
import {createLeavenObject} from "../../../src/bll/slices/leavensSlice";

const Constructor = () => {

    const dispatch = useAppDispatch()
    const [titleValue, setTitleValue] = useState('')
    const [leavenPower, setLeavenPower] = useState([500, 1000] as [number, number])
    const [leavenConcentration, setLeavenConcentration] = useState('')
    const [initialWeight, setInitialWeight] = useState(0)
    const [dateOfManufacture, setDateOfManufacture] = useState('2022-01-01')
    const [dateOfPacketOpen, setDateOfPacketOpen] = useState('2022-01-01')

    const onSubmitHandler = () => {
        const leavenObjectForDB = {
            title: titleValue,
            leavenPowerMin: leavenPower[0],
            leavenPowerMax: leavenPower[1],
            initialWeight,
            leavenConcentration,
            dateOfManufacture,
            dateOfPacketOpen,
        }
        dispatch(createLeavenObject(leavenObjectForDB))
    }

    return (
        <div className='container'>
            <div className='content'>
                <div className='main'>
                    <div className={s.title}>
                        Добавление закваски
                    </div>
                    <div className='min-h-[90vh]'>
                        <div className={s.main}>
                            <UInput title={'Наименование'} placeholderValue={'Название закваски'} callback={setTitleValue}
                                    value={titleValue}
                            />
                            <SingleSelect title={'Концентрация закваски'} value={leavenConcentration} valuePool={['5U','10U', '50U','80U','100U','350U','500U']} placeholder={'Выберите концентрацию закваски'} callback={setLeavenConcentration}/>
                            <DoubleSlider title={'Расчетное количество молока, л'} minRange={10} maxRange={2000} step={1}
                                          value={leavenPower} callback={setLeavenPower} inputWidth={5} sliderWidth={12}
                            />
                            <IntegerStep title={'Начальный вес закваски'} minRange={0} maxRange={100} value={initialWeight}
                                         callback={setInitialWeight} step={0.001} postfix={'g'}/>
                            <MyInput title={'Дата производства закваски'} value={dateOfManufacture} callback={setDateOfManufacture}/>
                            <MyInput title={'Дата открытия упаковки'} value={dateOfPacketOpen} callback={setDateOfPacketOpen}/>
                        </div>
                        <div className={s.btnBlock}>
                            <ApplyCancelBtnBlock btnData={[
                                {
                                    title: 'Назад', linkPath: PATH.LIBRARY.LEAVENS.MAIN, callback: () => {
                                    }
                                },
                                {
                                    title: 'Далее',
                                    linkPath: PATH.LIBRARY.LEAVENS.MAIN,
                                    callback: () => {
                                        onSubmitHandler()
                                    }
                                }]}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Constructor;