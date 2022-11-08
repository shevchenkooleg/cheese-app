import { Col, InputNumber, Row, Slider } from 'antd';
import React, {ChangeEvent, useState} from 'react';
import { postfixGenerator } from '../../utils/postfixGenerator';
import s from '../../styles/Constructor.module.css'
import {PostfixType} from "../../bll/types";
import {ValueType} from "tailwindcss/types/config";
import {isNumberObject} from "util/types";

type IntegerStepPropsType = {
    title: string
    minRange: number
    maxRange: number
    step?: number
    postfix?: PostfixType
    value: number
    callback: (newValue: number)=>void
}

const IntegerStep: React.FC<IntegerStepPropsType> = ({title, minRange, maxRange, step=1, postfix='unit', value=1, callback}) => {

    const onSliderChange = (newValue: number) => {
        callback(newValue);
    };
    const onInputChange = (value: Number | null) => {
        console.log(value)
        value && callback(Number(value))
    }

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
                        onChange={onSliderChange}
                        value={value}
                        step={step}
                    />
                </Col>
                <Col span={10}>
                    <InputNumber
                        min={minRange}
                        max={maxRange}
                        // style={{ margin: '0 15px' }}
                        value={value}
                        addonAfter={postfixGenerator(value, postfix)}
                        className='ml-[8px]'
                        onChange={onInputChange}

                    />
                </Col>
            </Row>
        </div>

    );
};

export default IntegerStep