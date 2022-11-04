import s from '../../src/styles/Library.module.css'
import Navbar from "../../src/component/Navbar";
import Link from "next/link";

const navigation = [
    {id: 1, title: 'Home', path: '/'},
    {id: 2, title: 'Assistant', path: '/assistant'},
    {id: 3, title: 'Settings', path: '/settings'},
]


const Library = () => {

    return (
        <div className={s.container}>
            <div className={s.content}>
                <div className={s.title}>
                    Библиотека сыровара
                </div>
                <div className={s.main}>
                    <Link href={'/library/cheeses'} className={s.listElement}>Сыры</Link>
                    <Link href={'/library/leaven'} className={s.listElement}>Закваски</Link>
                </div>
                <Navbar navigation={navigation}/>
            </div>

        </div>

    );
};

export default Library;