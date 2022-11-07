import {Select} from 'antd';
import React from 'react';
import type {SelectProps} from 'antd';
import s from '../../styles/Constructor.module.css'

type MultipleSelectPropsType = {
    title: string
    values: string[]
    placeholder: string
}

const MultipleSelect:React.FC<MultipleSelectPropsType> = ({title, values, placeholder}) => {

    const options: SelectProps['options'] = [];
    values.map(el=>{
        options.push({
            label: el,
            value: el,
        });
    })

    const handleChange = (value: string[]) => {
        console.log(`selected ${value}`);
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
                defaultValue={[]}
                onChange={handleChange}
                options={options}
            />
        </div>
    );
};

export default MultipleSelect;