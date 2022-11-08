import React from 'react';
import s from "../../../../src/styles/Constructor.module.css";
import AgingForm from "../../../../src/component/Constructor/AgingForm";

const Aging = () => {
    return (
        <div className='container'>
            <div className='content'>
                <div className='main'>
                    <div className={s.title}>
                        Созревание
                    </div>
                    <div className='min-h-screen'>
                        <AgingForm/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aging;