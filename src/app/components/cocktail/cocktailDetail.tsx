import styles from "./cocktailDetail.module.css";
import Image from "next/image";

export default function CocktailDetail(props: { isShop: boolean, cocktailDetail: { id: number, name: string, materials: { id: number, name: string, quantity: { quantity: number, unit: string } | null }[] } }) {
    return (
        <div className={styles.cocktailsDetailWrapper}>
            <Image
                src="/cocktail_sample.jpg"
                alt="cocktail sample image"
                width={500}
                height={500}
                className={styles.cocktailsDetailImage}
            />
            
            <div className={styles.cocktailsDetailName}>
                <h1>{props.cocktailDetail.name}</h1>
            </div>
            
            <div className={styles.cocktailsMaterialTableWrapper}>
                
                <table className={styles.cocktailsMaterialTable}>
                    <tr>
                        {props.isShop ? <th className={`${styles.tableBorderBottom} ${styles.cocktailsMaterialTableElement} ${styles.cocktailsMaterialName}`}>材料名</th> :
                            <>
                                <th className={`${styles.tableBorderBottom} ${styles.cocktailsMaterialTableElement} ${styles.tableBorderRight} ${styles.cocktailsMaterialName}`}>材料名</th>
                                <th className={`${styles.tableBorderBottom} ${styles.cocktailsMaterialTableElement}`}>分量</th>
                            </>}
                    </tr>
                    {props.cocktailDetail.materials.map((material: {
                        id: number,
                        name: string,
                        quantity: {
                            quantity: number,
                            unit: string,
                        } | null
                    }) => (
                        <tr>
                            {props.isShop ? <td className={`${styles.cocktailsMaterialTableElement}`}>{material.name}</td> :
                                <>
                                    <td className={`${styles.cocktailsMaterialTableElement} ${styles.tableBorderRight}`}>{material.name}</td>
                                    <td className={styles.cocktailsMaterialTableElement}>{material.quantity?.quantity} {material.quantity?.unit}</td>
                                </>}
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}
