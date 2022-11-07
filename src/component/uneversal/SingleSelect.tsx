import {Select, SelectProps} from 'antd';
import React from 'react';
import s from "../../styles/Constructor.module.css";

const onChange = (value: string) => {
    console.log(`selected ${value}`);
};

type SingleSelectPropsType = {
    values: string[]
    title: string
    placeholder: string
}


const SingleSelect: React.FC<SingleSelectPropsType> = ({title, values,placeholder}) => {

    const options: SelectProps['options'] = [];
    values.map(el => {
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
            />
        </div>

    );
}

export default SingleSelect;