import s from '../../../../src/styles/Constructor.module.css';
import React from "react";
import CuttingForm from "../../../../src/component/Constructor/CuttingForm";

const Cutting = () => {


    return (
        <div className='container'>
            <div className='content'>
                <div className='main'>
                    <div className={s.title}>
                        Нарезка, вымешивание
                    </div>
                    <div className='min-h-screen'>
                        <CuttingForm/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cutting;