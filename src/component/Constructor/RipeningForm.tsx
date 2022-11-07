import React from 'react';
import {useFormik} from "formik";
import MultipleSelect from "../uneversal/MultipleSelect";
import DoubleSlider from "../uneversal/DoubleSlider";
import s from '../../styles/Constructor.module.css'
import ApplyCancelBtnBlock from "../uneversal/ApplyCancelBtnBlock";
import {PATH} from "../../utils/appPath";
import IntegerStep from "../uneversal/IntegerStep";

const RipeningForm = () => {


    const ripening = {
        leaven: {
            title: 'Biochem SLB 10U',
            time: {min: 30, max: 40},
        },
        enzyme: {
            title: 'Hansen NATUREN Premium Plus 1400NB',
            clotting: {temperature: 36, k: 1.5},
        },
    }

    const formik = useFormik({
        initialValues: {
            leavenTitle: null,
            leavenTime: null,
            enzymeTitle: null,
            clottingTime: null,
            clottingTemperature: null,
            clottingK: null,

        },
        // validationSchema: LoginValidationSchema,
        onSubmit: (values, actions) => {
            const leavenTitle = values.leavenTitle
            const leavenTime = values.leavenTime
            const enzymeTitle = values.enzymeTitle
            const clottingTime = values.clottingTime
            const clottingTemperature = values.clottingTemperature
            const clottingK = values.clottingK

            // dispatch(logInTC({email, password, rememberMe}))
            // if (isAuth) {
            //     navigate('/')
            // }
            actions.resetForm({
                values: {
                    leavenTitle: null,
                    leavenTime: null,
                    enzymeTitle: null,
                    clottingTime: null,
                    clottingTemperature: null,
                    clottingK: null,
                }
            })
        }
    })

    //todo сделать привязку к типам заквасок
    //todo сделать привязку к типам ферментов

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className={s.main}>
                    <MultipleSelect title={'Тип закваски'} values={['Коровье','Козье','Ежовое','Смешанное']} placeholder={'Выберите тип закваски'}/>
                    <DoubleSlider title={'Время до внесения фермента'} minRange={10} maxRange={60} step={1} defaultValues={[30,40]}/>
                    <MultipleSelect title={'Тип фермента'} values={['Коровье','Козье','Ежовое','Смешанное']} placeholder={'Выберите тип фермента'}/>
                    <IntegerStep title={'Температура сквашивания'} minRange={30} maxRange={50} postfix={"deg"} step={1} defaultValue={36}/>
                    <IntegerStep title={'Коэффициент флокуляции'} minRange={1} maxRange={3} postfix={"unit"} step={0.5} defaultValue={1.5}/>
                </div>
                <div className={s.btnBlock}>
                    <ApplyCancelBtnBlock btnData={[
                        {title:'Назад', linkPath:PATH.LIBRARY.CHEESES.CONSTRUCTOR.PASTEURIZATION, callback:()=>{}},
                        {title:'Далее',linkPath:PATH.LIBRARY.CHEESES.CONSTRUCTOR.CUTTING, callback:()=>{}}]}/>
                </div>
            </form>
        </div>
    );
};

export default RipeningForm;