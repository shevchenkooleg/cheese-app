import React, {useState} from 'react';
import s from "../../../src/styles/Constructor.module.css";
import UInput from "../../../src/component/uneversal/UInput";
import DoubleSlider from "../../../src/component/uneversal/DoubleSlider";
import ApplyCancelBtnBlock from "../../../src/component/uneversal/ApplyCancelBtnBlock";
import {PATH} from "../../../src/utils/appPath";
import {useAppDispatch} from "../../../src/utils/hooks";
import MyInput from "../../../src/component/uneversal/MyInput";
import IntegerStep from "../../../src/component/uneversal/IntegerStep";
import {createEnzymeObject} from "../../../src/bll/slices/enzymeSlice";

const Constructor = () => {

    const dispatch = useAppDispatch()
    const [titleValue, setTitleValue] = useState('')
    const [enzymePower, setEnzymePower] = useState([500, 1000] as [number, number])
    const [initialWeight, setInitialWeight] = useState(0)
    const [bestBeforeDate, setBestBeforeDate] = useState('2022-01-01')
    const [dateOfPacketOpen, setDateOfPacketOpen] = useState('2022-01-01')

    const onSubmitHandler = () => {
        const enzymeObjectForDB = {
            title: titleValue,
            enzymePowerMin: enzymePower[0],
            enzymePowerMax: enzymePower[1],
            initialWeight,
            bestBeforeDate,
            dateOfPacketOpen,
        }
        dispatch(createEnzymeObject(enzymeObjectForDB))
    }

    return (
        <div className='container'>
            <div className='content'>
                <div className='main'>
                    <div className={s.title}>
                        Добавление фермента
                    </div>
                    <div className='min-h-[90vh]'>
                        <div className={s.main}>
                            <UInput title={'Наименование'} placeholderValue={'Название фермента'} callback={setTitleValue}
                                    value={titleValue}
                            />
                             <DoubleSlider title={'Расчетное количество молока, л'} minRange={10} maxRange={2000} step={1}
                                          value={enzymePower} callback={setEnzymePower} inputWidth={5} sliderWidth={12}
                            />
                            <IntegerStep title={'Начальный вес фермента'} minRange={0} maxRange={100} value={initialWeight}
                                         callback={setInitialWeight} step={0.001} postfix={'g'}/>
                            <MyInput title={'Дата открытия упаковки'} value={dateOfPacketOpen} callback={setDateOfPacketOpen}/>
                            <MyInput title={'Срок годности'} value={bestBeforeDate} callback={setBestBeforeDate}/>
                        </div>
                        <div className={s.btnBlock}>
                            <ApplyCancelBtnBlock btnData={[
                                {
                                    title: 'Назад', linkPath: PATH.LIBRARY.ENZYMES.MAIN, callback: () => {}
                                },
                                {
                                    title: 'Далее',
                                    linkPath: PATH.LIBRARY.ENZYMES.MAIN,
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