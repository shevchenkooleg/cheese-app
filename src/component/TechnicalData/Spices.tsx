import s from '../../styles/Information.module.css';
import {SpicesType} from "../../bll/types";

type SpicesPropsType = {
    spices: SpicesType
}

const Spices:React.FC<SpicesPropsType> = ({spices}) => {

    const {type, weight, additionally} = spices
    const spicesTypeForRendering = type.join(', ')


    return (
        <div className={s.container}>
            <div className={s.title}>Специи &nbsp; <p className='text-[#ee0d0d]'>(опционально)</p></div>
            <div className={s.tableElement}>
                <div>Вид специй:</div>
                <div className='text-right'>{spicesTypeForRendering}</div>
            </div>
            <div className={s.tableElement}>
                <div>Вес специй:</div>
                <div className='text-right'>{weight.total} {weight.option}</div>
            </div>
            <div className={s.tableElement}>
                <div>Способ применения: </div>
                <div className='text-right break-all'>{additionally}</div>
            </div>

        </div>
    );
};

export default Spices;