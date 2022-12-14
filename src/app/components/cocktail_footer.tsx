import {memo} from 'react';
import {Home, List, PlusCircle} from 'react-feather';
import Link from 'next/link';

import styles from './footer.module.css';

const accentColor = 'silver';

export const CocktailFooter = memo(() => (
    <footer className={styles.footer}>
        <Link href={`/cocktails`}>
            <Home size={80} color={accentColor}/>
        </Link>
        <Link href={`/cocktails/post`}>
            <PlusCircle size={80} color={accentColor}/>
        </Link>
        <Link href={`/cocktails`}>
            <List size={80} color={accentColor}/>
        </Link>
    </footer>
));
