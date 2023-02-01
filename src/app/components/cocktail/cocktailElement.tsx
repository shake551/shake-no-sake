import Link from "next/link";
import styles from "./cocktailList.module.css";
import Image from "next/image";

export default function CocktailElement(props: {id: number, name: string, category: string, shopID: number | null, tableID: number | null}) {
    let baseURL = `/cocktails/${props.id}`
    if (props.category == 'shop') {
        baseURL = `/shop/${props.shopID}/table/${props.tableID}/cocktail/${props.id}`;
    }
    
    return (
        <Link href={`${baseURL}`}>
            <button className={styles.cocktailsCard} disabled={props.category == 'shop'}>
                <Image
                    src="/cocktail_sample.jpg"
                    alt="cocktail sample image"
                    width={200}
                    height={200}
                    className={styles.cocktailsCardImage}
                />
                <h1 className={styles.cocktailsCardName}>{props.name}</h1>
            </button>
        </Link>
    )
}
