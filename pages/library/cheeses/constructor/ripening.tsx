import React from 'react';
import s from "../../../../src/styles/Constructor.module.css";
import RipeningForm from "../../../../src/component/Constructor/RipeningForm";

const Ripening = () => {



    return (
        <div className='container'>
            <div className='content'>
                <div className='main'>
                    <div className={s.title}>
                        Культуры
                    </div>
                    <div className='min-h-screen'>
                        <RipeningForm/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ripening;