import Link from "next/link";
import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../src/utils/hooks";
import {Modal} from "antd";
import s from "../../../src/styles/Cheeses.module.css";
import {PATH} from "../../../src/utils/appPath";
import Navbar from "../../../src/component/Navbar";
import {getAllLeavens} from "../../../src/bll/slices/leavensSlice";
import LeavenCard from "../../../src/component/LeavenCard";
import MyCard from "../../../src/component/uneversal/MyCard";

const leavensNavigation = [
    {id: 1, title: 'Домой', path: PATH.HOME.MAIN},
    {id: 2, title: 'Назад', path: PATH.LIBRARY.MAIN},
    {id: 3, title: 'Настройки', path: PATH.SETTINGS.MAIN},
]

const Leavens = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        console.log('effect')
        dispatch(getAllLeavens())
    }, [])

    const leavens = useAppSelector(state => state.leavens.leavens)
    const [visible, setVisible] = useState(false)
    const [title, setTitle] = useState('')
    const [idForDelete, setIdForDelete] = useState('')

    const removeLeavenHandler = () => {
        // console.log('delete', title, idForDelete)
        // dispatch(deleteRecipe({recipeId: idForDelete}))
        setVisible(false)
    }

  console.log(leavens)

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
                            Закваски
                        </div>
                        <div className={s.linkTitle}>
                            <button>
                                <Link href={PATH.LIBRARY.LEAVENS.CONSTRUCTOR}>
                                    Добавить закваску
                                </Link>
                            </button>
                        </div>
                        <div className={s.table}>
                            {leavens[0] && leavens.map(el =>
                                <LeavenCard key={el._id} setModalShow={setVisible}
                                            setTitle={setTitle} setIdForDelete={setIdForDelete} leaven={el}/>
                            )}
                        </div>
                    </div>
                    <Navbar navigation={leavensNavigation}/>
                </div>
            </div>
        </>
    );
};


export default Leavens;