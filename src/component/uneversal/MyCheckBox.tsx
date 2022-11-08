import React, {CSSProperties, RefAttributes} from 'react';
import { Checkbox, CheckboxProps } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

type MyCheckBoxPropsType = {
    title: string
    callback: (value: boolean)=>void
    isChecked: boolean
    style: CSSProperties
}

const MyCheckBox: React.FC<MyCheckBoxPropsType> = ({title, isChecked, callback, style}) => {

    const onChange = (e: CheckboxChangeEvent) => {
        callback(!isChecked)
    };


    return (
        <div>
            <Checkbox style={style} onChange={onChange} checked={isChecked} className='text-white w-[100%]'>{title}</Checkbox>
        </div>
    );
};

export default MyCheckBox;