import React from 'react';
import {useRouter} from "next/router";
import s from "../../../src/styles/Cheese.module.css";
import Navbar from "../../../src/component/Navbar";
import MainInformation from "../../../src/component/TechnicalData/MainInformation";
import {useAppDispatch, useAppSelector} from "../../../src/utils/hooks";
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
import Aging from "../../../src/component/TechnicalData/Aging";
import Storage from "../../../src/component/TechnicalData/Storage";
import ApplyCancelBtnBlock from "../../../src/component/uneversal/ApplyCancelBtnBlock";
import {PATH} from "../../../src/utils/appPath";
import {RecipeType} from "../../../src/bll/types";
import {createRecipe} from "../../../src/bll/slices/recipesSlice";


const cheesesNavigation = [
    {id: 1, title: 'Домой', path: '/'},
    {id: 2, title: 'Назад', path: '/library/cheeses'},
    {id: 3, title: 'Настройки', path: '/settings'},
]

const cheese = () => {

    const dispatch = useAppDispatch()
    const {query} = useRouter()
    let recipe: RecipeType
    if (query.id === 'NEW'){
        console.log('yes')
        recipe = useAppSelector(state => state.newRecipe)
    } else {
        console.log('no')
        recipe = useAppSelector(state => state.recipes.recipes.filter(el => el.id === query.id)[0])
    }

    console.log(recipe)

    const addNewRecipeHandler = () => {
        console.log(recipe)
        const neeRecipeDataForDB = {
            title: recipe.mainInformation.title,
            recipe: JSON.stringify(recipe)
        }
        dispatch(createRecipe(neeRecipeDataForDB))
    }

    return (
        <div className='container'>
            {recipe && <div className='content'>
                <div className='main'>
                    <div className={s.title}>
                        {recipe.mainInformation.title}
                    </div>
                    <div className={s.recipe}>
                        <MainInformation mainInformation={recipe.mainInformation}/>
                        <Pasteurization pasteurization={recipe.pasteurization}/>
                        <Ripening ripening={recipe.ripening}/>
                        <Cutting cutting={recipe.cutting}/>
                        <Kneading kneading={recipe.kneading}/>
                        {recipe.spices !== null && <Spices spices={recipe.spices}/>}
                        {recipe.secondHeating && <SecondHeating secondHeating={recipe.secondHeating}/>}
                        <Layout layout={recipe.layout}/>
                        <Coups coups={recipe.coups}/>
                        <Salting salting={recipe.salting}/>
                        <Drying drying={recipe.drying}/>
                        <Aging aging={recipe.aging}/>
                        <Storage storage={recipe.storage}/>
                    </div>
                    {query.id === 'NEW'
                        ?
                        <>
                            <div className='text-[20px] text-red-300 my-[20px] flex justify-center'>
                                Сохранить данную техкарту?
                            </div>
                            <div className='h-[60px]'>
                                <ApplyCancelBtnBlock btnData={[
                                    {title:'НЕТ', linkPath: PATH.LIBRARY.CHEESES.CONSTRUCTOR.AGING, callback:()=>{}},
                                    {title:'ДА',linkPath:PATH.LIBRARY.CHEESES.MAIN, callback:()=>{addNewRecipeHandler()}}]}/>
                            </div>
                        </>
                        : <Navbar navigation={cheesesNavigation}/>}

                </div>
            </div>
            }
        </div>
    );
};

export default cheese;