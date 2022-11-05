import React from 'react';
import {useRouter} from "next/router";
import s from "../../../src/styles/Cheese.module.css";
import Navbar from "../../../src/component/Navbar";
import MainInformation from "../../../src/component/TechnicalData/MainInformation";
import {useAppSelector} from "../../../src/utils/hooks";
import Pasteurization from "../../../src/component/TechnicalData/Pasteurization";
import Ripening from "../../../src/component/TechnicalData/Ripening";
import Cutting from "../../../src/component/TechnicalData/Cutting";
import Kneading from "../../../src/component/TechnicalData/Kneading";
import SecondHeating from "../../../src/component/TechnicalData/SecondHeating";
import Spices from "../../../src/component/TechnicalData/Spices";
import Layout from "../../../src/component/TechnicalData/Layout";
import Coups from "../../../src/component/TechnicalData/Coups";
import Salting from "../../../src/component/TechnicalData/Salting";
import Drying from "../../../src/component/TechnicalData/Drying";


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
                    <Cutting cutting={recipe.cutting}/>
                    <Kneading kneading={recipe.kneading}/>
                    {recipe.spices !== null && <Spices spices={recipe.spices}/>}
                    <SecondHeating secondHeating={recipe.secondHeating}/>
                    <Layout layout={recipe.layout}/>
                    <Coups coups={recipe.coups}/>
                    <Salting salting={recipe.salting}/>
                    <Drying drying={recipe.drying}/>
                </div>
                <Navbar navigation={cheesesNavigation}/>
            </div>
            }
        </div>
    );
};

export default cheese;