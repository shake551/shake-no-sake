import {memo} from 'react';
import {Home, List, PlusCircle} from 'react-feather';

import styles from './footer.module.css';

const accentColor = 'silver';

export const Footer = memo(() => (
    <footer className={styles.footer}>
        <Home size={80} color={accentColor} />
        <PlusCircle size={80} color={accentColor} />
        <List size={80} color={accentColor} />
    </footer>
));
