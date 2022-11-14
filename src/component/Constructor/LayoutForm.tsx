import React, {useState} from 'react';
import s from "../../styles/Constructor.module.css";
import ApplyCancelBtnBlock from "../uneversal/ApplyCancelBtnBlock";
import {PATH} from "../../utils/appPath";
import MultipleSelect from "../uneversal/MultipleSelect";
import DoubleSlider from "../uneversal/DoubleSlider";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {setLayout} from "../../bll/slices/newRecipeSlice";

const LayoutForm = () => {

    const dispatch = useAppDispatch()
    const newRecipeData = useAppSelector(state=>state.newRecipe.layout)
    const [layoutType, setLayoutType] = useState(newRecipeData ? newRecipeData.type : [] as string[])
    const [milkPH, setMilkPH] = useState(newRecipeData.milkPH ? [newRecipeData.milkPH.min, newRecipeData.milkPH.max] as [number, number] : [6.3, 6.4] as [number, number])

    const onSubmitHandler = () => {
        const layoutData = {
            type: layoutType,
            milkPH: {min: milkPH[0], max: milkPH[1]},
        }
        dispatch(setLayout({layout: layoutData}))
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