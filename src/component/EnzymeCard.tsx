import {EnzymeObjectType} from "../bll/types";
import {useRouter} from "next/router";
import s from "../styles/RecipeCard.module.css";
import {Button} from "antd";
import {DeleteOutlined} from "@ant-design/icons";

type EnzymeCardPropsType = {
    enzyme: EnzymeObjectType
    setModalShow: (newValue: boolean) => void
    setTitle: (newValue: string) => void
    setIdForDelete: (newValue: string) => void
}


const EnzymeCard: React.FC<EnzymeCardPropsType> = ({enzyme}) => {

    const {title, _id, dateOfPacketOpen, initialWeight, enzymePower, bestBeforeDate} = enzyme
    const router = useRouter()
    console.log(router)

    const onDeleteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        // event.preventDefault()
        // event.stopPropagation()
        // setModalShow(true)
        // setTitle(title)
        // setIdForDelete(id)

    }


    return (
        <div className={s.container}>
            <Button shape="circle" type={"text"} className={s.deleteButton} icon={<DeleteOutlined style={{color: '#ffffff'}}/>}
                    onClick={onDeleteClick}/>
            <div className={s.title}>{title}</div>
            <div>Расчетная дозировка: {enzymePower.min} - {enzymePower.max} литров</div>
            <div>Начальный вес: {initialWeight}</div>
            <div>Дата открытия пакета: {dateOfPacketOpen}</div>
            <div>Срок годности: {bestBeforeDate}</div>
        </div>
    );
};

export default EnzymeCard;