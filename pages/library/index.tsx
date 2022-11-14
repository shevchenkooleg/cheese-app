import s from '../../src/styles/Library.module.css'
import Navbar from "../../src/component/Navbar";
import Link from "next/link";

const navigation = [
    {id: 1, title: 'Домой', path: '/'},
    {id: 2, title: 'Помощник', path: '/assistant'},
    {id: 3, title: 'Настройки', path: '/settings'},
]


const Library = () => {

    return (
        <div className='container'>
            <div className='content'>
                <div className={s.title}>
                    Библиотека сыровара
                </div>
                <div className={s.main}>
                    <Link href={'/library/cheeses'} className={s.listElement}>Сыры</Link>
                    <Link href={'/library/leavens'} className={s.listElement}>Закваски</Link>
                    <Link href={'/library/enzymes'} className={s.listElement}>Ферменты</Link>
                </div>
                <Navbar navigation={navigation}/>
            </div>

        </div>

    );
};

export default Library;