import s from "../../../../src/styles/Constructor.module.css";
import {ReactNode} from "react";
import MainInformationForm from "../../../../src/component/Constructor/MainInformationForm";


const Constructor = () => {


    return (
        <div className='container'>
            <div className='content'>
                <div className='main'>
                    <div className={s.title}>
                        Общая информация
                    </div>
                    <div className='min-h-screen'>
                        <MainInformationForm/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Constructor;