import styles from "./cocktailCartElement.module.css";
import Image from "next/image";

export default function CocktailCartElement(props: {id: number, name: string, category: string, shopID: number | null}) {
    return (
            <div className={styles.cocktailCartCard}>
                <Image
                    src="/cocktail_sample.jpg"
                    alt="cocktail sample image"
                    width={200}
                    height={200}
                    className={styles.cocktailCartCardImage}
                />
                <h1 className={styles.cocktailCartCardName}>{props.name}</h1>
            </div>
    )
}
