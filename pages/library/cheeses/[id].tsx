import React from 'react';
import {useRouter} from "next/router";
import s from "../../../src/styles/Cheese.module.css";
import Navbar from "../../../src/component/Navbar";
import MainInformation from "../../../src/component/TechnicalData/MainInformation";
import {useAppSelector} from "../../../src/utils/hooks";
import Pasteurization from "../../../src/component/TechnicalData/Pasteurization";
import Ripening from "../../../src/component/TechnicalData/Ripening";


const cheesesNavigation = [
    {id: 1, title: 'Home', path: '/'},
    {id: 2, title: 'Cheeses', path: '/library/cheeses'},
    {id: 3, title: 'Settings', path: '/settings'},
]

const cheese = () => {

    const {query} = useRouter()
    const recipe = useAppSelector(state => state.library.recipes.filter(el => el.mainInformation.id === Number(query.id))[0])

    return (
        <div className={s.container}>
            {recipe && <div className={s.content}>
                <div className={s.title}>
                    {recipe.mainInformation.title}
                </div>
                <div className={s.main}>
                    <MainInformation mainInformation={recipe.mainInformation}/>
                    <Pasteurization pasteurization={recipe.pasteurization}/>
                    <Ripening ripening={recipe.ripening}/>
                </div>
                <Navbar navigation={cheesesNavigation}/>
            </div>
            }
        </div>
    );
};

export default cheese;