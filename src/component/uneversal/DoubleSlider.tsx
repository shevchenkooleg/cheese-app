import {Col, Input, Row, Slider} from 'antd';
import React, {ChangeEvent} from 'react';
import s from '../../styles/Constructor.module.css'

type DoubleSliderPropsType = {
    title: string
    minRange: number
    maxRange: number
    step: number
    value: [number, number]
    callback: (newValue: [number, number]) => void
    sliderWidth?: number
    inputWidth?: number
}

const DoubleSlider: React.FC<DoubleSliderPropsType> = ({title, minRange, maxRange, step, value, callback, sliderWidth=14, inputWidth=4}) => {

    const onChangeHandler = (newValue: [number, number]) => {
        callback(newValue)
    }
    const onMinValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        callback([Number(e.currentTarget.value), Number(value[1])])
    }
    const onMaxValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callback([Number(value[0]), Number(e.currentTarget.value)])
    }
    const onMinValueInputBlur = () => {
        if (value[0]< minRange){
            callback([Number(minRange), Number(value[1])])
            console.log('Error min value, Value set to a minimum point')
        } else if (value[0] > value[1]){
            callback([Number(value[1]), Number(value[1])])
            console.log('Error min value, Value set to a maximum point')
        }
    }
    const onMaxValueInputBlur = () => {
        if (value[1] > maxRange){
            callback([Number(value[0]), Number(maxRange)])
            console.log('Error max value, Value set to a maximum point')
        } else if (value[1] < value[0]){
            callback([Number(value[0]), Number(value[0])])
            console.log('Error max value, Value set to a minimum point')
        }
    }



    return (
        <div className={s.tabElement}>
            <div className='flex justify-center my-[10px]'>
                {title}
            </div>
            <Row>
                <Col span={sliderWidth}>
                    <Slider
                        range={{draggableTrack: true}}
                        value={value}
                        min={minRange}
                        max={maxRange}
                        step={step}
                        onChange={onChangeHandler}
                    />
                </Col>
                <Col span={inputWidth} className='ml-[15px]'>
                    <Input value={Number(value[0])} onChange={onMinValueChangeHandler} onBlur={onMinValueInputBlur}/>
                </Col>
                <Col span={inputWidth} className='ml-[10px]'>
                    <Input value={Number(value[1])} onChange={onMaxValueChangeHandler} onBlur={onMaxValueInputBlur}/>
                </Col>

            </Row>

        </div>
    );
};

export default DoubleSlider;