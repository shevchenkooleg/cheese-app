import { Col, InputNumber, Row, Slider } from 'antd';
import React, { useState } from 'react';
import { postfixGenerator } from '../../utils/postfixGenerator';
import s from '../../styles/Constructor.module.css'
import {PostfixType} from "../../bll/types";

type IntegerStepPropsType = {
    title: string
    minRange: number
    maxRange: number
    defaultValue: number
    step?: number
    postfix?: PostfixType
}

const IntegerStep: React.FC<IntegerStepPropsType> = ({title, minRange, maxRange, step=1, defaultValue, postfix='unit'}) => {
    const [inputValue, setInputValue] = useState(defaultValue);

    const onChange = (newValue: number) => {
        setInputValue(newValue);
    };

    return (
        <div className={s.tabElement}>
            <div className='flex justify-center my-[10px]'>
                {title}
            </div>
            <Row>
                <Col span={14}>
                    <Slider
                        min={minRange}
                        max={maxRange}
                        onChange={onChange}
                        value={typeof inputValue === 'number' ? inputValue : 0}
                        step={step}
                    />
                </Col>
                <Col span={10}>
                    <InputNumber
                        min={minRange}
                        max={maxRange}
                        // style={{ margin: '0 15px' }}
                        value={inputValue}
                        addonAfter={postfixGenerator(inputValue, postfix)}
                        className='ml-[8px]'
                        // onChange={onChange}
                    />
                </Col>
            </Row>
        </div>

    );
};

export default IntegerStep