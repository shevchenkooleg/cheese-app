import s from "../../../../src/styles/Constructor.module.css";
import MainInformationForm from "../../../../src/component/Constructor/MainInformationForm";
import PasteurizationForm from "../../../../src/component/Constructor/PasteurizationForm";


const Pasteurization = () => {


    return (
        <div className='container'>
            <div className='content'>
                <div className='main'>
                    <div className={s.title}>
                        Термическая обработка
                    </div>
                    <div className='min-h-screen'>
                        <PasteurizationForm/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pasteurization;