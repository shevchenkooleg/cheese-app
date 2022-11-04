import {useAppSelector} from "../src/utils/hooks";
import RecipeCard from "../src/component/RecipeCard";
import s from '../src/styles/Library.module.css'
import Navbar from "../src/component/Navbar";

const navigation = [
    {id: 1, title: 'Home', path: '/'},
    {id: 2, title: 'Assistant', path: '/assistant'},
    {id: 3, title: 'Settings', path: '/settings'},
]


const Library = () => {

    const recipes = useAppSelector(state => state.library.recipes)

    return (
        <div className={s.container}>
            <div className={s.content}>
                <div className={s.title}>
                    Библиотека сыровара
                </div>
                <div className={s.main}>
                    {recipes.map(el =>
                        <RecipeCard recipe={el.mainInformation}/>
                    )}
                </div>
                <Navbar navigation={navigation}/>
            </div>

        </div>

    );
};

export default Library;