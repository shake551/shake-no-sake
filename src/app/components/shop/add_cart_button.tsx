import styles from './add_cart_button.module.css';

export default function AddCartButton() {
    return (
        <div className={styles.cartButtonWrapper}>
            <button className={styles.addCartButton}>カートに追加</button>
        </div>
    )
}
