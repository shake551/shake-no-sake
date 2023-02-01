import {memo} from 'react';
import {Home, List, ShoppingCart} from 'react-feather';
import Link from 'next/link';

import styles from '../footer.module.css';

const accentColor = 'silver';

export const ShopFooter = memo((props: {shopId: number, tableId: number}) => (
    <footer className={styles.footer}>
        <Link href={`/shop/${props.shopId}/table/${props.tableId}`}>
            <Home size={80} color={accentColor}/>
        </Link>
        <Link href={`/shop/${props.shopId}/table/${props.tableId}/cart`}>
            <ShoppingCart size={80} color={accentColor}/>
        </Link>
        <Link href={`/shop/${props.shopId}/table/${props.tableId}/cocktail`}>
            <List size={80} color={accentColor}/>
        </Link>
    </footer>
));
