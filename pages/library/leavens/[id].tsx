import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../src/utils/hooks";
import {useRouter} from "next/router";
import s from "../../../src/styles/Leaven.module.css";
import Navbar from "../../../src/component/Navbar";


const leavenNavigation = [
    {id: 1, title: 'Домой', path: '/'},
    {id: 2, title: 'Назад', path: '/library/leavens'},
    {id: 3, title: 'Настройки', path: '/settings'},
]

const Leaven = () => {


    const dispatch = useAppDispatch()
    const {query} = useRouter()
    const leaven = useAppSelector(state => state.leavens.leavens.filter(el => el._id === query.id)[0])
    // const leaven = useAppSelector(state => state.leavens.leavens[0])
    // console.log(leaven)

    return (
        <div className='container'>
            {leaven && <div className='content'>
                <div className='main'>
                    <div className={s.leaven}>
                        <div className={s.container}>
                            <div className={s.title}>{leaven.title} {leaven.leavenConcentration}</div>
                            <div className={s.tableElement}>
                                <div>Расчетная дозировка:</div>
                                <div className={s.cutting}>{leaven.leavenPowerMin} - {leaven.leavenPowerMax} литров</div>
                            </div>
                            <div className={s.tableElement}>
                                <div>Начальный вес:</div>
                                <div>{leaven.initialWeight}</div>
                            </div>
                            <div className={s.tableElement}>
                                <div>Дата производства:</div>
                                <div>{leaven.dateOfManufacture}</div>
                            </div>
                            <div className={s.tableElement}>
                                <div>дата вскрытия пакета:</div>
                                <div>{leaven.dateOfPacketOpen}</div>
                            </div>
                        </div>
                    </div>
                    <Navbar navigation={leavenNavigation}/>

                </div>
            </div>
            }
        </div>
    );
};

    export default Leaven;