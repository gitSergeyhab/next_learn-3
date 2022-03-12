import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/navbar.module.scss'

const navigation = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'Posts', path: '/posts' },
    { id: 3, title: 'Contacts', path: '/contacts' },
  ];


const Navbar = () => {

    const {pathname} = useRouter();
    const navList = navigation.map(({path, id, title}) => 
        <Link key={id} href={path}><a className={pathname === path ? styles.active : ''}>{title}</a></Link>
        );

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
               <Image src={'/logo.png'} alt='logo' width={60} height={60} ></Image>
            </div>
            <div className={styles.links}>
                {navList}
            </div>
        </nav>
    )
}

export default Navbar;