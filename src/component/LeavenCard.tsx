import s from '../styles/RecipeCard.module.css'
import {LeavenObjectType} from "../bll/types";
import {Button} from 'antd';
import {DeleteOutlined} from '@ant-design/icons';
import {useRouter} from "next/router";


type LeavenCardPropsType = {
    leaven: LeavenObjectType
    setModalShow: (newValue: boolean) => void
    setTitle: (newValue: string) => void
    setIdForDelete: (newValue: string) => void
}


const LeavenCard: React.FC<LeavenCardPropsType> = ({leaven}) => {

    const {title, _id, dateOfPacketOpen, leavenConcentration, leavenPower, initialWeight} = leaven
    const router = useRouter()
    console.log(router)

    const onDeleteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        // event.preventDefault()
        // event.stopPropagation()
        // setModalShow(true)
        // setTitle(title)
        // setIdForDelete(id)

    }
    const onCardClickHandler = () => {
        router.push(`/library/leavens/${_id}`, undefined, {shallow:true})
    }


    return (
        <div className={s.container} onClick={onCardClickHandler}>
            <Button shape="circle" type={"text"} className={s.deleteButton} icon={<DeleteOutlined style={{color: '#ffffff'}}/>}
                    onClick={onDeleteClick}/>
            <div className={s.title}>{title}</div>
            <div>Концентрация закваски: {leavenConcentration}</div>
            <div>Расчетная дозировка: {leavenPower.min} - {leavenPower.max} литров</div>
            <div>Начальный вес: {initialWeight}</div>
            <div>Дата открытия пакета: {dateOfPacketOpen}</div>
        </div>
    );
};

export default LeavenCard;