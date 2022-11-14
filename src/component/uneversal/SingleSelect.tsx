import {Select, SelectProps} from 'antd';
import React from 'react';
import s from "../../styles/Constructor.module.css";



type SingleSelectPropsType = {
    title: string
    value: string | undefined
    valuePool: string[]
    placeholder: string
    callback: (value:string)=>void
}


const SingleSelect: React.FC<SingleSelectPropsType> = ({title, value, valuePool, placeholder, callback}) => {

    const onChange = (value:string) => {
        callback && callback(value);
    };

    const options: SelectProps['options'] = [];
    valuePool.map(el => {
        options.push({
            label: el,
            value: el,
        });
    })

    return (
        <div className={s.tabElement}>
            <div className='flex justify-center my-[10px]'>
                {title}
            </div>
            <Select
                placeholder={placeholder}
                onChange={onChange}
                options={options}
                className='w-[100%]'
                value={value !== '' ? value : undefined}
            />
        </div>

    );
}

export default SingleSelect;