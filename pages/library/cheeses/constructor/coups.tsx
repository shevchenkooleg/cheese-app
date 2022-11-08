import React from 'react';
import s from "../../../../src/styles/Constructor.module.css";
import CoupsForm from "../../../../src/component/Constructor/CoupsForm";

const Coups = () => {
    return (
        <div className='container'>
            <div className='content'>
                <div className='main'>
                    <div className={s.title}>
                        Дренажирование
                    </div>
                    <div className='min-h-screen'>
                        <CoupsForm/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coups;