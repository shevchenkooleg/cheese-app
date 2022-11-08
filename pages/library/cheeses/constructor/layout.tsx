import React from 'react';
import s from "../../../../src/styles/Constructor.module.css";
import LayoutForm from "../../../../src/component/Constructor/LayoutForm";

const Layout = () => {
    return (
        <div className='container'>
            <div className='content'>
                <div className='main'>
                    <div className={s.title}>
                        Выкладка
                    </div>
                    <div className='min-h-screen'>
                        <LayoutForm/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;