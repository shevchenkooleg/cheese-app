import Link from "next/link";
import s from '../styles/Navbar.module.css'
import {NavigationType} from "../bll/types";

type NavbarPropsType = {
    navigation: Array<NavigationType>
}

const Navbar: React.FC<NavbarPropsType> = ({navigation}) => {

    return (
        <div className={s.container}>
            {
                navigation.map(({id, title, path}) =>
                    <div key={id} className={s.element}>
                        <Link href={path}>
                            {title}
                        </Link>
                    </div>
                )
            }

        </div>
    )

};

export default Navbar;