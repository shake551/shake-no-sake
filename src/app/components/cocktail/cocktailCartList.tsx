import styles from "./cocktailCartList.module.css";
import CocktailCartElement from "./cocktailCartElement";

export default function CocktailCartList(props: {cocktailList: {id: number, name: string}[], category: string, shopID: number | null}) {
    return (
        <ul className={styles.cocktailCartCardList}>
            {props.cocktailList.map(({id, name}: { id: number, name: string }) => (
                <li className={styles.cocktailCartCardWrapper} key={id}>
                    <CocktailCartElement id={id} name={name} category={props.category} shopID={props.shopID} />
                </li>
            ))}
        </ul>
    )
}
