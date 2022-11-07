import {Input} from 'antd';
import s from '../../styles/Constructor.module.css'

type UInputPropsType = {
    title: string
    placeholderValue: string
}

const UInput:React.FC<UInputPropsType> = ({title, placeholderValue}) => {
    return (
        <div className={s.tabElement}>
            <div className='flex justify-center my-[10px]'>
                {title}
            </div>
            <Input placeholder={placeholderValue} className='mb-[10px]'/>
        </div>

    );
};

export default UInput;