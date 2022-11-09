import {Select} from 'antd';
import React from 'react';
import type {SelectProps} from 'antd';
import s from '../../styles/Constructor.module.css'

type MultipleSelectPropsType = {
    title: string
    placeholder: string
    value: string[]
    valuePool: string[]
    callback: (newValue: string[])=>void
}

const MultipleSelect:React.FC<MultipleSelectPropsType> = ({title, value, placeholder, valuePool,callback }) => {

    const options: SelectProps['options'] = [];
    valuePool.map(el=>{
        options.push({
            label: el,
            value: el,
        });
    })

    const handleChange = (value: string[]) => {
        callback(value)
    };


    return (
        <div className={s.tabElement}>
            <div className='flex justify-center my-[10px]'>
                {title}
            </div>
            <Select
                mode="multiple"
                allowClear
                style={{width: '100%'}}
                placeholder={placeholder}
                onChange={handleChange}
                options={options}
                value={value}
            />
        </div>
    );
};

export default MultipleSelect;