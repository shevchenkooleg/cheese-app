import {Input} from 'antd';
import { FieldInputProps } from 'formik';
import s from '../../styles/Constructor.module.css'
import {ChangeEvent} from "react";

type UInputPropsType = {
    title: string
    placeholderValue: string
    callback: (newTitle: string)=>void
    titleValue: string
}

const UInput:React.FC<UInputPropsType> = ({title, placeholderValue, callback, titleValue}) => {

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        callback(e.currentTarget.value)
    }


    return (
        <div className={s.tabElement}>
            <div className='flex justify-center my-[10px]'>
                {title}
            </div>
            <Input placeholder={placeholderValue} className='mb-[10px]' onChange={onChangeHandler} value={titleValue}/>
        </div>

    );
};

export default UInput;