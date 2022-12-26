import styles from "./cocktailList.module.css";
import CocktailElement from "./cocktailElement";


export default function CocktailList(props: {cocktailList: {id: number, name:string}[], category: string, shopID: number | null}) {
    return (
        <ul className={styles.cocktailsCardList}>
            {props.cocktailList.map(({id, name}: { id: number, name: string }) => (
                <li className={styles.cocktailsCardWrapper} key={id}>
                    <CocktailElement id={id} name={name} category={props.category} shopID={props.shopID} />
                </li>
            ))}
        </ul>
    )
}
