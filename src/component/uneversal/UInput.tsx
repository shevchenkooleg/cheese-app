import {Input} from 'antd';
import s from '../../styles/Constructor.module.css'
import {ChangeEvent} from "react";

type UInputPropsType = {
    title: string
    placeholderValue: string
    callback: (newTitle: string)=>void
    value: string
}

const UInput:React.FC<UInputPropsType> = ({title, placeholderValue, callback, value}) => {

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        callback(e.currentTarget.value)
    }


    return (
        <div className={s.tabElement}>
            <div className='flex justify-center my-[10px]'>
                {title}
            </div>
            <Input placeholder={placeholderValue} className='mb-[10px]' onChange={onChangeHandler} value={value}/>
        </div>

    );
};

export default UInput;