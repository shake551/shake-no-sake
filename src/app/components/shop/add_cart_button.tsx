'use client';
import styles from './add_cart_button.module.css';
import Link from "next/link";

export default function AddCartButton(params: { shopId: string, cocktailId: string }) {
    const onClick = () => {
        let exist = localStorage.getItem("cart");
        let newArray;
        if (exist) {
            let array = JSON.parse(exist);
            newArray = array.concat({"id": params.cocktailId, "count": 1});
        } else {
            newArray = [params.cocktailId];
        }
        localStorage.setItem("cart", JSON.stringify(newArray));
    }
    
    return (
        <div className={styles.cartButtonWrapper}>
            <Link href={`/shop/${params.shopId}/cocktail`}>
                <button className={styles.addCartButton} onClick={onClick}>カートに追加</button>
            </Link>
        </div>
    )
}
