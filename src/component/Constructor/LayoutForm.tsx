import React, {useState} from 'react';
import s from "../../styles/Constructor.module.css";
import ApplyCancelBtnBlock from "../uneversal/ApplyCancelBtnBlock";
import {PATH} from "../../utils/appPath";
import MultipleSelect from "../uneversal/MultipleSelect";
import DoubleSlider from "../uneversal/DoubleSlider";

const LayoutForm = () => {


    const [layoutType, setLayoutType] = useState([] as string[])
    const [milkPH, setMilkPH] = useState([6.3, 6.4] as [number, number])

    const onSubmitHandler = () => {
        console.log(layoutType, milkPH)
    }



    return (
        <div>
            <div className={s.main}>
                <MultipleSelect title={'Cпособ выкладки'} valuePool={['выкладка наливом', 'выкладка насыпью']}
                                placeholder={'выберите способ выкладки зерна'} value={layoutType} callback={setLayoutType}
                />
                <DoubleSlider title={'ph зерна после выкладки'} minRange={6} maxRange={7} step={0.1} value={milkPH}
                              callback={setMilkPH}
                />

            </div>
            <div className={s.btnBlock}>
                <ApplyCancelBtnBlock btnData={[
                    {title:'Назад', linkPath: PATH.LIBRARY.CHEESES.CONSTRUCTOR.SPICES, callback:()=>{}},
                    {title:'Далее',linkPath:PATH.LIBRARY.CHEESES.CONSTRUCTOR.COUPS, callback:()=>{onSubmitHandler()}}]}/>
            </div>
        </div>
    );
};

export default LayoutForm;