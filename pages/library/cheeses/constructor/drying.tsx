import React from 'react';
import s from "../../../../src/styles/Constructor.module.css";
import DryingForm from "../../../../src/component/Constructor/DryingForm";

const Drying = () => {
    return (
        <div className='container'>
            <div className='content'>
                <div className='main'>
                    <div className={s.title}>
                        Обсушка
                    </div>
                    <div className='min-h-screen'>
                        <DryingForm/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Drying;