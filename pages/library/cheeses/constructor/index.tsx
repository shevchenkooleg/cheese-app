import s from "../../../../src/styles/Constructor.module.css";
import {ReactNode} from "react";

type ConstructionProps = {
    children: ReactNode
}

const Constructor: React.FC<ConstructionProps> = ({children}) => {



    return (
        <div className='container'>
            <div className='content'>
                <div className='main'>
                    <div className={s.title}>
                        Новая карта
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Constructor;