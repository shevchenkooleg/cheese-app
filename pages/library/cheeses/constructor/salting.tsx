import React from 'react';
import s from "../../../../src/styles/Constructor.module.css";
import SaltingForm from "../../../../src/component/Constructor/SaltingForm";

const Salting = () => {
    return (
        <div className='container'>
            <div className='content'>
                <div className='main'>
                    <div className={s.title}>
                        Посолка
                    </div>
                    <div className='min-h-screen'>
                        <SaltingForm/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Salting;