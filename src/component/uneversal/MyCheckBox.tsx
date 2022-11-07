import React from 'react';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

type MyCheckBoxPropsType = {
    title: string
    callback: (value: boolean)=>void
    isChecked: boolean
}

const MyCheckBox: React.FC<MyCheckBoxPropsType> = ({title, isChecked, callback}) => {

    const onChange = (e: CheckboxChangeEvent) => {
        callback(!isChecked)
    };


    return (
        <div>
            <Checkbox onChange={onChange} value={isChecked} className='text-white w-[100%]'>{title}</Checkbox>
        </div>
    );
};

export default MyCheckBox;