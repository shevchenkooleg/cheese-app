import s from '../styles/RecipeCard.module.css'
import {MainInformationType} from "../bll/types";
import Link from "next/link";


type RecipeCardPropsType = {
    recipe: MainInformationType
    id: string
}

const RecipeCard: React.FC<RecipeCardPropsType> = ({recipe, id}) => {
    const {title, cookingTime, initialData} = recipe
    const {milkType} = initialData
    const milkTypeForRender = milkType.join(', ')


    return (
        <Link href={`/library/cheeses/${id}`} className={s.container}>
            <div className={s.title}>{title}</div>
            <div>Время приготовления: {cookingTime} дня</div>
            <div>Требуемый тип молока: {milkTypeForRender}</div>
        </Link>
    );
};

export default RecipeCard;