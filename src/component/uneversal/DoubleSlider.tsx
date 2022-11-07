import {Col, Input, InputNumber, Row, Slider} from 'antd';
import React, { useState } from 'react';
import s from '../../styles/Constructor.module.css'

type DoubleSliderPropsType = {
    title: string
    minRange: number
    maxRange: number
    step: number
    defaultValues: [number, number]
}

const DoubleSlider: React.FC<DoubleSliderPropsType> = ({title, minRange, maxRange, step, defaultValues}) => {

    const [value, setValue] = useState([Number(defaultValues[0]), Number(defaultValues[1])])

    const onChangeHandler = (newValue: any) => {
        console.log(newValue)
        setValue(newValue)
    }

    return (
        <div className={s.tabElement}>
            <div className='flex justify-center my-[10px]'>
                {title}
            </div>
            <Row>
                <Col span={14}>
                    <Slider
                        range={{ draggableTrack: true }}
                        defaultValue={defaultValues}
                        min={minRange}
                        max={maxRange}
                        step={step}
                        onChange={onChangeHandler}
                    />
                </Col>
                <Col span={4} className='ml-[15px]'>
                    <Input value={Number(value[0])}/>
                </Col>
                <Col span={4} className='ml-[10px]'>
                    <Input value={Number(value[1])}/>
                </Col>

            </Row>

        </div>
    );
};

export default DoubleSlider;