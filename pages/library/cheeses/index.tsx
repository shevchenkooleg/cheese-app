import {useAppSelector} from "../../../src/utils/hooks";
import s from "../../../src/styles/Cheeses.module.css";
import RecipeCard from "../../../src/component/RecipeCard";
import Navbar from "../../../src/component/Navbar";


const cheesesNavigation = [
    {id: 1, title: 'Home', path: '/'},
    {id: 2, title: 'Library', path: '/library'},
    {id: 3, title: 'Settings', path: '/settings'},
]

const Cheeses = () => {

    const recipes = useAppSelector(state => state.library.recipes)


    return (
        <div className={s.container}>
            <div className={s.content}>
                <div className={s.title}>
                    Сыры
                </div>
                <div className={s.main}>
                    {recipes.map(el =>
                        <RecipeCard key={el.mainInformation.id} recipe={el.mainInformation}/>
                    )}
                </div>
                <Navbar navigation={cheesesNavigation}/>
            </div>

        </div>

    );
};

export default Cheeses;