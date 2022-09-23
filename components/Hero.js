import style from '../styles/hero.module.scss'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className={style.title}>
            <Link href='/'>Megalomaniac for trade</Link>
        </div>
    );
};

export default Hero;