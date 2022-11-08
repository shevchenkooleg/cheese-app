import s from '../../../../src/styles/Constructor.module.css';
import React from "react";
import SpicesForm from "../../../../src/component/Constructor/SpicesForm";

const Cutting = () => {


    return (
        <div className='container'>
            <div className='content'>
                <div className='main'>
                    <div className={s.title}>
                        Специи
                    </div>
                    <div className='min-h-screen'>
                        <SpicesForm/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cutting;