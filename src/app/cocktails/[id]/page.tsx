import Image from "next/image";

import styles from "./cocktailsDetail.module.css"


async function getCocktailsDetail(id: string) {
    const res = await fetch(`http://host.docker.internal/cocktails/${id}`, {method: 'GET'})
    return res.json();
}

export default async function Page({params}: { params: { id: string } }) {
    const cocktailsDetail = await getCocktailsDetail(params.id);
    console.log(cocktailsDetail)
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
                <h1>{cocktailsDetail.name}</h1>
            </div>

            <div className={styles.cocktailsMaterialTableWrapper}>

                <table className={styles.cocktailsMaterialTable}>
                    <tr>
                        <th className={`${styles.tableBorderBottom} ${styles.cocktailsMaterialTableElement} ${styles.tableBorderRight} ${styles.cocktailsMaterialName}`}>材料名</th>
                        <th className={`${styles.tableBorderBottom} ${styles.cocktailsMaterialTableElement}`}>分量</th>
                    </tr>
                    {cocktailsDetail.materials.map((material: {
                        id: number,
                        name: string,
                        quantity: {
                            quantity: number,
                            unit: string,
                        }
                    }) => (
                        <tr>
                            <td className={`${styles.cocktailsMaterialTableElement} ${styles.tableBorderRight}`}>{material.name}</td>
                            <td className={styles.cocktailsMaterialTableElement}>{material.quantity.quantity} {material.quantity.unit}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}
