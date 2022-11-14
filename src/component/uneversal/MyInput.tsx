import { Input } from 'antd';
import React, {ChangeEvent} from 'react';
import s from "../../styles/Constructor.module.css";

type MyInputPropsType = {
    title: string
    placeholder?: string
    type?: string
    value: string
    callback: (newValue: string) => void
}



const MyInput: React.FC<MyInputPropsType> = ({title, callback, value}) => {

    const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callback(e.currentTarget.value)
    }

    return (
        <div className={s.tabElement}>
            <div className='flex justify-center my-[10px]'>
                {title}
            </div>
            <Input type='date' value={value} onChange={onInputChangeHandler}/>
        </div>
    );
};

export default MyInput;