import {memo} from 'react';
import {Home, List, PlusCircle, ShoppingCart} from 'react-feather';

import styles from './footer.module.css';

const accentColor = 'silver';

export const CocktailFooter = memo(() => (
    <footer className={styles.footer}>
        <Home size={80} color={accentColor} />
        <PlusCircle size={80} color={accentColor} />
        <List size={80} color={accentColor} />
    </footer>
));

export const ShopFooter = memo(() => (
    <footer className={styles.footer}>
        <Home size={80} color={accentColor} />
        <ShoppingCart size={80} color={accentColor} />
    </footer>
))
