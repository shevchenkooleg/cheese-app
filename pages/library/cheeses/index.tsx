import {useAppDispatch, useAppSelector} from "../../../src/utils/hooks";
import s from "../../../src/styles/Cheeses.module.css";
import RecipeCard from "../../../src/component/RecipeCard";
import Navbar from "../../../src/component/Navbar";
import Link from "next/link";
import { PATH } from "../../../src/utils/appPath";
import {useEffect, useState} from "react";
import {deleteRecipe, getAllRecipe} from "../../../src/bll/slices/recipesSlice";
import { Modal } from "antd";


const cheesesNavigation = [
    {id: 1, title: 'Домой', path: PATH.HOME.MAIN},
    {id: 2, title: 'Назад', path: PATH.LIBRARY.MAIN},
    {id: 3, title: 'Настройки', path: PATH.SETTINGS.MAIN},
]

const Cheeses = () => {

    const dispatch = useAppDispatch()

    useEffect(()=>{
        console.log('effect')
        dispatch(getAllRecipe())
    },[])

    const recipes = useAppSelector(state => state.recipes.recipes)
    const [visible, setVisible] = useState(false)
    const [title, setTitle] = useState('')
    const [idForDelete, setIdForDelete] = useState('')

    const removeRecipeHandler = () => {
        // console.log('delete', title, idForDelete)
        dispatch(deleteRecipe({recipeId: idForDelete}))
        setVisible(false)
    }


    return (
        <>
            <Modal okType={'default'} title={'Attention!'} open={visible} onOk={removeRecipeHandler} onCancel={() => setVisible(false)}>
                <p className={s.titleModal}>Do you want to <span
                    className={s.textModal}>DELETE</span> <span className={s.attention}>{title}</span> recipe?</p>
                <div className={s.insideModal}>
                </div>
            </Modal>
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
                                <RecipeCard key={el.id} recipe={el.mainInformation} id={el.id} setModalShow={setVisible}
                                            setTitle={setTitle} setIdForDelete={setIdForDelete}/>
                            )}
                        </div>
                    </div>
                    <Navbar navigation={cheesesNavigation}/>
                </div>
            </div>
        </>
    );
};

export default Cheeses;