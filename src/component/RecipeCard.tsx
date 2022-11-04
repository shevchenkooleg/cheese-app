import s from '../styles/RecipeCard.module.css'
import {MainInformationType} from "../bll/types";


type RecipeCardPropsType = {
    recipe: MainInformationType
}

const RecipeCard: React.FC<RecipeCardPropsType> = ({recipe}) => {
    const {title, cookingTime, ripeningTime, initialData} = recipe
    const {milkType, milkPH, protein, fat} = initialData
    const milkTypeForRender = milkType.join(', ')

    return (
        <div className={s.container}>
            <div className={s.title}>{title}</div>
            <div>Время приготовления: {cookingTime} дня</div>
            <div>Требуемый тип молока: {milkTypeForRender}</div>
        </div>
    );
};

export default RecipeCard;