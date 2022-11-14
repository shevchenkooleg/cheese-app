import s from '../styles/RecipeCard.module.css'
import {MainInformationType} from "../bll/types";
import {Button} from 'antd';
import {DeleteOutlined} from '@ant-design/icons';
import {useRouter} from "next/router";


type RecipeCardPropsType = {
    recipe: MainInformationType
    id: string
    setTitle: (newTitle: string) => void
    setModalShow: (visible: boolean) => void
    setIdForDelete: (id: string)=>void
}

const RecipeCard: React.FC<RecipeCardPropsType> = ({recipe, id, setModalShow, setTitle, setIdForDelete}) => {
    const {title, cookingTime, initialData} = recipe
    const {milkType} = initialData
    const milkTypeForRender = milkType.join(', ')
    const router = useRouter()

    const onDeleteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        // event.preventDefault()
        event.stopPropagation()
        setModalShow(true)
        setTitle(title)
        setIdForDelete(id)

    }
    const onCardClickHandler = () => {
        router.push(`/library/cheeses/${id}`, undefined, {shallow:true})
    }


    return (
        <div className={s.container} onClick={onCardClickHandler}>
            <Button shape="circle" type={"text"} className={s.deleteButton} icon={<DeleteOutlined style={{color: '#ffffff'}}/>}
                    onClick={onDeleteClick}/>
            <div className={s.title}>{title}</div>
            <div>Время приготовления: {cookingTime} дня</div>
            <div>Требуемый тип молока: {milkTypeForRender}</div>
        </div>
    );
};

export default RecipeCard;