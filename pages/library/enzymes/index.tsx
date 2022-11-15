import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../src/utils/hooks";
import {Modal} from "antd";
import s from "../../../src/styles/Cheeses.module.css";
import {PATH} from "../../../src/utils/appPath";
import Navbar from "../../../src/component/Navbar";
import {getAllEnzymes} from "../../../src/bll/slices/enzymeSlice";
import EnzymeCard from "../../../src/component/EnzymeCard";
import MyCard from "../../../src/component/uneversal/MyCard";

const leavensNavigation = [
    {id: 1, title: 'Домой', path: PATH.HOME.MAIN},
    {id: 2, title: 'Назад', path: PATH.LIBRARY.MAIN},
    {id: 3, title: 'Настройки', path: PATH.SETTINGS.MAIN},
]


const Enzymes = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getAllEnzymes())
    }, [])

    const enzymes = useAppSelector(state => state.enzymes.enzymes)
    const [visible, setVisible] = useState(false)
    const [title, setTitle] = useState('')
    const [idForDelete, setIdForDelete] = useState('')

    const removeLeavenHandler = () => {
        // console.log('delete', title, idForDelete)
        // dispatch(deleteRecipe({recipeId: idForDelete}))
        setVisible(false)
    }

    console.log(enzymes)

    return (
        <>
            <Modal okType={'default'} title={'Attention!'} open={visible} onOk={removeLeavenHandler}
                   onCancel={() => setVisible(false)}>
                <p className={s.titleModal}>Do you want to <span
                    className={s.textModal}>DELETE</span> <span className={s.attention}>{title}</span> leaven?</p>
                <div className={s.insideModal}>
                </div>
            </Modal>
            <div className='container'>
                <div className='content'>
                    <div className='main'>
                        <div className={s.title}>
                            Ферменты
                        </div>
                        <div className={s.linkTitle}>
                            <button>
                                <Link href={PATH.LIBRARY.ENZYMES.CONSTRUCTOR}>
                                    Добавить фермент
                                </Link>
                            </button>
                        </div>
                        <div className={s.table}>
                            {!!enzymes && enzymes.map(enz =>
                                <EnzymeCard key={enz._id} setModalShow={setVisible}
                                            setTitle={setTitle} setIdForDelete={setIdForDelete} enzyme={enz}/>
                            )}
                        </div>
                    </div>
                    <Navbar navigation={leavensNavigation}/>
                </div>
            </div>
        </>
    );
};

export default Enzymes;