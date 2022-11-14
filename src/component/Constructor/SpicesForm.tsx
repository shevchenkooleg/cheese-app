import React, {ChangeEvent, CSSProperties, useState} from 'react';
import s from "../../styles/Constructor.module.css";
import IntegerStep from "../uneversal/IntegerStep";
import ApplyCancelBtnBlock from "../uneversal/ApplyCancelBtnBlock";
import {PATH} from "../../utils/appPath";
import MyCheckBox from "../uneversal/MyCheckBox";
import TextArea from 'antd/lib/input/TextArea';
import MultipleSelect from "../uneversal/MultipleSelect";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import { setSpicesAC } from '../../bll/slices/newRecipeSlice';

const SpicesForm = () => {

    const dispatch = useAppDispatch()
    const newRecipeData = useAppSelector(state=>state.newRecipe.spices)
    const [spices,setSpices] = useState(!!newRecipeData && newRecipeData.weight)
    const [spicesType, setSpicesType] = useState(newRecipeData ? newRecipeData.type : [] as string[])
    const [spicesWeight, setSpicesWeight] = useState(newRecipeData && newRecipeData.weight ? newRecipeData.weight.total : 0.2)
    const [spicesComment, setSpicesComment] = useState(newRecipeData ? newRecipeData.additionally : '')

    const onTextAreaChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setSpicesComment(e.currentTarget.value)
    }

    const onSubmitHandler = () => {
        let spicesData
        spices ? spicesData = {
            type: spicesType,
            weight: {
                total: spicesWeight,
                option: '% от веса будущего сыра',
            },
            additionally: spicesComment,
        } : spicesData = null
        dispatch(setSpicesAC({spices: spicesData}))
    }


    return (
        <div>
            <div className={s.main}>
                <MyCheckBox title={'Добавление специй'} callback={setSpices} isChecked={spices}
                            style={{'fontSize': '16px', 'marginBottom':'20px'} as CSSProperties}
                />
                {spices && <MultipleSelect title={''} valuePool={["розмарин", "лук-шалот", "итальянские травы", "перец", "сухой чеснок", "пажитник"]}
                                placeholder={'выберете специи'} value={spicesType} callback={setSpicesType}
                />}
                {spices && <IntegerStep title={'% от веса будущего сыра'} minRange={0} maxRange={2} step={0.1}
                                        postfix={'%'} value={spicesWeight} callback={setSpicesWeight}
                />}
                {spices && <TextArea rows={4} placeholder="комментарии по применинию" maxLength={6} value={spicesComment}
                          onChange={onTextAreaChangeHandler}
                />}
            </div>
            <div className={s.btnBlock}>
                <ApplyCancelBtnBlock btnData={[
                    {title:'Назад', linkPath: PATH.LIBRARY.CHEESES.CONSTRUCTOR.CUTTING, callback:()=>{}},
                    {title:'Далее',linkPath:PATH.LIBRARY.CHEESES.CONSTRUCTOR.LAYOUT, callback:()=>{onSubmitHandler()}}]}/>
            </div>
        </div>
    );
};

export default SpicesForm;