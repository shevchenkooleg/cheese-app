import {useAppSelector} from "../../../src/utils/hooks";
import s from "../../../src/styles/Cheeses.module.css";
import RecipeCard from "../../../src/component/RecipeCard";
import Navbar from "../../../src/component/Navbar";
import Link from "next/link";
import { PATH } from "../../../src/utils/appPath";


const cheesesNavigation = [
    {id: 1, title: 'Home', path: PATH.HOME.MAIN},
    {id: 2, title: 'Library', path: PATH.LIBRARY.MAIN},
    {id: 3, title: 'Settings', path: PATH.SETTINGS.MAIN},
]

const Cheeses = () => {

    const recipes = useAppSelector(state => state.library.recipes)


    return (
        <div className='container'>
            <div className='content'>
                <div className='main'>
                    <div className={s.title}>
                        Сыры
                    </div>
                    <div className={s.linkTitle}>
                        <button>
                            <Link href={PATH.LIBRARY.CHEESES.CONSTRUCTOR.MAIN}>
                                Добавить технологическую карту
                            </Link>
                        </button>
                    </div>
                    <div className={s.table}>
                        {recipes.map(el =>
                            <RecipeCard key={el.mainInformation.id} recipe={el.mainInformation}/>
                        )}
                    </div>
                </div>
                <Navbar navigation={cheesesNavigation}/>
            </div>
        </div>
    );
};

export default Cheeses;